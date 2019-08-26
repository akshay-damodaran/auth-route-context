import React, { useReducer } from 'react';
import UserContext from './context/UserContext';

const Auth = props => {
  const initialState = {
    isAuthenticated: false
  }

  const reducer = (state, action) => {
    switch(action.type) {
      case 'login': 
        return ({
          ...state,
          isAuthenticated: true,
          name: action.payload.name,
          id: action.payload.id,
        });
      case 'logout':
        return ({
          isAuthenticated: false,
        })
      default: return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={{
      state,
      dispatch,
    }}>
      { props.children }
    </UserContext.Provider>
  )
}

export default Auth;
