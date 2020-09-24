import React from "react";
import { Provider } from "react-redux";

import Store from './actions/Store';
import Legend from './components/Legend';
import Map from './components/Map';

//Start
export default function App() {
  return (
    <div>
    <Legend/>
      <Provider store={Store}>
        <Map/>
      </Provider>
    </div>
  );
}
