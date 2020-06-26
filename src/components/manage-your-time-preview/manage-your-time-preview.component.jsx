import React, { useContext } from 'react';

import TimeManageSection from '../../sections/time-manage/time-manage.component';

import { Container } from './manage-your-time-preview.styles.js';

import { ManageYourTimeContext } from '../../contexts/manage-your-time-preview/manage-your-time.context';

import AddGoalModal from '../add-goal-modal/add-goal-modal.component';

const ManageYourTimePreview = () => {
  const {
    state: { isHidden },
  } = useContext(ManageYourTimeContext);
  return (
    <Container>
      <TimeManageSection />
      {!isHidden ? <AddGoalModal /> : null}
    </Container>
  );
};

export default ManageYourTimePreview;
