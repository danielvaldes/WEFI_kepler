import React from "react";
import keplerGlReducer from "kepler.gl/reducers";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { taskMiddleware } from "react-palm/tasks";
import { Provider, useDispatch } from "react-redux";
import KeplerGl from "kepler.gl";


const reducers = combineReducers({
  keplerGl: keplerGlReducer
});

const store = createStore(reducers, {}, applyMiddleware(taskMiddleware));

//Start
export default function App() {
  return (
    <Provider store={store}>
      <Map/>
    </Provider>
  );
}


function Map() {

  return (
    <div>
      <KeplerGl
        id="WEFI_2019"
        mapboxApiAccessToken={'pk.eyJ1IjoibW9ub3NhaWNvbCIsImEiOiJja2RldzFxZjExbHU5MndqcWs5dDV5cGZ4In0.AmHktyFgKA9PPqaQTDzZcw'}
        width={window.innerWidth}
        height={window.innerHeight}
      />
    </div>
  );
}
