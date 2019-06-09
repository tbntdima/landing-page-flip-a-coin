// Dependencies
import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

// Styles
import './index.scss';

class Panel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isVisible: true
      });
    }, 25 * 1000);
  }

  render() {
    return (
      <div className={this.state.isVisible ? 'panel panel--visible' : 'panel'}>
        <Container style={{ position: 'relative' }}>
          <Row>
            <Col xs={12}>
              <p>Don’t give a flip?</p>
              <p>
                Use code{' '}
                <a href="#somelink/webplay/?cashier&coupon=COINFLIP300">
                  COINFLIP300
                </a>{' '}
                with a deposit of $80 for 300% with no playthrough!
              </p>
            </Col>
          </Row>
          <Button className="panel__button" onClick={this.togglePanel}>
            Close
          </Button>
        </Container>
      </div>
    );
  }

  togglePanel = () => {
    this.setState({
      isVisible: !this.state.isVisible
    });
  };
}

export default Panel;
