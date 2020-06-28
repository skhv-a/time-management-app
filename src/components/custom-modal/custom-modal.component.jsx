import React, { useContext } from 'react';

import {
  CustomModalContainer,
  ModalForm,
  Overlay,
} from './custom-modal.styles';

import { toggleModal } from '../../reducers/manage-your-time/manage-your-time.actions';

import { ManageYourTimeContext } from '../../contexts/manage-your-time-preview/manage-your-time.context';

import { CustomButton } from '../custom-button/custom-button.styles';

import AddModalGoal from '../add-goal-modal/add-goal-modal.component';

const CustomModal = ({ modalType }) => {
  const { dispatch } = useContext(ManageYourTimeContext);
  return (
    <CustomModalContainer>
      <Overlay
        onClick={() => {
          dispatch(toggleModal({}));
        }}
      />

      {modalType.createGoal ? (
        <AddModalGoal />
      ) : (
        <ModalForm
          onSubmit={() => dispatch(toggleModal({}))}
          onKeyUp={(e) => {
            if (e.keyCode === 13) {
              e.preventDefault();
              CustomButton.click();
            }
          }}
        >
          <CustomButton done>done</CustomButton>
        </ModalForm>
      )}
    </CustomModalContainer>
  );
};

export default CustomModal;
