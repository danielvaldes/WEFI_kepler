import keplerGlReducer from "kepler.gl/reducers";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { taskMiddleware } from "react-palm/tasks";

//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
//Required for Kepler.gl
//Root
//Here we can set up initial state of keplers map and configs
const reducers = combineReducers({
  keplerGl: keplerGlReducer
});

const store = createStore(reducers, {}, applyMiddleware(taskMiddleware));
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////




export default store;
