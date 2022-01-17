import { ACCOUNTS_LOADED } from '../constants/actionsTypes';
  
  const defaultState = {
    appName: 'Acme Bank Assessment Nicholson',
  };
  
  export default (state = defaultState, action) => {
    switch (action.type) {
      case ACCOUNTS_LOADED:
        return {
          ...state,
          accountsList: action.payload
        };
      default:
        return state;
    }
  };
  