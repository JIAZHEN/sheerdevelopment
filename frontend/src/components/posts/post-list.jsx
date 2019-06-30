import React, { PureComponent } from 'react';

class PostList extends PureComponent {
  constructor (props) {
    super(props)
    this.post = props.post
  }

  render() {
    return (
      <div class="post-item">
        <div class="post-avatar">
          <img class="img-circle" height="36" src="" width="36"/>
        </div>
        <div class="post-summary">
          <a class="link link-accent">Jiazhen Xie</a>
          in
          <a class="link link-accent">UK</a>
          <span class="post-meta dim-text">
            time_ago_in_words(this.post.created_at)
            ago
          </span>
        </div>
        <h3>
          <a class="link link-darker" href="<%= post_path(post) %>">
            <b>{ this.post.title }</b>
          </a>
        </h3>
        <p>
          <a class="link link-dark" href="<%= post_path(post) %>">
            { this.post.subtitle }
          </a>
        </p>
        <div class="post-footer">
          <a class="link dim-text" href="<%= post_path(post) %>">Read more...</a>
        </div>
        <hr/>
      </div>
    );
  }
}

export default PostList;
