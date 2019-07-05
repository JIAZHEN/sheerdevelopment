import React, { PureComponent, Fragment } from 'react';
import PostList from './post-list'
import HeroProfile from '../hero-profile/hero-profile';

class Posts extends PureComponent {
  constructor () {
    super()
    this.state = { posts: [] }
    this.getPosts = this.getPosts.bind(this)
  }

  fetch (endpoint) {
    return window.fetch(endpoint)
      .then(response => response.json())
      .catch(error => console.log(error))
  }

  getPosts () {
    this.fetch('/v1/posts')
      .then(posts => {
        if (posts.length) {
          this.setState({posts: posts})
        } else {
          this.setState({posts: []})
        }
      })
  }

  componentDidMount() {
    this.getPosts();
  }

  renderPostLists(posts) {
    return posts.map((post) => (
      <PostList
        post={post}
        key={post.slug}
      />
    ))
  }

  render() {
    let {posts} = this.state
    return (
      <Fragment>
        <HeroProfile />
        <section>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 offset-md-2'>
                <h3><b>Latest</b></h3>
                <hr />
                {posts &&
                  this.renderPostLists(posts)}
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default Posts;
