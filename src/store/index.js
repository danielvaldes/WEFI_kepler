import keplerGlReducer from "kepler.gl/reducers";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { taskMiddleware } from "react-palm/tasks";
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
//Required for Kepler.gl

import app_default_reducer, {buy_pokemon_action} from './Reducers'







const customizeKeplerGLReducer = keplerGlReducer.initialState({
  uiState:
  {
    currentModal: null
  }
})

//Here we can set up initial state of keplers map and configs
const reducer = combineReducers({
  keplerGl: customizeKeplerGLReducer,
  app: app_default_reducer
});

const store = createStore(reducer, {}, applyMiddleware(taskMiddleware));

console.log('asdasd: ', store.getState());
store.dispatch(buy_pokemon_action(3));
console.log('ddd: ', store.getState());
//////////
////////////////////////////////////////////////
//////////////////////////////////////////////////////////



export default store;
