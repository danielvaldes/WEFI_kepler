import React from "react";
import { Provider } from "react-redux";

import Store from './actions/Store';
import Label from './components/Label';
import Map from './components/Map';

//Start
export default function App() {
  return (
    <div>
      <Provider store={Store}>
        <Label/>
        <Map/>
      </Provider>
    </div>
  );
}
