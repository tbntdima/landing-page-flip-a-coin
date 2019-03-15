// Dependencies
import React, { Component } from 'react';
import { TimelineLite, Back } from 'gsap';

// Custom components
import ImagesPreloader from '../../ImagesPreloader/';

// Styles
import './index.scss';

// Images
import curtainLeft from './images/curtain-left.png';
import curtainRight from './images/curtain-right.png';

class Curtains extends Component {
  constructor(props) {
    super(props);

    this.curtains = null;
    this.curtain_left = null;
    this.curtain_right = null;
    this.myTween =  new TimelineLite({paused: true});
  }

  componentDidUpdate(prevProps) {
    if (prevProps.isClosed !== this.props.isClosed) {
      if (this.props.isClosed) {
        this.myTween
            .to(this.curtain_left, 1.5, {
                x: '5%',
                ease: Back.easeOut.config(1)
            })
            .to(this.curtain_right, 1.5, {
              x: '-5%',
              ease: Back.easeOut.config(1)
            }, '-=1.5')
            .play();
      } else {
        this.myTween
            .to(this.curtains, 0, {
              backgroundImage: `url(${this.props.currentPromo.bg_img})`,
            })
            .to(this.curtain_left, 1.5, {
                x: '-100%',
                ease: Back.easeInOut.config(1)
            })
            .to(this.curtain_right, 1.5, {
              x: '100%',
              ease: Back.easeInOut.config(1)
            }, '-=1.5')
            .play();
      }
    }
  }

  render() {
    return (
      <div className="curtains" ref={div => this.curtains = div}>
        <div className="curtain curtain--left" ref={div => this.curtain_left = div}></div>
        <div className="curtain curtain--right" ref={div => this.curtain_right = div}></div>

        {/* Utilities */}
        <ImagesPreloader imagesList={[curtainLeft, curtainRight]} />
      </div>
    );
  }
}

export default Curtains;
