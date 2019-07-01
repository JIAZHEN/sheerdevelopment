import React, { PureComponent } from 'react';
import PostList from './post-list'

class Posts extends PureComponent {
  constructor () {
    super()
    this.state = { posts: [] }
    this.getPosts = this.getPosts.bind(this)
    // this.getPost = this.getPost.bind(this)
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
          // this.getPost(posts[0].id)
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
      <div>
        {posts &&
          this.renderPostLists(posts)}
      </div>
    );
  }
}

export default Posts;
