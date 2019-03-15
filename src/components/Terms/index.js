// Dependencies
import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { termsText } from '../../data/termsText';

// Styles
import './index.scss';


class Terms extends Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }

  render() {
    return (
      <div className={this.state.visible ? 'terms terms--visible' : 'terms'}>
        <Container>
          <Row>
            <Col xs={12}>
              { termsText }
            </Col>
          </Row>
        </Container>
        <Button className="terms__button" onClick={this.toggleTerms}>Terms</Button>
      </div>
    );
  }

  toggleTerms = () => {
    this.setState({
      visible: !this.state.visible
    });
  }

}

export default Terms;
