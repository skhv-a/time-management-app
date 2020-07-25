import React from 'react';

import { ModalForm } from '../custom-modal/custom-modal.styles';

import { ModalField } from '../custom-input/custom-input.styles';
import { CustomButton } from '../custom-button/custom-button.styles';

import useHandleInput from '../../custom-hooks/use-handle-input';
import useHandleSubmit from '../../custom-hooks/use-handle-submit';
import { toggleAddGoalModal } from '../../reducers/manage-your-time/manage-your-time.actions';
import { useMutation, useQuery } from '@apollo/client';
import { ADD_GOAL } from '../../apollo-gqls/goal.gql';
import { CURRENT_USER_DATA } from '../../apollo-gqls/user.gql';

const AddModalGoal = () => {
  const {
    handleTitleInput,
    handleDescriptionInput,
    goal,
    isValid,
  } = useHandleInput();
  const { handleSubmit, dispatch } = useHandleSubmit(addGoalOnSubmit);
  const [addGoal] = useMutation(ADD_GOAL);
  const { data } = useQuery(CURRENT_USER_DATA);

  function addGoalOnSubmit() {
    dispatch(toggleAddGoalModal());
    addGoal({
      variables: { id: data.viewer.id, ...goal },
      refetchQueries: () => [{ query: CURRENT_USER_DATA }],
    });
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
      <ModalField placeholder="Title" onInput={handleTitleInput} required />
      <ModalField placeholder="Description" onInput={handleDescriptionInput} />
      <CustomButton
        add
        type="submit"
        disabled={!isValid}
        style={{ margin: '0' }}
      >
        Add goal
      </CustomButton>
    </ModalForm>
  );
};

export default AddModalGoal;
