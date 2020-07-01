import React, { useContext } from 'react';

import TimeManageSection from '../../sections/time-manage/time-manage.component';
import InProcessSection from '../../sections/in-process/in-process.component';
import DoneSection from '../../sections/done/done.component';

import { Container } from './manage-your-time-preview.styles.js';

import { ManageYourTimeContext } from '../../contexts/manage-your-time-preview/manage-your-time.context';

import CustomModal from '../custom-modal/custom-modal.component';

export let isMobile = !window.matchMedia('(min-width:1401px)').matches;

const ManageYourTimePreview = () => {
  const {
    state: { modalType, isHidden },
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

      {!isHidden ? <CustomModal {...modalType} /> : null}
    </Container>
  );
};

export default ManageYourTimePreview;
