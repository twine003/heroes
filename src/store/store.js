import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {charapterReducer} from './reducers/CharapterReducer'
import { storieReducer } from './reducers/StorieReducer';

const initialState = {
  sidebarShow: 'responsive'
}

const composeEnhancers = composeWithDevTools({
  // Specify here name, actionsBlacklist, actionsCreators and other options
});

// REDUCER
const changeState = (state = initialState, { type, ...rest }) => {
  switch (type) {
    case 'set':
      return {...state, ...rest }
    default:
      return state
  }
}


const reducers = combineReducers({
  characters: charapterReducer,
  stories: storieReducer,
  sidebar: changeState,
});

const store = createStore(
  reducers, 
  composeEnhancers(
    applyMiddleware(thunk)
  ))


export default store