const { useContext } = require('react');
const {
  ManageYourTimeContext,
} = require('../contexts/manage-your-time-preview/manage-your-time.context');
const {
  toggleModal,
} = require('../reducers/manage-your-time/manage-your-time.actions');

const useHandleSubmit = (fn) => {
  const { dispatch } = useContext(ManageYourTimeContext);

  const baseSubmit = (e) => {
    e.preventDefault();
    dispatch(toggleModal({}));
  };

  return {
    handleSubmit(e) {
      baseSubmit(e);
      fn();
    },
    dispatch,
  };
};

export default useHandleSubmit;
