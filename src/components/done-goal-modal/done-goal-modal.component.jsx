import React, { useContext } from 'react';
import { ModalForm } from '../custom-modal/custom-modal.styles';
import GoalItemModal from '../goal-item-modal/goal-item-modal.component';
import { CustomButton } from '../custom-button/custom-button.styles';
import {
  toggleModal,
  remove,
} from '../../reducers/manage-your-time/manage-your-time.actions';
import { ManageYourTimeContext } from '../../contexts/manage-your-time-preview/manage-your-time.context';

const DoneGoalModal = ({ goal }) => {
  const { dispatch } = useContext(ManageYourTimeContext);

  const handleRemoveSubmit = (e) => {
    e.preventDefault();
    dispatch(toggleModal({}));
    dispatch(remove(goal));
  };
  return (
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
  );
};

export default DoneGoalModal;
