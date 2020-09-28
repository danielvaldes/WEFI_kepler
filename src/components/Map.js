import React, {useEffect} from "react";

import AutoSizer from "react-virtualized/dist/commonjs/AutoSizer";



//Needed for initMapSetUp()
import Store from '../store';
import {addDataToMap} from 'kepler.gl/actions';
import WEFI_2019_AGX from './data/WEFI_2019_AGX.csv';
import Processors from 'kepler.gl/processors';
import myMapConfig from './MapConfig';



//Overwriting Default Components (They are called 'Factory')
import {
  MapPopoverFactory,
  MapControlFactory,
  injectComponents
} from 'kepler.gl/components';


const CustomMapPopoverFactory = () => (NewMapPopoverFactory());
const myCustomMapPopoverFactory = () => CustomMapPopoverFactory;
const CustomMapControlFactory = () => (NewMapControlFactory());
const myCustomMapControlFactory = () => CustomMapControlFactory;

//By implementing the NewMapPopover,
//we will be removing the ToolTip component
function NewMapPopoverFactory () {
  return (
    <div style={{position: "absolute", zIndex: 100, top: '10px', left: '10px' }}>
      <p></p>
    </div>
  );
}

//Gets rid of the side MapContorl buttons
function NewMapControlFactory () {
  return (
    <div style={{position: "absolute", zIndex: 100, top: '20px', left: '10px' }}>
      <p></p>
    </div>
  );
}

//This runs when Map gets Mounted for the first timeout
//It will do our initial map setUp
function initMapSetUp()
{
  console.log("00_This will run only once")
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


//Injecting (replacing DefaultComponents for Custom ones)
const KeplerGl = injectComponents([
  [MapPopoverFactory, myCustomMapPopoverFactory],
  [MapControlFactory, myCustomMapControlFactory]
]);

function Map() {
  useEffect(() => {
   initMapSetUp()
 },[]);
  return (
    <div style={{position: "absolute", width: "100%", height: "100%"}}>
      <AutoSizer>
        {({height, width}) => (
          <KeplerGl
            id="WEFI_2019"
            mapboxApiAccessToken={'pk.eyJ1IjoibW9ub3NhaWNvbCIsImEiOiJja2Rldm1sYmowYWs2MnVwZnl0MXd4MzNjIn0.H1-Azok6VhC8vsMbz9RFLg'}
            width={width}
            height={height}
          />
        )}
      </AutoSizer>
    </div>
  );
}
export default Map;
