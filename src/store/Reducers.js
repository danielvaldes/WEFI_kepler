

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
  country: '',
  id: '',
  rank: '',
  classification: '',
  index: ''
};


const app_default_reducer = function ( state = app_default_state, action) {
	switch (action.type) {
    case SET_LEGEND:{
      return {
        ...state,
          country: action.payload.object.data.NAME,
          id: action.payload.object.id,
          rank: action.payload.object.data.RANK,
          classification: action.payload.object.data.CLASSIFICATION,
          index: action.payload.object.data.INDEX
          }
    }
    default:
			return state;
	}
};


export default app_default_reducer;
