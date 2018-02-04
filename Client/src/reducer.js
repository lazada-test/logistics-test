import * as constants from './constants';

const defaultState = {
  products: [

  ],
  specifications: [
  ]
};


const AppReducer = (state, action) => {
  if(typeof(state) === 'undefined'){
    return defaultState;
  }

  switch(action.type) {
    case constants.URL1_CHANGED:
      return {
        ...state,
        url1: action.data
      };
    case constants.URL2_CHANGED:
      return {
        ...state,
        url2: action.data
      };
    case constants.PRODUCT_SPEC_UPDATE:
      return {
        ...state,
        products: action.data.products,
        specifications: action.data.specifications
      };
    default:
      return state;
  }
};

export default AppReducer;