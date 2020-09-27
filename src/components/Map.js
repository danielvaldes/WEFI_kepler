import React/*, {useEffect} */from "react";
//import { useDispatch } from "react-redux";
import KeplerGl from "kepler.gl";
//Map window resizer
import AutoSizer from "react-virtualized/dist/commonjs/AutoSizer";



function Map() {
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
