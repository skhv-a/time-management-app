import React, { useContext, useState } from 'react';

import {
  AddGoalModalContainer,
  ModalForm,
  Overlay,
} from './add-goal-modal.styles';

import {
  toggleModal,
  addGoal,
} from '../../reducers/manage-your-time/manage-your-time.actions';

import { ManageYourTimeContext } from '../../contexts/manage-your-time-preview/manage-your-time.context';
import { CustomInput } from '../custom-input/custom-input.styles';
import { CustomButton } from '../custom-button/custom-button.styles';

let id = 0;

const AddGoalModal = () => {
  const [isClicked, setClicked] = useState(false);
  const { dispatch } = useContext(ManageYourTimeContext);
  const [goal, setGoal] = useState({
    title: '',
    description: '',
    isDone: false,
    id: id++,
  });

  const handleTitleInput = (e) => {
    setGoal({ ...goal, title: e.target.value.toLowerCase() });
  };
  const handleDescriptionInput = (e) => {
    setGoal({ ...goal, description: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(toggleModal);
    dispatch(addGoal(goal));
  };

  return (
    <AddGoalModalContainer>
      <Overlay
        onClick={() => {
          dispatch(toggleModal);
        }}
      />
      <ModalForm
        onSubmit={handleSubmit}
        onKeyUp={(e) => {
          if (e.keyCode === 13) {
            e.preventDefault();
            CustomButton.click();
          }
        }}
        isCliked={isClicked}
      >
        <CustomInput
          addModalInput
          placeholder="Title"
          onInput={handleTitleInput}
        />
        <CustomInput
          addModalInput
          placeholder="Description"
          onInput={handleDescriptionInput}
        />
        <CustomButton add type="submit">
          Add goal
        </CustomButton>
      </ModalForm>
    </AddGoalModalContainer>
  );
};

export default AddGoalModal;
