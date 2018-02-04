import React, { Component } from 'react';
import './App.css';

import { Container, Row, Col} from 'reactstrap';
import ProductSpecification from './components/product-specification'
import ProductUrlInput from './components/product-url-input';

class App extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h1>Lazada test</h1>
          </Col>
        </Row>
        <Row>
          <ProductUrlInput />
        </Row>
        <Row>
          <Col>
            <ProductSpecification />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
