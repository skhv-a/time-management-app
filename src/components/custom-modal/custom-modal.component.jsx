import React, { useContext } from 'react';

import {
  CustomModalContainer,
  ModalForm,
  Overlay,
} from './custom-modal.styles';

import {
  toggleModal,
  done,
  remove,
} from '../../reducers/manage-your-time/manage-your-time.actions';

import { ManageYourTimeContext } from '../../contexts/manage-your-time-preview/manage-your-time.context';

import { CustomButton } from '../custom-button/custom-button.styles';

import AddModalGoal from '../add-goal-modal/add-goal-modal.component';
import GoalItemModal from '../goal-item-modal/goal-item-modal.component';

const CustomModal = ({ modalType, goal }) => {
  const { dispatch } = useContext(ManageYourTimeContext);
  const handleDoneSubmit = (e) => {
    e.preventDefault();
    dispatch(toggleModal({}));
    goal.isDone = true;
    dispatch(done(goal));
  };

  const handleRemoveSubmit = (e) => {
    e.preventDefault();
    dispatch(toggleModal({}));
    dispatch(remove(goal));
  };

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
        <ModalForm
          onSubmit={handleDoneSubmit}
          onKeyUp={(e) => {
            if (e.keyCode === 13) {
              e.preventDefault();
              CustomButton.click();
            }
          }}
        >
          <GoalItemModal goal={goal} />
          <CustomButton done type="submit">
            done
          </CustomButton>
        </ModalForm>
      ) : (
        <ModalForm
          onSubmit={handleRemoveSubmit}
          onKeyUp={(e) => {
            if (e.keyCode === 13) {
              e.preventDefault();
              CustomButton.click();
            }
          }}
        >
          <GoalItemModal goal={goal} />
          <CustomButton remove type="submit">
            remove
          </CustomButton>
        </ModalForm>
      )}
    </CustomModalContainer>
  );
};

export default CustomModal;
