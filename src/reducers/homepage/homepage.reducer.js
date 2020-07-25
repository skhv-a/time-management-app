import types from './homepage.types';

const reducer = (state, action) => {
  switch (action.type) {
    case types.CAN_RENDER:
      return { ...state, canRender: !state.canRender };
    default:
      return state;
  }
};

export default reducer;
