import React from 'react';
import { connect } from 'react-redux';
import { Input, Row, Col } from 'reactstrap';
import * as constants from '../constants';

const validateUrl = (url) => {
  const regex = /^(https?:\/\/)?([a-zA-Z0-9]([a-zA-ZäöüÄÖÜ0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,6}.*$/;

  return regex.test(url);
};

class ProductUrlInput extends React.Component {
  componentWillUpdate() {
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
                 if(validateUrl(value.target.value)) {
                   dispatch({
                     type: constants.URL1_CHANGED,
                     data: value.target.value
                   });
                 } else {
                   // we can dispatch an action and handle the error but this is a PoC so I'll alert it
                   alert('Please put an actual link');
                 }
               }}
            />
          </Col>
          <Col xs={{size: 5, offset: 2}}>
            <label htmlFor="url-2"> Product 2's Url</label>
            <Input
              id='url-2'
              onChange={(value) => {
                if(validateUrl(value.target.value)) {
                  dispatch({
                    type: constants.URL2_CHANGED,
                    data: value.target.value
                  });
                } else {
                  // we can dispatch an action and handle the error but this is a PoC so I'll alert it
                  alert('Please put an actual link');
                }
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