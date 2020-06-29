import React, { useContext } from 'react';

import TimeManageSection from '../../sections/time-manage/time-manage.component';
import InProcessSection from '../../sections/in-process/in-process.component';
import DoneSection from '../../sections/done/done.component';

import { Container } from './manage-your-time-preview.styles.js';

import { ManageYourTimeContext } from '../../contexts/manage-your-time-preview/manage-your-time.context';

import CustomModal from '../custom-modal/custom-modal.component';

const ManageYourTimePreview = () => {
  const {
    state: { modalType, isHidden },
  } = useContext(ManageYourTimeContext);

  return (
    <Container>
      <TimeManageSection />
      <InProcessSection />
      <DoneSection />
      {!isHidden ? <CustomModal {...modalType} /> : null}
    </Container>
  );
};

export default ManageYourTimePreview;
