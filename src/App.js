import React, {useEffect} from "react";
import keplerGlReducer from "kepler.gl/reducers";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { taskMiddleware } from "react-palm/tasks";
import { Provider, useDispatch } from "react-redux";
import KeplerGl from "kepler.gl";
import { addDataToMap } from "kepler.gl/actions";
//Map window resizer
import AutoSizer from "react-virtualized/dist/commonjs/AutoSizer";
// Kepler.gl Data processing APIs
import Processors from 'kepler.gl/processors';
// 2019 Sample data
import wefiData from './data/data.csv';
//style Designs
import myMapConfig from './components/mapConfig';
import InfoPanel from './components/InfoPanel/panel';
import Button from './components/button';

//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
//Required for Kepler.gl
//Root
const reducers = combineReducers({
  keplerGl: keplerGlReducer
});

const store = createStore(reducers, {}, applyMiddleware(taskMiddleware));
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////


//Start
export default function App() {
  return (
    <div>
      <Provider store={store}>
        <InfoPanel/>
        <Map/>
        <Button onClick= {() => swapData()} >change </Button>
      </Provider>
    </div>
  );
}


function swapData () {
/*
  const { data } = useSwr("wefi_Data", async () => {
  const response = await fetch(
    "https://gist.githubusercontent.com/leighhalliday/a994915d8050e90d413515e97babd3b3/raw/a3eaaadcc784168e3845a98931780bd60afb362f/covid19.json"

    //  "https://gist.githubusercontent.com/---------/------/data.json"
    );
    const data = await response.json();
    return data;
  });*/
}


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
              id="WEFI"
              mapboxApiAccessToken={'pk.eyJ1IjoibW9ub3NhaWNvbCIsImEiOiJja2Rldm1sYmowYWs2MnVwZnl0MXd4MzNjIn0.H1-Azok6VhC8vsMbz9RFLg'}
              width={width}
              height={height}
            />
        )}
      </AutoSizer>
    </div>
  );
}
