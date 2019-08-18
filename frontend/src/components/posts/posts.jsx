import React, { PureComponent, Fragment } from 'react'
import PostList from './post-list'
import HeroProfile from '../hero-profile/hero-profile'
import InfiniteScroll from 'react-infinite-scroll-component'

class Posts extends PureComponent {
  constructor ({ location }) {
    super()
    this.params = new URLSearchParams(location.search)
    this.state = { posts: [], pagination: { next_page: 1 } }
    this.getPosts = this.getPosts.bind(this)
  }

  fetch (endpoint) {
    return window.fetch(endpoint)
      .then(response => response.json())
      .catch(error => console.log(error))
  }

  getPosts () {
    this.params.set("page", this.state.pagination.next_page)
    this.fetch(`/v1/posts?${this.params.toString()}`)
      .then(({ posts, pagination }) => {
        if (posts) {
          let newPosts = this.state.posts.concat(posts)
          this.setState({ posts: newPosts, pagination: pagination })
        } else {
          this.setState({ posts: [], pagination: { next_page: 1 } })
        }
      })
  }

  componentDidMount() {
    this.getPosts()
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
    let { posts, pagination } = this.state
    return (
      <Fragment>
        <HeroProfile />
        <section>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 offset-md-2'>
                <h3><b>Latest</b></h3>
                <hr />
                <InfiniteScroll
                  dataLength={posts.length}
                  next={this.getPosts}
                  hasMore={!!pagination.next_page}
                  loader={<h4>Loading...</h4>}
                  endMessage={
                    <p style={{textAlign: 'center'}}>
                      <b>Yay! You have seen it all</b>
                    </p>
                  }
                >
                  {posts &&
                    this.renderPostLists(posts)}
                </InfiniteScroll>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    )
  }
}

export default Posts
