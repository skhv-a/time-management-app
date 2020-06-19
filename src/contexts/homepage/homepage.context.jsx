import React, { createContext, useReducer } from 'react';

export const HomepageContext = createContext();

export const HomepageProvider = ({ children }) => {
  const initialState = {
    canRender: false,
  };
  const actions = {
    CAN_RENDER: 'CAN_RENDER',
  };

  const reduser = (state, action) => {
    switch (action.type) {
      case actions.CAN_RENDER:
        return { canRender: !state.canRender };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reduser, initialState);

  return (
    <HomepageContext.Provider value={{ state, dispatch, actions }}>
      {children}
    </HomepageContext.Provider>
  );
};
