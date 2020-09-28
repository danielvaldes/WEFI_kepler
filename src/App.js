import React from "react";

//APP components
import Legend from './components/Legend';
import Map from './components/Map';

//Add Header to get Dev like Buttons to Test Actions
//import Header from './components/Header';



//StartgetState
export default function App() {
  return (
    <div>
      <Map/>
      <Legend/>
    </div>
  );
}
