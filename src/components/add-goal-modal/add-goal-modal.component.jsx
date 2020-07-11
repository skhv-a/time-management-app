import React from 'react';

import { ModalForm } from '../custom-modal/custom-modal.styles';

import { CustomInput } from '../custom-input/custom-input.styles';
import { CustomButton } from '../custom-button/custom-button.styles';

import useHandleInput from '../../custom-hooks/use-handle-input';
import useHandleSubmit from '../../custom-hooks/use-handle-submit';
import {
  addGoal,
  toggleAddGoalModal,
} from '../../reducers/manage-your-time/manage-your-time.actions';

const AddModalGoal = () => {
  const {
    handleTitleInput,
    handleDescriptionInput,
    goal,
    isValid,
  } = useHandleInput();

  const { handleSubmit, dispatch } = useHandleSubmit(addGoalOnSubmit);

  function addGoalOnSubmit() {
    dispatch(toggleAddGoalModal());
    dispatch(addGoal(goal));
  }

  return (
    <ModalForm
      onSubmit={handleSubmit}
      onKeyUp={(e) => {
        if (e.keyCode === 13) {
          e.preventDefault();
          ModalForm.submit();
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
      <CustomButton add type="submit" disabled={!isValid}>
        Add goal
      </CustomButton>
    </ModalForm>
  );
};

export default AddModalGoal;
