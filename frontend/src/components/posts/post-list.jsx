import React, { PureComponent } from 'react';
import profileImage from '../hero-profile/profile.jpg';
import './post-list.scss';

class PostList extends PureComponent {
  constructor (props) {
    super(props)
    this.post = props.post
  }

  render() {
    return (
      <div className="post-item">
        <div className="post-avatar">
          <img className="rounded-circle" height="36" src={profileImage} width="36"/>
        </div>
        <div className="post-summary">
          <a className="text-success">Jiazhen Xie </a>
          in
          <a className="text-success"> UK </a>
          <span className="post-meta dim-text">
            {this.post.created_at}
          </span>
        </div>
        <h4>
          <a className="text-dark" href="<%= post_path(post) %>">
            <b>{ this.post.title }</b>
          </a>
        </h4>
        <p>
          <a className="text-dark" href="<%= post_path(post) %>">
            { this.post.subtitle }
          </a>
        </p>
        <div className="post-footer">
          <a className="text-secondary" href="<%= post_path(post) %>">Read more...</a>
        </div>
        <hr/>
      </div>
    );
  }
}

export default PostList;
