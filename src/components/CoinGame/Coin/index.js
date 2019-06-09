// Dependencies
import React, { Component } from 'react';
import { TimelineLite, Power1, Back } from 'gsap';
// import 'gsap/src/uncompressed/plugins/ScrollToPlugin';
import { Button } from 'react-bootstrap';
import ReactResizeDetector from 'react-resize-detector';
import coin_cover_src from './images/coin-default.png';

// Custom components
import ImagesPreloader from '../../ImagesPreloader/';

// Styles
import './index.scss';

// Images
import initialCoinFront from './images/coin-default.png';
import initialCoinBack from './images/coin-default.png';
import flipButton from './images/flip-button.png';
// replace
import flipButtonAgain from './images/flip-again-button.png';

class Coin extends Component {
  constructor(props) {
    super(props);
    this.isMobile = null;
    this.coin = null;
    this.coinFront = null;
    this.coinBack = null;
    this.coinGlow = null;
    this.coinStars = null;
    this.flipButtonEl = null;
    this.myTween = new TimelineLite({ paused: true });
  }

  render() {
    return (
      <div className="coin-container">
        <div className="coin" ref={div => (this.coin = div)}>
          <a
            href="#somelink"
            onClick={event => {
              event.preventDefault();
              if (!this.props.buttonDisabled) {
                this.props.play();
              }
            }}
            className={
              this.props.buttonDisabled
                ? 'coin__front coin__front--disabled'
                : 'coin__front'
            }
            ref={div => (this.coinFront = div)}
          >
            front
          </a>
          <div className="coin__edge">
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
          </div>
          <a
            href={`#somelink/webplay/?cashier&coupon=${
              this.props.currentPromo.coupon
            }`}
            className="coin__back"
            ref={div => (this.coinBack = div)}
          >
            back
          </a>
          <div className="coin__glow" ref={div => (this.coinGlow = div)} />
          <div className="coin__stars" ref={div => (this.coinStars = div)} />
          <a
            className="coin__bonus"
            href={`#somelink/webplay/?cashier&coupon=${
              this.props.currentPromo.coupon
            }`}
            ref={div => (this.coinBonus = div)}
          >
            Get bonus
          </a>
        </div>

        <Button
          className={
            this.props.buttonDisabled
              ? 'coin__button'
              : 'coin__button coin__button--visible'
          }
          onClick={this.props.play}
          disabled={this.props.buttonDisabled}
          ref={button => (this.flipButtonEl = button)}
        />

        {/* Utilities */}
        <ImagesPreloader
          imagesList={[
            initialCoinFront,
            initialCoinBack,
            flipButton,
            flipButtonAgain
          ]}
        />
        <ReactResizeDetector
          handleWidth={true}
          handleHeight={false}
          onResize={this.onResize}
        />
      </div>
    );
  }

  componentDidMount() {
    this.displayCoin();
  }

  componentDidUpdate(prevProps) {
    if (this.props.gameId !== 0 && prevProps.gameId !== this.props.gameId) {
      this.flipCoin();
    }
  }

  onResize = (width, height) => {
    if (width > 768 && this.isMobile) {
      this.isMobile = false;
      this.centerCoin();
    } else if (width <= 768 && !this.isMobile) {
      this.isMobile = true;
      this.centerCoin();
    }
  };

  /* Animations */

  /*
   * Display Coin
   * Entrance animation that runs only once on page load
   * Sequence:
   * Coin flies to the center of the screen
   * Coin background glows
   * Flip button appears
   */
  displayCoin = () => {
    const coin_cover = new Image();
    coin_cover.src = coin_cover_src;
    coin_cover.addEventListener('load', () => {
      this.myTween
        .to(this.coin, 1.6, {
          // .to(this.coin, 0, {
          visibility: 'visible',
          y: '-20%',
          rotationX: 360,
          rotationY: 0,
          rotationZ: 0
        })
        .add(() => {
          this.coinFront.classList.add('coin--shine');
          setTimeout(() => {
            this.coinFront.classList.remove('coin--shine');
          }, 2000);
        })
        .to(this.coinGlow, 1, {
          opacity: 1
        })
        .call(() => {
          setTimeout(() => {
            this.props.enableButton();
          }, 1000);
        })
        .play();
    });
  };

