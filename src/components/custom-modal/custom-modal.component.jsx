import React from 'react';

import { CustomModalContainer, Overlay } from './custom-modal.styles';

import {
  togglePreviewGoalModal,
  toggleAddGoalModal,
} from '../../reducers/manage-your-time/manage-your-time.actions';

import AddModalGoal from '../add-goal-modal/add-goal-modal.component';

import CustomGoalModal from '../custom-goal-modal/custom-goal-modal.component';

import useHandleSubmit from '../../custom-hooks/use-handle-submit';
import { useMutation } from '@apollo/react-hooks';
import { UPDATE_GOAL, DELETE_GOAL, GET_GOALS } from '../../apollo-gqls';

const CustomModal = ({ createGoalModal, goal }) => {
  const [updateGoal] = useMutation(UPDATE_GOAL);
  const [deleteGoal] = useMutation(DELETE_GOAL);
  const { handleSubmit: inProcessSubmit, dispatch } = useHandleSubmit(
    inProcessSubmitFunc,
    true
  );

  const { handleSubmit: doneSubmit } = useHandleSubmit(
    doneSubmitFunction,
    true
  );

  function inProcessSubmitFunc() {
    updateGoal({
      variables: {
        id: goal.id,
        title: goal.title,
        description: goal.description,
        isDone: !goal.idDone,
      },
    });
  }

  function doneSubmitFunction() {
    deleteGoal({
      variables: { id: goal.id },
      refetchQueries: [{ query: GET_GOALS }],
    });
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
