import React from "react";


import './styles/styles.css';

//Dispatch Actions
import Store from '../store';
import { togglePerspective} from 'kepler.gl/actions';
import {addDataToMap} from 'kepler.gl/actions';
import WEFI_2019_AGX from './data/WEFI.csv.js';
import Processors from 'kepler.gl/processors';



let names =[]
const data = Processors.processCsvData(WEFI_2019_AGX);




function Toggle()
{
  Store.dispatch(togglePerspective())
}

function setFilters(x)
{
  let nNames = []

  if(names.indexOf(x) !== -1)    //In the array
  {
    names.map(name => {//loop to remove existing name
      if(name === x)
      {
        //console.log(x + " ---- already existed")
      }
      else {
          nNames.push(name)
      }
    })


    names = nNames

  }
  else {
    //FilterNot in the array so We are adding it
  //  console.log("not in the array")
    names.push(x)
  }
   UpdateMapFilters()
}

function UpdateMapFilters()
{


  let currentConfig = {
    "version":"v1",
    "config":
    {
      "visState":
      {
        "filters":[{
          "dataId":["wefi_map"],
          "id":"h9s7dudh",
          "name":["CLASSIFICATION"],
          "type":"multiSelect",
          "value":names,
          "enlarged":false,
          "plotType":"histogram",
          "yAxis":null}],
        "layers":
        [
          {
            "id":"mdwfnl",
            "type":"geojson",
            "config":
            {
              "dataId":"wefi_map",
              "label":"WEFI 2019",
              "color":[255,178,102],
              "columns":
              {
                "geojson":"_geojson"
              },
              "isVisible":true,
              "visConfig":
              {
                "opacity":.5,
                "colorRange":
                {
                  "name":"RankColorPalette",
                  "type":"custom",
                  "category":"WEFI",
                  "colors":["#75B558","#33C073","#FF5050","#FF7C80","#1A751A","#A50021","#33AD33","#CD171A"]
                },
                "radius":20,
                "sizeRange":[0,10],
                "radiusRange":[0,50],
                "heightRange":[0,500],
                "elevationScale":5,
                "stroked":false,
                "filled":true,
              },
            },
            "visualChannels":
            {

              "colorField":
              {
                "name":"CLASSIFICATION",
                "type":"string"
              },"colorScale":"ordinal",
              "sizeField":null,
              "sizeScale":"linear",
              "strokeColorField":null,
              "strokeColorScale":"quantile",
              "heightField":null,
              "heightScale":"linear",
              "radiusField":null,
              "radiusScale":"linear"

            }
          }
        ],
      },
    }
  }

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
      config: currentConfig
    })
  );
}

//Basically using the header as a testable Action updater (Buttons)
function Header() {
  return (
    <header>
      <div style={{background:'red'}} onClick={() => setFilters("Acceptable electoral freedom")} className={"rectangle"}>
      </div>
      <div style={{background:'purple'}} onClick={() => setFilters("High electoral freedom")} className={"rectangle"}>
      </div>
      <div style={{background:'orange'}} onClick={() => setFilters("Insufficient electoral freedom")} className={"rectangle"}>
      </div>
      <div style={{background:'green'}} onClick={() => setFilters("Low electoral freedom")} className={"rectangle"}>
      </div>
      <div style={{background:'lightgreen'}} onClick={() => setFilters("Outstanding electoral freedom")} className={"rectangle"}>
      </div>
      <div style={{background:'blue'}} onClick={() => setFilters("Remarkably low electoral freedom")} className={"rectangle"}>
      </div>
      <div style={{background:'white'}} onClick={() => setFilters("Very high electoral freedom")} className={"rectangle"}>
      </div>
      <div style={{background:'black'}} onClick={() => setFilters("Very low electoral freedom")} className={"rectangle"}>
      </div>
      <button onClick={Toggle}>Toggle</button>

    </header>
  );
}
//  HTML Button Example
//  <button onClick={(clickme) => Store.dispatch(togglePerspective())} />

export default Header;
