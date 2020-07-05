import React, { useState, useContext } from 'react';
import {
  GoalItemModalContainer,
  ModalTitle,
  ModalDescription,
} from './goal-item-modal.styles';
import { InputEditor } from '../input-editor/input-editor.styles';
import { CustomInput } from '../custom-input/custom-input.styles';
import { CustomButton } from '../custom-button/custom-button.styles';
import { ManageYourTimeContext } from '../../contexts/manage-your-time-preview/manage-your-time.context';
import {
  updateTitle,
  updateDescription,
} from '../../reducers/manage-your-time/manage-your-time.actions';

const GoalItemModal = ({ goal: { title, description, isDone }, goal }) => {
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
      setTitleEdit(false);

      dispatch(updateTitle({ updatedTitle: titleInputValue, goal }));
    }
    if (descriptionInputValue !== description) {
      setDescriptionEdit(false);

      dispatch(
        updateDescription({ updatedDescription: descriptionInputValue, goal })
      );
    } else {
      setTitleEdit(false);
      setDescriptionEdit(false);
    }
  };

  return (
    <GoalItemModalContainer>
      {!isTitleEdit ? (
        <ModalTitle isDone={isDone} onDoubleClick={() => setTitleEdit(true)}>
          {titleInputValue}
          {!isDone ? (
            <InputEditor onClick={() => setTitleEdit(true)}>
              Edit...
            </InputEditor>
          ) : null}
        </ModalTitle>
      ) : (
        <CustomInput
          defaultValue={titleInputValue}
          onInput={(e) => setTitleInputValue(e.target.value)}
          editInput
        />
      )}

      {description ? (
        !isDescriptionEdit ? (
          <ModalDescription
            isDone={isDone}
            onDoubleClick={() => setDescriptionEdit(true)}
          >
            {descriptionInputValue}
            {!isDone ? (
              <InputEditor onClick={() => setDescriptionEdit(true)}>
                Edit...
              </InputEditor>
            ) : null}
          </ModalDescription>
        ) : (
          <CustomInput
            defaultValue={descriptionInputValue}
            onInput={(e) => setDescriptionInputValue(e.target.value)}
            editInput
          />
        )
      ) : null}

      {!isDone ? (
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
      )}
    </GoalItemModalContainer>
  );
};

export default GoalItemModal;
