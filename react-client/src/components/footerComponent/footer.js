import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);


class Footer extends Component {
  render() {
    return (
      <footer>
          <SocialIcon id="SocialIcon" bgColor="#FFFFFF" url="https://www.linkedin.com/in/jeremyjpang/" target="_blank" style={{ height: 35, width: 35 }} />
          <SocialIcon id="SocialIcon" bgColor="#FFFFFF" url="https://github.com/jpang007" target="_blank" style={{ height: 35, width: 35 }} />
            <p>Side project by Jeremy Pang</p>
            <div id ="copyright">
              © 2018 Copyright: <a href="/">https://cryptota.org</a>
            </div>
      </footer>
    )
  }
}

export default Footer;
