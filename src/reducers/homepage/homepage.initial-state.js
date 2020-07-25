export const INITIAL_STATE = {
  canRender: localStorage.getItem('sessionToken') ? true : false,
};

export default INITIAL_STATE;
