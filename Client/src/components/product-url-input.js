import React from 'react';
import { connect } from 'react-redux';
import { Input, Row, Col } from 'reactstrap';

const ProductUrlInput = () => {
  return (
    <Col xs={12}>
      <Row>
        <Col xs="5">
          <label for="url-1"> Product 1's Url</label>
          <Input id='url-1' />
        </Col>
        <Col xs={{ size: 5, offset: 2 }}>
          <label for="url-2"> Product 2's Url</label>
          <Input id='url-2' />
        </Col>
      </Row>
    </Col>
  );
};

const mapStateToProps = state => (
  {
    ...state,
    dispatch: state.dispatch
  }
);

export default connect(mapStateToProps)(ProductUrlInput);