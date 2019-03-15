// Dependencies
import React, { Component } from 'react';
import { promotions } from '../../data/promotionsList.js';
import { Container, Row, Col, Image } from 'react-bootstrap';
import logo from '../../images/logo.png';
import game_title from './images/game-title.png';

// Custom components
import Coin from './Coin/';
import Curtains from './Curtains/';
import PromoTable from './PromoTable/';
import ImagesPreloader from '../ImagesPreloader/';
import Panel from '../Panel/';

// Styles
import './index.scss';


class CoinGame extends Component {

  constructor(props) {
    super(props);
    this.state = {
      gameId: 0,
      currentPromo: this.getRandomItem(promotions),
      curtainsClosed: true,
      buttonDisabled: true,
    };
  }

  render() {
    return(
      <div>
      <div className="coin-game">
        <Container className="coin-game__content">
          <Row>
            <Col xs={12}>
              <Image className="coin-game__logo" src={logo} />
            </Col>
            {/* @TODO center later */}
            <Col xs={12} className="mt-5 mt-md-0">
              <Image className="coin-game__title" src={game_title} />
            </Col>
            <Col xs={12}>
              <Coin
                gameId={this.state.gameId}
                promotions={promotions}
                currentPromo={this.state.currentPromo}
                play={this.play}
                buttonDisabled={this.state.buttonDisabled}
                enableButton={this.enableButton}
              />
            </Col>
            <Col xs={12}>
              <p className="text--accent coin-game__slogan">Escape to a better world. <span>Escape to Planet 7</span></p>
            </Col>
          </Row>
        </Container>

        <Curtains
          isClosed={this.state.curtainsClosed}
          currentPromo={this.state.currentPromo}
        />

        <Panel />

        {/* Utilities */}
        <ImagesPreloader imagesList={promotions.map(promo => promo.img)} />
        <ImagesPreloader imagesList={promotions.map(promo => promo.bg_img)} />
        <ImagesPreloader imagesList={promotions.map(promo => promo.bonus_img)} />
      </div>
      <PromoTable
        promotions={promotions}
        play={this.play}
        buttonDisabled={this.state.buttonDisabled}
      />
      </div>
    );
  }

  play = (index) => {
    if (!this.state.curtainsClosed) {
      this.disableButton();
      this.closeCurtains();
      setTimeout(() => {
        this.flipCoin(index);
        setTimeout(() => {
          this.openCurtains();
          setTimeout(() => {
            this.enableButton();
          }, 3000);
        }, 3200);
      }, 1500);
    } else {
      this.disableButton();
      this.flipCoin(index);
      setTimeout(() => {
        this.openCurtains();
        setTimeout(() => {
          this.enableButton();
        }, 3000);
      }, 3200);
    }
  }

  getRandomItem = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  flipCoin = (promoIndex) => {
    if (isNaN(promoIndex)) {
      this.setState({
        gameId: this.state.gameId + 1,
        currentPromo: this.getRandomItem(promotions)
      });
    } else {
      this.setState({
        gameId: this.state.gameId + 1,
        currentPromo: promotions[promoIndex]
      });
    }
  }

  closeCurtains = () => {
    this.setState({
      curtainsClosed: true,
    });
  }

  openCurtains = () => {
    this.setState({
      curtainsClosed: false,
    });
  }

  enableButton = () => {
    this.setState({
      buttonDisabled: false
    });
  }

  disableButton = () => {
    this.setState({
      buttonDisabled: true
    });
  }

}

export default CoinGame;
