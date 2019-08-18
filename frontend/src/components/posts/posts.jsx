import React, { PureComponent, Fragment } from 'react'
import PostList from './post-list'
import HeroProfile from '../hero-profile/hero-profile'
import InfiniteScroll from 'react-infinite-scroll-component'

class Posts extends PureComponent {
  renderPostLists(posts) {
    return posts.map((post) => (
      <PostList
        post={post}
        key={post.slug}
      />
    ))
  }

  render() {
    let { posts, pagination } = this.props
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
                {/*<InfiniteScroll
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
                </InfiniteScroll>*/}
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    )
  }
}

export default Posts
