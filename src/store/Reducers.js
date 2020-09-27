


//Actions
export const BUY_POKEMON = 'BUY_POKEMON';
export const buy_pokemon_action = (cant) => {
  return {
    type: BUY_POKEMON,
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




//Our constant Memory Variable
const app_default_state = {
  pokemon: 10,
  nombre: 'Jose',
  data: []
};


const app_default_reducer = function ( state = app_default_state, action) {
	switch (action.type) {
    case BUY_POKEMON:{
      return {
        ...state,
        pokemon: state.pokemon - action.payload
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
///
