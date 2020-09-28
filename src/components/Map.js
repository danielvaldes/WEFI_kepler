import React from "react";

import AutoSizer from "react-virtualized/dist/commonjs/AutoSizer";

import {
//  MapPopoverFactory,
  MapControlFactory,
  injectComponents
} from 'kepler.gl/components';


//By implementing the NewMapPopover
//We will be removing the ToolTip design
/*
function NewMapPopover () {
  return (
    <div style={{position: "absolute", zIndex: 100, top: '10px', left: '10px' }}>
      <p>empty</p>
    </div>
  );
}*/

//Gets rid of the side buttons
//Currently empty
function NewMapControl () {
  return (
    <div style={{position: "absolute", zIndex: 100, top: '20px', left: '10px' }}>
      <p></p>
    </div>
  );
}

//Custom ToolTip
//const CustomMapPopover = () => (NewMapPopover());
//const myCustomMapPopoverFactory = () => CustomMapPopover;

const CustomMapControl = () => (NewMapControl());
const myCustomMapControlFactory = () => CustomMapControl;

//Injecting (replacing DefaultComponents for Custom ones)
const KeplerGl = injectComponents([
//  [MapPopoverFactory, myCustomMapPopoverFactory],
  [MapControlFactory, myCustomMapControlFactory]
]);

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
