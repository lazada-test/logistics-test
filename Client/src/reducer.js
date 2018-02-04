import * as constants from 'constants';

const defaultState = {
  url1: '',
  url2: '',
  products: [
    {
      name: 'Iphone X',
      cameraBack: '12MP',
      imgUrl: 'https://sg-live-03.slatic.net/p/2/apple-iphone-8-256gb-2gb-ram-grey-1506020734-89319206-661b8ed8fbf9d5bb575c7d8c09b8a9ac-product.jpg',
      cameraFront: '24MP'
    },
    {
      name: 'Ps 4',
      cameraBack: '12MP',
      imgUrl: 'https://sg-live-03.slatic.net/p/2/apple-iphone-8-256gb-2gb-ram-grey-1506020734-89319206-661b8ed8fbf9d5bb575c7d8c09b8a9ac-product.jpg',
      cameraFront: '24MP'
    }
  ],
  specifications: [
    {
      description: 'Camera Back',
      propertyName: 'cameraBack'
    },
    {
      description: 'Camera Front',
      propertyName: 'cameraFront'
    },
  ]
};


const AppReducer = (state, action) => {
  if(typeof(state) === 'undefined'){
    return defaultState;
  }

  let newState = { ...state };

  switch(action.type) {
    case constants.URL1_CHANGED:
      return newState;
    default:
      return newState;
  }
};

export default AppReducer;