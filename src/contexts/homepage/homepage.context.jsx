import React, { createContext, useReducer } from 'react';

import INITIAL_STATE from '../../reducers/homepage/homepage.initial-state';

import reducer from '../../reducers/homepage/homepage.reducer.js';

export const HomepageContext = createContext();

export const HomepageProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <HomepageContext.Provider value={{ state, dispatch }}>
      {children}
    </HomepageContext.Provider>
  );
};
