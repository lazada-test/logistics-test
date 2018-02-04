import React from 'react';
import { connect } from 'react-redux';
import { Input, Row, Col } from 'reactstrap';
import * as constants from '../constants';

class ProductUrlInput extends React.Component {
  componentWillUpdate() {
    console.log('1');
    const { dispatch } = this.props;

    dispatch({
      type: constants.PRODUCT_SPEC_FETCH,
    });
  }

  render() {
    const { dispatch } = this.props;

    return (
      <Col xs={12}>
        <Row>
          <Col xs="5">
            <label htmlFor="url-1"> Product 1's Url</label>
            <Input id='url-1'
                   onChange={(value) => {
                     dispatch({
                       type: constants.URL1_CHANGED,
                       data: value.target.value
                     });
                   }}
            />
          </Col>
          <Col xs={{size: 5, offset: 2}}>
            <label htmlFor="url-2"> Product 2's Url</label>
            <Input
              id='url-2'
              onChange={(value) => {
                dispatch({
                  type: constants.URL2_CHANGED,
                  data: value.target.value
                });
              }}
            />
          </Col>
        </Row>
      </Col>
    );
  }
}

const mapStateToProps = state => (
  {
    dispatch: state.dispatch,
    url1: state.url1,
    url2: state.url2
  }
);

export default connect(mapStateToProps)(ProductUrlInput);