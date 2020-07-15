import React, { useContext } from 'react';

import TimeManageSection from '../../sections/time-manage/time-manage.component';
import InProcessSection from '../../sections/in-process/in-process.component';
import DoneSection from '../../sections/done/done.component';

import { Container } from './manage-your-time-preview.styles.js';
import { createPortal } from 'react-dom';
import CustomModal from '../custom-modal/custom-modal.component';
import { ManageYourTimeContext } from '../../contexts/manage-your-time-preview/manage-your-time.context';

export let isMobile = window.matchMedia('(max-width:1400px)').matches;

const ManageYourTimePreview = () => {
  const {
    state: { previewGoalModalIsHidden, currentGoal },
  } = useContext(ManageYourTimeContext);
  return (
    <Container>
      <TimeManageSection />
      {isMobile ? null : (
        <React.Fragment>
          <InProcessSection />
          <DoneSection />
        </React.Fragment>
      )}
      {!previewGoalModalIsHidden
        ? createPortal(
            <CustomModal goal={currentGoal} />,
            document.getElementById('preview-goal-modal')
          )
        : null}
    </Container>
  );
};

export default ManageYourTimePreview;
