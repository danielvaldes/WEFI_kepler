import React, {useEffect, useState} from "react";
import keplerGlReducer from "kepler.gl/reducers";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { taskMiddleware } from "react-palm/tasks";
import { Provider, useDispatch } from "react-redux";
import KeplerGl from "kepler.gl";
import { addDataToMap } from "kepler.gl/actions";

//f450f3bd
// Kepler.gl Data processing APIs
import Processors from 'kepler.gl/processors';
// Sample data
import wefiData from './data/data.csv';

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



var myConfig = {"version":"v1","config":{"visState":{"filters":[],"layers":[{"id":"mdwfnl","type":"geojson","config":{"dataId":"wefi_map","label":"WEFI_Data","color":[255,178,102],"columns":{"geojson":"_geojson"},"isVisible":true,"visConfig":{"opacity":0.8,"strokeOpacity":0.8,"thickness":0.5,"strokeColor":[255,254,213],"colorRange":{"name":"Global Warming","type":"sequential","category":"Uber","colors":["#5A1846","#900C3F","#C70039","#E3611C","#F1920E","#FFC300"]},"strokeColorRange":{"name":"Global Warming","type":"sequential","category":"Uber","colors":["#5A1846","#900C3F","#C70039","#E3611C","#F1920E","#FFC300"]},"radius":10,"sizeRange":[0,10],"radiusRange":[0,50],"heightRange":[0,500],"elevationScale":5,"stroked":true,"filled":true,"enable3d":false,"wireframe":false},"hidden":false,"textLabel":[{"field":null,"color":[255,255,255],"size":18,"offset":[0,0],"anchor":"start","alignment":"center"}]},"visualChannels":{"colorField":{"name":"Rank","type":"integer"},"colorScale":"quantile","sizeField":null,"sizeScale":"linear","strokeColorField":null,"strokeColorScale":"quantile","heightField":null,"heightScale":"linear","radiusField":null,"radiusScale":"linear"}}],"interactionConfig":{"tooltip":{"fieldsToShow":{"wefi_map":[{"name":"name","format":null},{"name":"Country","format":null},{"name":"Index","format":null},{"name":"Rank","format":null},{"name":"Classification","format":null}]},"compareMode":false,"compareType":"absolute","enabled":true},"brush":{"size":0.5,"enabled":false},"geocoder":{"enabled":false},"coordinate":{"enabled":false}},"layerBlending":"normal","splitMaps":[],"animationConfig":{"currentTime":null,"speed":1}},"mapState":{"bearing":0,"dragRotate":false,"latitude":13.411007793051011,"longitude":-28.82812500004583,"pitch":0,"zoom":1,"isSplit":false},"mapStyle":{"styleType":"dark","topLayerGroups":{},"visibleLayerGroups":{"label":true,"road":true,"border":false,"building":true,"water":true,"land":true,"3d building":false},"threeDBuildingColor":[9.665468314072013,17.18305478057247,31.1442867897876],"mapStyles":{}}}};


function Map() {

  //dispatch is used to get data from git repos
  const dispatch = useDispatch();

  const data = Processors.processCsvData(wefiData);

  useEffect(() => {
      dispatch(
        addDataToMap({
          datasets: {
            info: {
              label: "WEFI_Data",
              id: "wefi_map"
            },
            data
          },
          option: {
            centerMap: true,
            readOnly: false
          },
          config: myConfig
        })
      );
  }, [dispatch, data]);
  // <------ Get Data from Git Repo
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
