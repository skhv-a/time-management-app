import React, { useContext } from 'react';

import { CustomModalContainer, Overlay } from './custom-modal.styles';

import { toggleModal } from '../../reducers/manage-your-time/manage-your-time.actions';

import { ManageYourTimeContext } from '../../contexts/manage-your-time-preview/manage-your-time.context';

import AddModalGoal from '../add-goal-modal/add-goal-modal.component';

import InProcessGoalModal from '../in-process-goal-modal/in-process-goal-modal.component';
import DoneGoalModal from '../done-goal-modal/done-goal-modal.component';

const CustomModal = ({ modalType, goal }) => {
  const { dispatch } = useContext(ManageYourTimeContext);

  return (
    <CustomModalContainer>
      <Overlay
        onClick={() => {
          dispatch(toggleModal({}));
        }}
      />

      {modalType === 'createGoal' ? (
        <AddModalGoal />
      ) : modalType === 'inProcess' ? (
        <InProcessGoalModal goal={goal} />
      ) : (
        <DoneGoalModal goal={goal} />
      )}
    </CustomModalContainer>
  );
};

export default CustomModal;
