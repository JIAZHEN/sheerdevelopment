import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

class NotFound extends PureComponent {
  render () {
    return (
      <section id="post-body">
        <div className="container">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <h1>404: Not found</h1>
              <Link to={'/'} className="btn btn-outline-success"> Back to home</Link>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default NotFound;