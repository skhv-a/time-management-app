import { CustomButton } from '../components/custom-button/custom-button.styles';
import React from 'react';

const { useContext, useState } = require('react');
const {
  updateTitle,
  updateDescription,
} = require('../reducers/manage-your-time/manage-your-time.actions');
const {
  ManageYourTimeContext,
} = require('../contexts/manage-your-time-preview/manage-your-time.context.jsx');

const useGoalModal = (title, description, goal) => {
  const { dispatch } = useContext(ManageYourTimeContext);

  const [isTitleEdit, setTitleEdit] = useState(false);
  const [isDescriptionEdit, setDescriptionEdit] = useState(false);

  const [titleInputValue, setTitleInputValue] = useState(title);
  const [descriptionInputValue, setDescriptionInputValue] = useState(
    description
  );

  const handleInputEdit = (e) => {
    e.preventDefault();
    if (titleInputValue !== title) {
      dispatch(updateTitle({ updatedTitle: titleInputValue, goal }));
    }
    if (descriptionInputValue !== description) {
      dispatch(
        updateDescription({ updatedDescription: descriptionInputValue, goal })
      );
    }

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
  };
};

export default useGoalModal;
