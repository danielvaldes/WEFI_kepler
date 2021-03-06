//Map Initial state configuration
const myConfig =
{
  "version":"v1",
  "config":
  {
    //visState -
    //Manages all data and visualization related state,
    //including datasets, layers, filters and interaction configs.
    //Some of the key updaters are updateVisDataUpdater, layerConfigChangeUpdater, setFilterUpdater, interactionConfigChangeUpdater.
    "visState":
    {
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
                //the color order got based on alphabetization
                //Order:  Acceptable, High Fre, Insufi, Low El, Outstanding, Remarkably, very hight, very low
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
            "textLabel":
            [
              {
                "field":null,
                "color":[255,255,255],
                "size":50,
                "z-index": 1,
                "offset":[0,0],
                "anchor":"start",
                "alignment":"center"
              }
            ]
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
      "interactionConfig":
      {
        "tooltip":
        {
          "fieldsToShow":
          {
            "wefi_map":
            [
              {
                "name":"Country",
                "format":null
              },
              {
                "name":"Rank",
                "format":null
              },
              {
                "name":"Index",
                "format":null
              },
              {
                "name":"Classification",
                "format":null
              }
            ]
          },
          "compareMode":true,
          "compareType":"absolute",
          "enabled":true
        }
      }
    },
    //mapState -
    // Manages base map behavior including the viewport, drag rotate and toggle split maps.
    // Key updates are updateMapUpdater, toggleSplitMapUpdater and togglePerspectiveUpdater.
    "mapState":
    {
      "latitude": 0,
      "longitude": 0,
      "zoom": 0

    },
    //mapStyle  -
    // Managers base map style, including setting base map style, toggling base map layers and adding custom base map style.
    "mapStyle":
    {
      "styleType":"wefi_customMap",
      "topLayerGroups":{"label":true},
      "visibleLayerGroups":
      {
        "label":true,
        "water":true,
        "land":true,
      },
      "mapStyles":
      {
        "wefi_customMap":
         {
          "accessToken": "pk.eyJ1IjoibW9ub3NhaWNvbCIsImEiOiJja2Rldm1sYmowYWs2MnVwZnl0MXd4MzNjIn0.H1-Azok6VhC8vsMbz9RFLg",
          "custom": true,
          "icon": "BASE64IMAGE",
          "id": "wefi_customMap",
          "label": "WEFI_kepler",
          "url": "mapbox://styles/monosaicol/ckgpr096z4laf1bo600vra4te"
        }
      }
    },
		//uiState -
		//Managers all UI component transition state, including open / close side panel, current displayed panel etc.
		//Note, ui state reducer is the only reducer that’s not saved in kepler.gl schema.
		"uiState":
		{

    }
  }
};
export default myConfig;
