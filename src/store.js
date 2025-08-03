// src/store.js
import { createStore } from 'redux';

// Definir un estado inicial
const initialState = {
  user: null,  // Estado de ejemplo, como un usuario autenticado
};

// Crear un reducer (función que maneja los cambios en el estado)
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.payload,  // Actualiza el estado con el usuario
      };
    default:
      return state;
  }
};

// Crear el store
const store = createStore(rootReducer);

export default store;
