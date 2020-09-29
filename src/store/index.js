import keplerGlReducer from "kepler.gl/reducers";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { taskMiddleware } from "react-palm/tasks";

//List of App Actions ('reducers')
import app_default_reducer from './Reducers'




const customizeKeplerGLReducer = keplerGlReducer.initialState({
  uiState:
  {
    currentModal: null,
  }
});

//We want keplers Reducers and App Reducers
const reducer = combineReducers({
  keplerGl: customizeKeplerGLReducer,
  app: app_default_reducer
});

const store = createStore(reducer, {}, applyMiddleware(taskMiddleware));

export default store;
