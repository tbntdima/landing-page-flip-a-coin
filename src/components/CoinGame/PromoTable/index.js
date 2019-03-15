// Dependencies
import React, { Component } from 'react';
import { TweenLite } from 'gsap';

// Custom components
import Terms from '../../Terms/';

// Stylings
import './index.scss';


class PromoTable extends Component {
  render() {
    return (
      <div className="promo-table-section">
        <div className="promo-table">
          {this.props.promotions.map(((promo, index) => {
            return (
              <div key={promo.coupon} className="promo">
                <div className="promo__title">{promo.game}</div>
                <div className="promo__deposit">
                  <div className="promo__deposit-percent">{promo.depositPercent}</div>
                  <div className="promo__deposit-spins">{promo.depositSpins}</div>
                </div>
                <div className="promo__button">
                  <button
                    onClick={() => this.play(index)}
                    disabled={this.props.buttonDisabled}
                  >Flip for it</button>
                </div>
              </div>
            );
          }))}
        </div>
        <div className="promo-arrows">
          <span className="promo-arrows__arrow"></span>
          <span className="promo-arrows__arrow"></span>
          <span className="promo-arrows__arrow"></span>
        </div>
        <Terms />
      </div>
    );
  }

  play = (index) => {
    TweenLite.to(window, .5, {scrollTo: 0});
    setTimeout(() => { this.props.play(index); }, 500);
  }
}

export default PromoTable;
