import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';

class Footer extends Component {
  render() {
    return (
      <footer>
          <div id = "footTitle">
            <span>Side project by Jeremy Pang</span>
            <span>Written with love</span>
          </div>
          <div id = "connect">
            <p> Connect with me! </p>
            <SocialIcon url="https://www.linkedin.com/in/pangjeremy1/" target="_blank" style={{ verticalAlign: 'right' }}/>
            <SocialIcon url="https://github.com/jpang007" target="_blank" style={{ verticalAlign: 'right' }} />
          </div>
      </footer>
    )
  }
}

export default Footer;
