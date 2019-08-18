import React, { PureComponent, Fragment } from 'react'
import Disqus from 'disqus-react'
import profileImage from '../hero-profile/profile.jpg'
import Tags from './tags'
import './post.scss'

const ReactMarkdown = require('react-markdown')
function Image(props) {
  return <img {...props} style={{maxWidth: '100%'}} />
}

class Post extends PureComponent {
  constructor (props) {
    super(props)
    this.getPost = this.getPost.bind(this)
    this.state = {}
    this.slug = props.match.params.slug
  }

  fetch (endpoint) {
    return window.fetch(endpoint)
      .then(response => response.json())
      .catch(error => console.log(error))
  }

  getPost (slug) {
    this.fetch(`/v1/posts/${slug}`)
      .then(post => this.setState({post: post}))
  }

  componentDidMount () {
    this.getPost(this.slug)
  }

  postMarkup(post) {
    const disqusShortname = 'sheerdevelopment'
    const disqusConfig = {
      url: window.location.href,
      identifier: post.disqus_identifier,
      title: post.title
    }

    return (
      <section id="post-body">
        <div className="container">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <Tags post={post} />
            </div>
          </div>
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <h1 className="post-title grey-header">{post.title}</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <ReactMarkdown
                source={post.content}
                renderers={{image: Image}}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <br/>
              <Disqus.CommentCount shortname={disqusShortname} config={disqusConfig}>
                Comments
              </Disqus.CommentCount>

              <Disqus.DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
            </div>
          </div>
        </div>
      </section>
    )
  }

  render() {
    let { post } = this.state
    return post ? this.postMarkup(post) : <section><p>Loading</p></section>
  }
}

export default Post
