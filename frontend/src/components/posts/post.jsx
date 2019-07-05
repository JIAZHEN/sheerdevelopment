import React, { PureComponent, Fragment } from 'react';
import profileImage from '../hero-profile/profile.jpg';
import './post.scss';

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

  componentWillMount () {
    this.getPost(this.slug);
  }

  postMarkup(post) {
    return (
      <section id="post-body">
        <div className="container">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <div className="post-avatar">
                <img className="rounded-circle" height="36" src={profileImage} width="36"/>
              </div>
              <div className="post-summary">
                <a className="link link-accent">Jiazhen Xie</a>
                in
                <a className="link link-accent">UK</a>
                <span className="post-meta dim-text">
                  <span className="post-meta">
                    <a className="link link-accent" href="<%= posts_path) %>">
                      <span className="label label-success">{post.tag_list}
                      </span>
                    </a>
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <h1 className="post-title grey-header">{post.title}</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <article className="markdown-body">{post.content}</article>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <br/>
              <div id="disqus_thread"></div>
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

export default Post;
