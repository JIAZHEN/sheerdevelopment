import React, { PureComponent } from 'react';
import profileImage from '../hero-profile/profile.jpg';

class PostList extends PureComponent {
  constructor (props) {
    super(props)
    this.post = props.post
  }

  render() {
    return (
      <div className="post-item">
        <div className="post-avatar">
          <img className="img-circle" height="36" src={profileImage} width="36"/>
        </div>
        <div className="post-summary">
          <a className="link link-accent">Jiazhen Xie</a>
          in
          <a className="link link-accent">UK</a>
          <span className="post-meta dim-text">
            time_ago_in_words(this.post.created_at)
            ago
          </span>
        </div>
        <h3>
          <a className="link link-darker" href="<%= post_path(post) %>">
            <b>{ this.post.title }</b>
          </a>
        </h3>
        <p>
          <a className="link link-dark" href="<%= post_path(post) %>">
            { this.post.subtitle }
          </a>
        </p>
        <div className="post-footer">
          <a className="link dim-text" href="<%= post_path(post) %>">Read more...</a>
        </div>
        <hr/>
      </div>
    );
  }
}

export default PostList;
