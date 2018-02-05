import * as constants from './constants';

const defaultState = {
  products: [
  ],
  specifications: [
  ],
  isLoaded: true
};


const AppReducer = (state, action) => {
  if(typeof(state) === 'undefined'){
    return defaultState;
  }

  switch(action.type) {
    case constants.URL1_CHANGED:
      return {
        ...state,
        url1: action.data,
        isLoaded: false
      };
    case constants.URL2_CHANGED:
      return {
        ...state,
        url2: action.data,
        isLoaded: false
      };
    case constants.INVALID_URL1:
      return {
        ...state,
        showError: true,
        errorData: action.data
      };
    case constants.INVALID_URL2:
      return {
        ...state,
        showError: true,
        errorData: action.data
      };
    case constants.PRODUCT_SPEC_UPDATE:
      return {
        ...state,
        products: action.data.products,
        specifications: action.data.specifications,
        isLoaded: true
      };
    default:
      return state;
  }
};

export default AppReducer;