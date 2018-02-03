import * as constants from 'constants';

const defaultState = {
    url1: '',
    url2: ''
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