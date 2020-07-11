import React from 'react';

import { CustomModalContainer, Overlay } from './custom-modal.styles';

import {
  togglePreviewGoalModal,
  toggleAddGoalModal,
  done,
  remove,
} from '../../reducers/manage-your-time/manage-your-time.actions';

import AddModalGoal from '../add-goal-modal/add-goal-modal.component';

import CustomGoalModal from '../custom-goal-modal/custom-goal-modal.component';

import useHandleSubmit from '../../custom-hooks/use-handle-submit';

const CustomModal = ({ createGoalModal, goal }) => {
  const { handleSubmit: inProcessSubmit, dispatch } = useHandleSubmit(
    inProcessSubmitFunc,
    true
  );

  const { handleSubmit: doneSubmit } = useHandleSubmit(
    doneSubmitFunction,
    true
  );

  function inProcessSubmitFunc() {
    goal.isDone = true;
    dispatch(done(goal));
  }

  function doneSubmitFunction() {
    dispatch(remove(goal));
  }

  return (
    <CustomModalContainer>
      <Overlay
        onClick={() => {
          dispatch(
            createGoalModal ? toggleAddGoalModal() : togglePreviewGoalModal()
          );
        }}
      />

      {createGoalModal ? (
        <AddModalGoal />
      ) : !goal.isDone ? (
        <CustomGoalModal goal={goal} onSubmitFunc={inProcessSubmit} />
      ) : (
        <CustomGoalModal goal={goal} onSubmitFunc={doneSubmit} />
      )}
    </CustomModalContainer>
  );
};

export default CustomModal;
