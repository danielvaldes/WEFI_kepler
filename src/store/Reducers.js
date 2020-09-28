


//Actions
export const ADD_COUNTER = 'ADD_COUNTER';
export const add_counter_action = (cant) => {
  return {
    type: ADD_COUNTER,
    payload: cant
  }
}

export const SET_DATA = 'ADD_DATA';
export const set_data_action = (cant) => {
  return {
    type: SET_DATA,
    payload: cant
  }
}



//Our constant APP Memory Variables
const app_default_state = {
  counter: 10,
  nombre: 'Jose',
  data: []
};


const app_default_reducer = function ( state = app_default_state, action) {
	switch (action.type) {
    case ADD_COUNTER:{
      return {
        ...state,
        counter: state.pokemon - action.payload
      }
    }
    case SET_DATA: {
      return {
        ...state,
        data: action.payload
      }
    }
		default:
			return state;
	}
};


export default app_default_reducer;
