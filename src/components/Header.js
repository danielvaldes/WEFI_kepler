import React from "react";
//import { addDataToMap } from "kepler.gl/actions";
import {togglePerspective, addDataToMap} from 'kepler.gl/actions';

// Kepler.gl Data processing APIs
import Processors from 'kepler.gl/processors';

// 2019 Sample data
import wefiData from './data/data.csv';

//style Designs
//import myMapConfig from './MapConfig';

//
import Store from '../store';
import {set_data_action} from '../store/Reducers'


/*  //dispatch is used to get data from git repos
const dispatch = useDispatch();


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
        options: {
          centerMap: true,
          readOnly: true
        },
        config: myMapConfig
      })
    );
}, []);
*/
function randomFunct()
{    // Store.dispatch(buy_pokemon_action(1));
  const data = Processors.processCsvData(wefiData);
  const config = {"version":"v1","config":{"visState":{"filters":[],"layers":[{"id":"msg0hbe","type":"geojson","config":{"dataId":"f7968her","label":"data","color":[255,203,153],"columns":{"geojson":"_geojson"},"isVisible":true,"visConfig":{"opacity":0.8,"strokeOpacity":0.8,"thickness":0.5,"strokeColor":[248,149,112],"colorRange":{"name":"ColorBrewer YlGn-6","type":"sequential","category":"ColorBrewer","colors":["#006837","#31a354","#78c679","#addd8e","#d9f0a3","#ffffcc"],"reversed":true},"strokeColorRange":{"name":"Global Warming","type":"sequential","category":"Uber","colors":["#5A1846","#900C3F","#C70039","#E3611C","#F1920E","#FFC300"]},"radius":10,"sizeRange":[0,10],"radiusRange":[0,50],"heightRange":[0,500],"elevationScale":5,"stroked":true,"filled":true,"enable3d":false,"wireframe":false},"hidden":false,"textLabel":[{"field":null,"color":[255,255,255],"size":18,"offset":[0,0],"anchor":"start","alignment":"center"}]},"visualChannels":{"colorField":{"name":"Rank","type":"integer"},"colorScale":"quantile","sizeField":null,"sizeScale":"linear","strokeColorField":null,"strokeColorScale":"quantile","heightField":null,"heightScale":"linear","radiusField":null,"radiusScale":"linear"}}],"interactionConfig":{"tooltip":{"fieldsToShow":{"f7968her":[{"name":"7","format":null},{"name":"name","format":null},{"name":"Country","format":null},{"name":"Index","format":null},{"name":"Rank","format":null}]},"compareMode":false,"compareType":"absolute","enabled":true},"brush":{"size":0.5,"enabled":false},"geocoder":{"enabled":false},"coordinate":{"enabled":false}},"layerBlending":"normal","splitMaps":[],"animationConfig":{"currentTime":null,"speed":1}},"mapState":{"bearing":0,"dragRotate":false,"latitude":-0.9819540000000018,"longitude":0,"pitch":0,"zoom":1,"isSplit":false},"mapStyle":{"styleType":"dark","topLayerGroups":{},"visibleLayerGroups":{"label":true,"road":true,"border":false,"building":true,"water":true,"land":true,"3d building":false},"threeDBuildingColor":[9.665468314072013,17.18305478057247,31.1442867897876],"mapStyles":{}}}};

  Store.dispatch(set_data_action(data));
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
        centerMap: true,
        readOnly: true
      },
      config: config
    })
  );

  console.log('ddd: ', Store.getState());
}

function Header() {
  return (
    <header>
    This is a header
    <button onClick={(clickme) => Store.dispatch(togglePerspective())} />
    <button onClick={randomFunct}>Add Data</button>
    </header>
  );
}


export default Header;
