import React, { PureComponent } from 'react';
import './footer.scss'

class Footer extends PureComponent {
  render() {
    return (
      <footer>
        <div className="row">
          <div className="col-md-12">
            <h6>Copyright 2013 - {new Date().getFullYear()} Jiazhen Xie. All rights reserved.</h6>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