  /*
   * Flip Coin
   * Flipping coin animation that runs each time user clicks on flip butotn
   * Sequence:
   * Resetting the scene (clearing the bg glow, stars and bonus)
   * Rotating coin 11 times and chagning the background
   * Glowing the bg and showing the bonus
   */
  flipCoin = () => {
    this.myTween
      // Resetting the scene (clearing the bg glow, stars and bonus)
      .to(this.coinGlow, 0.2, {
        opacity: 0
      })
      .to(
        this.coinStars,
        0.5,
        {
          scaleX: 0,
          scaleY: 0,
          ease: Back.easeInOut.config(1)
        },
        '-=.2'
      )
      .to(
        this.coinBonus,
        0.5,
        {
          scaleX: 0,
          scaleY: 0,
          ease: Back.easeInOut.config(1)
        },
        '-=.5'
      )
      .to(this.coinBonus, 0, {
        backgroundImage: `url(${this.props.currentPromo.bonus_img})`
      })
      .to(this.flipButtonEl, 0, {
        backgroundImage: `url(${flipButtonAgain})`
      })
      // Rotating coin 11 times and chagning the background
      .to(this.coin, 3, {
        ease: Power1.easeOut,
        rotationY: 1980
      })
      .to(
        this.coinBack,
        0,
        {
          backgroundImage: `url(${this.props.promotions[0].img})`
        },
        `-=${3}`
      )
      .to(
        this.coinBack,
        0,
        {
          backgroundImage: `url(${this.props.promotions[1].img})`
        },
        `-=${3 - (1 * 3) / 12}`
      )
      .to(
        this.coinBack,
        0,
        {
          backgroundImage: `url(${this.props.promotions[2].img})`
        },
        `-=${3 - (3 * 3) / 12}`
      )
      .to(
        this.coinBack,
        0,
        {
          backgroundImage: `url(${this.props.promotions[3].img})`
        },
        `-=${3 - (4 * 4) / 12}`
      )
      .to(
        this.coinBack,
        0,
        {
          backgroundImage: `url(${this.props.promotions[4].img})`
        },
        `-=${3 - (6 * 3) / 12}`
      )
      .to(
        this.coinBack,
        0,
        {
          backgroundImage: `url(${this.props.currentPromo.img})`
        },
        `-=${3 - (9 * 3) / 12}`
      )
      // Glowing the bg and showing the bonus
      .to(
        this.coinGlow,
        1,
        {
          opacity: 1
        },
        '+=.5'
      )
      .add(() => {
        this.coinBack.classList.add('coin--shine');
        setTimeout(() => {
          this.coinBack.classList.remove('coin--shine');
        }, 2000);
      })
      .to(
        this.coinStars,
        1,
        {
          scaleX: 1,
          scaleY: 1,
          ease: Back.easeOut.config(1)
        },
        '-=0.5'
      )
      .to(
        this.coinBonus,
        1,
        {
          opacity: 1,
          scaleX: 1,
          scaleY: 1,
          ease: Back.easeOut.config(1)
        },
        '-=1'
      )
      // Setting properties for coin after animation
      .set(this.coin, {
        rotationY: 180
      });
  };

  /*
   * Center Coin
   * Due to GSAP, some styles behave not in the expected way on screen resize
   * This function setting the coin position, used in pair with screen
   * size listener
   */
  centerCoin = () => {
    this.myTween
      .to(this.coin, 0, {
        x: 0
      })
      .to(this.coinStars, 0, {
        x: '-50%',
        y: '40%'
      })
      .to(this.coinBonus, 0, {
        x: '-50%',
        y: '55%'
      })
      .play();
  };
}

export default Coin;
