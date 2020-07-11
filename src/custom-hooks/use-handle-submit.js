import { togglePreviewGoalModal } from '../reducers/manage-your-time/manage-your-time.actions';

const { useContext } = require('react');
const {
  ManageYourTimeContext,
} = require('../contexts/manage-your-time-preview/manage-your-time.context');

const useHandleSubmit = (fn, previewModal) => {
  const { dispatch } = useContext(ManageYourTimeContext);

  const baseSubmit = (e) => {
    e.preventDefault();

    if (previewModal) {
      dispatch(togglePreviewGoalModal());
    }
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
