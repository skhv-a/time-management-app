import React from 'react';
import {
  GoalItemModalContainer,
  ModalTitle,
  ModalDescription,
} from './goal-item-modal.styles';
import { InputEditor } from '../input-editor/input-editor.styles';
import { CustomInput } from '../custom-input/custom-input.styles';
import useGoalModal from '../../custom-hooks/use-goal-modal';

const GoalItemModal = ({ goal: { title, description, isDone }, goal }) => {
  const {
    isTitleEdit,
    isDescriptionEdit,
    setTitleEdit,
    setDescriptionEdit,
    setTitleInputValue,
    setDescriptionInputValue,
    ButtonSelector,
    titleInputValue,
    descriptionInputValue,
  } = useGoalModal(title, description, goal);

  goal.title = titleInputValue;
  goal.description = descriptionInputValue;
  return (
    <React.Fragment>
      <GoalItemModalContainer>
        {!isTitleEdit ? (
          <ModalTitle isDone={isDone} onDoubleClick={() => setTitleEdit(true)}>
            {title}
            {!isDone ? (
              <InputEditor onClick={() => setTitleEdit(true)}>
                Edit...
              </InputEditor>
            ) : null}
          </ModalTitle>
        ) : (
          <CustomInput
            defaultValue={title}
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
              {description}
              {!isDone ? (
                <InputEditor onClick={() => setDescriptionEdit(true)}>
                  Edit...
                </InputEditor>
              ) : null}
            </ModalDescription>
          ) : (
            <CustomInput
              defaultValue={description}
              onInput={(e) => setDescriptionInputValue(e.target.value)}
              editInput
            />
          )
        ) : null}
      </GoalItemModalContainer>
      <ButtonSelector isDone={isDone} />
    </React.Fragment>
  );
};

export default GoalItemModal;
