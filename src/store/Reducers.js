

export const SET_LEGEND = 'SET_LEGEND';



//Actions
export const set_legend_action = (state) => {
  return {
    type: SET_LEGEND,
    payload: state
  }
}



//Our constant APP Memory Variables
const app_default_state = {
  random: 0,
  name: '',
  country: '',
  rank: 0
};


const app_default_reducer = function ( state = app_default_state, action) {
	switch (action.type) {
    case SET_LEGEND:{
      return {
        ...state,
          name: action.payload.object.properties.name,
          country: action.payload.object.id,
          rank: 0
          }
    }
    default:
			return state;
	}
};


export default app_default_reducer;
