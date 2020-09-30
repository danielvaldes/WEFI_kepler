import React, {useEffect} from "react";

import AutoSizer from "react-virtualized/dist/commonjs/AutoSizer";

//Needed for initMapSetUp()
import Store from '../store';
import {addDataToMap} from 'kepler.gl/actions';
import {set_legend_action} from '../store/Reducers'
import WEFI_2019_AGX from './data/WEFI_2019_AGX.csv.js';
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

//By implementing the NewMapPopoverFactory,
//we will be removing the ToolTip component
//And build our custom
function NewMapPopoverFactory () {
  return (
    <div className="panel">
      <h2> WEFI  </h2>
      <p>Id:    <p2>{Store.getState().app.id}</p2></p>
      <p>Country:   <p2>{Store.getState().app.country}</p2></p>
      <p>Index: <p2>{Store.getState().app.index}</p2></p>
      <p>Rank:   <p2>{Store.getState().app.rank}</p2></p>
      <p>Classification: <p2>{Store.getState().app.classification}</p2></p>
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


//Will use 1 simple handle click
//to update UI stats based on location clicked
function handleClick()
{
  const content = Store.getState().keplerGl.WEFI_2019.visState.clicked
  if(content != null)
  {
    //console.log(content.object.id)
    Store.dispatch(set_legend_action(content))
  }
  else {
    console.log("content is Null")
  }
}

function Map() {
  useEffect(() => {
   initMapSetUp()
  },[]);
  return (
    <div onClick={handleClick}>
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
    </div>
  );
}
export default Map;
