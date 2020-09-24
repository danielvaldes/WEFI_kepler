import React, {useEffect} from "react";
import { useDispatch } from "react-redux";
import KeplerGl from "kepler.gl";
import { addDataToMap } from "kepler.gl/actions";

//Map window resizer
import AutoSizer from "react-virtualized/dist/commonjs/AutoSizer";

// Kepler.gl Data processing APIs
import Processors from 'kepler.gl/processors';

// 2019 Sample data
import wefiData from './data/data.csv';

//style Designs
import myMapConfig from './MapConfig';


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
        options: {
          centerMap: true,
          readOnly: true
        },
        config: myMapConfig
      })
    );
}, [dispatch, data]);
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
