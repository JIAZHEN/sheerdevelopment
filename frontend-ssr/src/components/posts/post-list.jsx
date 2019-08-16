import React, { PureComponent } from 'react';
import Tags from './tags';
import './post-list.scss';

class PostList extends PureComponent {
  constructor (props) {
    super(props)
    this.post = props.post
  }

  render() {
    return (
      <div className="post-item">
        <Tags post={this.post} />
        <h4>
          <a className="text-dark" href={`/posts/${this.post.slug}`}>
            <b>{ this.post.title }</b>
          </a>
        </h4>
        <p>
          <a className="text-dark" href={`/posts/${this.post.slug}`}>
            { this.post.subtitle }
          </a>
        </p>
        <div className="post-footer">
          <a className="text-secondary" href={`/posts/${this.post.slug}`}>Read more...</a>
        </div>
        <hr/>
      </div>
    );
  }
}

export default PostList;
