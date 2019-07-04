import React, { PureComponent } from 'react';
import profileImage from '../hero-profile/profile.jpg';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en'
import './post-list.scss';

TimeAgo.addLocale(en)
const timeAgo = new TimeAgo('en-US')

class PostList extends PureComponent {
  constructor (props) {
    super(props)
    this.post = props.post
    this.post.created_at = Date.parse(this.post.created_at)
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
            {timeAgo.format(this.post.created_at)}
          </span>
        </div>
        <h4>
          <a className="text-dark" href={'/post/' + this.post.slug}>
            <b>{ this.post.title }</b>
          </a>
        </h4>
        <p>
          <a className="text-dark" href={'/post/' + this.post.slug}>
            { this.post.subtitle }
          </a>
        </p>
        <div className="post-footer">
          <a className="text-secondary" href={'/post/' + this.post.slug}>Read more...</a>
        </div>
        <hr/>
      </div>
    );
  }
}

export default PostList;
