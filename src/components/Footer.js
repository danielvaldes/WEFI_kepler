import React from "react";
import './styles/styles.css';



import Store from '../store';
import {addDataToMap} from 'kepler.gl/actions';
import WEFI_2019_AGX from './data/WEFI.csv.js';
import Processors from 'kepler.gl/processors';

let names = []
let nNames = []
const data = Processors.processCsvData(WEFI_2019_AGX);


//We add and remove from names (so we filter by name)
function setFilters(x)
{
  nNames = []
  if(names.indexOf(x) !== -1)    //In the array
  {
    names.forEach(name => {
      if(name === x)
      {
        //console.log(x + " ---- already existed")
      }
      else
      {
          nNames.push(name)
      }
    })
    names = nNames
  }
  else {
    //FilterNot in the array so We are adding it
    //console.log("not in the array")
    names.push(x)
  }
   UpdateMapFilters()
}


//TODO: Could be moved to a GeneralManager to handle all updates
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
                "opacity":1,
                "colorRange":
                {
                  "name":"RankColorPalette",
                  "type":"custom",
                  "category":"WEFI",
                  "colors":["#33CC33","#009900","#FF7C80","#FF5050","#006600","#A50021","#008000","#CD1719"]
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
function Footer() {
  let waterMark = ''
  if(/Android|webOS|iPhone|iPad|iPod|Opera Mini/i.test(navigator.userAgent))
  {  //  console.log("here on a mobile")
    waterMark = "waterMark_Mobile"
  }
  else {//  console.log("here on a Desktop")
    waterMark = "waterMark_Desktop"
  }
  return (
    <div className="footer">
      <div className={waterMark}>
        <p>©<a href="http://www.fundalib.org"> Foundation for the Advancement of Liberty:</a> </p>
        <p>WEFI 2020</p>
        <p>Dataviz by
          <a href="https://iu.adventgx.com"> AdventGX</a>
        </p></div>
      <div style={{ }} className="legend">
            <button  style={{background: '#A50021',border: 'none'}} onClick={() => setFilters("Remarkably low electoral freedom")} className={"ColorFilter"}>
            </button>
            <button  style={{background: '#CD171A', border: 'none'}} onClick={() => setFilters("Very low electoral freedom")} className={"ColorFilter"}>
            </button>
            <button  style={{background: '#FF5050', border: 'none'}} onClick={() => setFilters("Low electoral freedom")} className={"ColorFilter"}>
            </button>
            <button  style={{background: '#FF7C80', border: 'none'}} onClick={() => setFilters("Insufficient electoral freedom")} className={"ColorFilter"}>
            </button>
            <button  style={{background: '#33CC33', border: 'none'}} onClick={() => setFilters("Acceptable electoral freedom")} className={"ColorFilter"}>
            </button>
            <button  style={{background: '#009900', border: 'none'}} onClick={() => setFilters("High electoral freedom")} className={"ColorFilter"}>
            </button>
            <button  style={{background: '#008000', border: 'none'}} onClick={() => setFilters("Very high electoral freedom")} className={"ColorFilter"}>
            </button>
            <button  style={{background: '#006600', border: 'none'}} onClick={() => setFilters("Outstanding electoral freedom")} className={"ColorFilter"}>
            </button>
      </div>
      <div className="legendInfo">
       <p style={{textAlign: 'left'}}>Remarkably low electoral freedom</p>
       <p style={{textAlign: 'right'}}>Outstanding electoral freedom</p>
      </div>
    </div>
  );
}


export default Footer;
