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
      "filters":[],
      "layers":
      [
        {
          "id":"mdwfnl",
          "type":"geojson",
          "config":
          {
            "dataId":"wefi_map",
            "label":"WEFI_Data",
            "color":[255,178,102],
            "columns":
            {
              "geojson":"_geojson"
            },
            "isVisible":true,
            "visConfig":
            {
              "opacity":0.8,
              "strokeOpacity":0.8,
              "thickness":0.5,
              "strokeColor":[255,254,213],
              "colorRange":
              {
                "name":"Global Warming",
                "type":"sequential",
                "category":"Uber",
                "colors":["#5A1846","#900C3F","#C70039","#E3611C","#F1920E","#FFC300"]
              },
              "strokeColorRange":
              {
                "name":"Global Warming",
                "type":"sequential",
                "category":"Uber",
                "colors":["#5A1846","#900C3F","#C70039","#E3611C","#F1920E","#FFC300"]
              },
              "radius":10,
              "sizeRange":[0,10],
              "radiusRange":[0,50],
              "heightRange":[0,500],
              "elevationScale":5,
              "stroked":true,
              "filled":true,
              "enable3d":false,
              "wireframe":false
            },
            "hidden":false,
            "textLabel":
            [
              {
                "field":null,
                "color":[255,255,255],
                "size":18,
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
              "name":"Rank",
              "type":"integer"
            },
            "colorScale":"quantile",
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
                "name":"name",
                "format":null
              },
              {
                "name":"Country",
                "format":null
              },
              {
                "name":"Index",
                "format":null
              },
              {
                "name":"Rank",
                "format":null
              },
              {
                "name":"Classification",
                "format":null
              }
            ]
          },
          "compareMode":false,
          "compareType":"absolute",
          "enabled":true
        },
        "brush":
        {
          "size":0.5,
          "enabled":false
        },
        "geocoder":
        {
          "enabled":false
        },
        "coordinate":
        {
          "enabled":false
        }
      },
      "layerBlending":"normal",
      "splitMaps":[],
      "animationConfig":
      {
       "currentTime":null,
       "speed":1
      }
    },
    //mapState -
    // Manages base map behavior including the viewport, drag rotate and toggle split maps.
    // Key updates are updateMapUpdater, toggleSplitMapUpdater and togglePerspectiveUpdater.
    "mapState":
    {
      "bearing":0,
      "dragRotate":false,
      "latitude":3.411007793051011,
      "longitude":-28.82812500004583,
      "pitch":0,
      "zoom":6,
      "isSplit":false
    },
    //mapStyle  -
    // Managers base map style, including setting base map style, toggling base map layers and adding custom base map style.
    "mapStyle":
    {
      "styleType":"wefi_customMap",
      "topLayerGroups":{},
      "visibleLayerGroups":
      {
        "label":false,
        "road":false,
        "border":false,
        "building":false,
        "water":true,
        "land":true,
        "3d building":false
      },
      "threeDBuildingColor":[9.665468314072013,17.18305478057247,31.1442867897876],
      "mapStyles":
      {
        "wefi_customMap":
         {
          "accessToken": "pk.eyJ1IjoibW9ub3NhaWNvbCIsImEiOiJja2Rldm1sYmowYWs2MnVwZnl0MXd4MzNjIn0.H1-Azok6VhC8vsMbz9RFLg",
          "custom": true,
          "icon": "BASE64IMAGE",
          "id": "wefi_customMap",
          "label": "WEFI_kepler",
          "url": "mapbox://styles/monosaicol/ckeudvs250mf51ao7u2wp5gji"
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
