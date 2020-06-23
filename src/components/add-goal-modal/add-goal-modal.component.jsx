import React, { useContext, useState, useEffect } from 'react';

import {
  AddGoalModalContainer,
  ModalForm,
  BlackTransparent,
} from './add-goal-modal.styles';

import {
  toggleModal,
  addGoal,
} from '../../reducers/manage-your-time/manage-your-time.actions';

import { ManageYourTimeContext } from '../../contexts/manage-your-time-preview/manage-your-time.context';
import { CustomInput } from '../custom-input/custom-input.styles';
import { CustomButton } from '../custom-button/custom-button.styles';

const AddGoalModal = () => {
  const { dispatch } = useContext(ManageYourTimeContext);
  const [goal, setGoal] = useState({
    title: '',
    description: '',
    isDone: false,
  });

  const handleTitleInput = (e) => {
    setGoal({ ...goal, title: e.target.value });
  };
  const handleDescriptionInput = (e) => {
    setGoal({ ...goal, description: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(toggleModal);
    dispatch(addGoal(goal));
  };

  useEffect(() => {
    console.log(goal);
  }, [goal]);

  return (
    <AddGoalModalContainer>
      <BlackTransparent onClick={() => dispatch(toggleModal)} />
      <ModalForm onSubmit={handleSubmit}>
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
