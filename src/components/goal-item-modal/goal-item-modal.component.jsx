import React from 'react';
import {
  GoalItemModalContainer,
  ModalTitle,
  ModalDescription,
  Editor,
} from './goal-item-modal.styles';
import { InputEditor } from '../input-editor/input-editor.styles';
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
          <Editor
            defaultValue={title}
            onInput={(e) => setTitleInputValue(e.target.value)}
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
            <Editor
              defaultValue={description}
              onInput={(e) => setDescriptionInputValue(e.target.value)}
              description
            />
          )
        ) : null}
      </GoalItemModalContainer>
      <ButtonSelector isDone={isDone} />
    </React.Fragment>
  );
};

export default GoalItemModal;
