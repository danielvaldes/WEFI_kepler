import React from "react";

//APP components

import Map from './components/Map';
//Add Header to get Dev like Buttons to Test Actions
import Header from './components/Header';
import Footer from './components/Footer';


//Given of the flexBox used here I need to render the footer first
// before rendering the Map with kepler.gl
export default function App() {

  return (
    <div>
      <Footer/>
      <Map/>
      <Header/>
    </div>
  );
}
