import React, { Component } from 'react';
import './App.css';

import { Container, Row, Col} from 'reactstrap';
import ProductSpecification from './components/product-specification'
import ProductUrlInput from './components/product-url-input';
import {connect} from "react-redux";

class App extends Component {
  render() {
    const { isLoaded } = this.props;

    return (
      <Container>
        <Row>
          <Col>
            <h1 className="page-title">Lazada test</h1>
          </Col>
        </Row>
        <Row>
          <ProductUrlInput />
        </Row>
        <Row>
          <Col>
            { !isLoaded && <div className='loader' /> }
            { isLoaded && <ProductSpecification /> }
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => (
  {
    isLoaded: state.isLoaded,
  }
);

export default connect(mapStateToProps)(App);
