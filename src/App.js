import React, {useEffect} from "react";
import Store from './store';



//Needed for
import {addDataToMap} from 'kepler.gl/actions';
import Processors from 'kepler.gl/processors';
import myMapConfig from './components/MapConfig';
import WEFI_2019_AGX from './components/data/WEFI_2019_AGX.csv';
//import wefiData from './components/data/data.csv';




//APP components
import Legend from './components/Legend';
import Map from './components/Map';
//Add Header to get Dev like Buttons to Test
//import Header from './components/Header';

function initMapSetUp()
{
  const data = Processors.processCsvData(WEFI_2019_AGX);

  Store.dispatch(
    addDataToMap({
      datasets: {
        info: {
          label: "WEFI_Data",
          id: "wefi_map"
        },
        data
      },
      options: {
        centerMap: false,
        readOnly: true,

      },
      config: myMapConfig
    })
  );
}

//StartgetState
export default function App() {
 //TODO create a .js pre-builder for our map settings
  useEffect(() => {
    initMapSetUp()
    console.log("00_This should run only once")
  },[]);

  return (
    <div>
      <Legend/>
      <Map/>
    </div>
  );
}
