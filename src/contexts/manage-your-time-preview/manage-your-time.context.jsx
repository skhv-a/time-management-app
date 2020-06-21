import React, { useReducer, createContext } from 'react';

import reducer from '../../reducers/manage-your-time/manage-your-time.reducer';

import INITIAL_STATE from '../../reducers/manage-your-time/manage-your-time.initial-state';

export const ManageYourTimeContext = createContext();

export const ManageYourTimeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <ManageYourTimeContext.Provider value={(state, dispatch)}>
      {children}
    </ManageYourTimeContext.Provider>
  );
};
