import { CustomButton } from '../components/custom-button/custom-button.styles';
import React from 'react';
import { UPDATE_GOAL } from '../apollo-gqls';
import { useMutation } from '@apollo/react-hooks';

const { useState } = require('react');

const useGoalModal = (title, description, goal) => {
  const [updateGoal] = useMutation(UPDATE_GOAL);

  const [isTitleEdit, setTitleEdit] = useState(false);
  const [isDescriptionEdit, setDescriptionEdit] = useState(false);

  const [titleInputValue, setTitleInputValue] = useState(title);
  const [descriptionInputValue, setDescriptionInputValue] = useState(
    description
  );

  const handleInputEdit = (e) => {
    e.preventDefault();

    updateGoal({
      variables: {
        ...goal,
      },
    });

    setTitleEdit(false);
    setDescriptionEdit(false);
  };

  const ButtonSelector = ({ isDone }) => {
    return !isDone ? (
      isTitleEdit || isDescriptionEdit ? (
        <CustomButton save type="button" onClick={handleInputEdit}>
          Save
        </CustomButton>
      ) : (
        <CustomButton done type="submit">
          Done
        </CustomButton>
      )
    ) : (
      <CustomButton remove type="submit">
        remove
      </CustomButton>
    );
  };

  return {
    isTitleEdit,
    isDescriptionEdit,
    setTitleEdit,
    setDescriptionEdit,
    setTitleInputValue,
    setDescriptionInputValue,
    handleInputEdit,
    ButtonSelector,

    titleInputValue,
    descriptionInputValue,
  };
};

export default useGoalModal;
