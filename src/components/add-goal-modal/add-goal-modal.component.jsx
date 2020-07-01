import React, { useState, useContext } from 'react';

import { ModalForm } from '../custom-modal/custom-modal.styles';

import { ManageYourTimeContext } from '../../contexts/manage-your-time-preview/manage-your-time.context';

import { CustomInput } from '../custom-input/custom-input.styles';
import { CustomButton } from '../custom-button/custom-button.styles';
import {
  toggleModal,
  addGoal,
} from '../../reducers/manage-your-time/manage-your-time.actions';

let id = 0;

const AddModalGoal = () => {
  const [isValid, setValid] = useState(true);
  const { dispatch } = useContext(ManageYourTimeContext);
  const [goal, setGoal] = useState({
    title: '',
    description: '',
    isDone: false,
    id: id++,
  });
  const handleTitleInput = (e) => {
    setGoal({ ...goal, title: e.target.value.toLowerCase() });
    e.target.value.length >= 4 ? setValid(false) : setValid(true);
  };
  const handleDescriptionInput = (e) => {
    setGoal({ ...goal, description: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(toggleModal({}));
    dispatch(addGoal(goal));
    setValid(true);
  };

  return (
    <ModalForm
      onSubmit={handleSubmit}
      onKeyUp={(e) => {
        if (e.keyCode === 13) {
          e.preventDefault();
          CustomButton.click();
        }
      }}
    >
      <CustomInput
        addModalInput
        placeholder="Title"
        onInput={handleTitleInput}
        required
      />
      <CustomInput
        addModalInput
        placeholder="Description"
        onInput={handleDescriptionInput}
      />
      <CustomButton add type="submit" disabled={isValid}>
        Add goal
      </CustomButton>
    </ModalForm>
  );
};

export default AddModalGoal;
