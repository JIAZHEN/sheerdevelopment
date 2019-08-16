import React, { PureComponent, Fragment } from 'react';
import profileImage from '../hero-profile/profile.jpg';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
import './tags.scss';

TimeAgo.addLocale(en)
const timeAgo = new TimeAgo('en-GB')

class Tags extends PureComponent {
  constructor (props) {
    super(props)
    this.post = props.post
    this.post.created_at = Date.parse(this.post.created_at)
  }

  render() {
    return (
      <div className="tag-container">
        <div className="profile-avatar">
          <img className="rounded-circle" height="40" src={profileImage} width="40"/>
        </div>

        <div className="post-summary">
          <a className="text-success">Jiazhen Xie </a>
          in
          <a className="text-success"> UK </a>
          <span className="post-meta text-secondary">
            {timeAgo.format(this.post.created_at)}
          </span>

          <span className="post-meta">
            {this.post.tag_list.map((tag_name, idx) => (
              <a key={idx} className="text-success" href={'/posts?tag=' + tag_name}>
                <span className="badge badge-success">{tag_name}</span>
              </a>
            ))}
          </span>
        </div>
      </div>
    )
  }
}

export default Tags;
