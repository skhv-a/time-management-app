import React from 'react';

import TimeManageSection from '../time-manage/time-manage-section.component';

import { Container } from './manage-your-time-preview.styles.js';

import { ManageYourTimeProvider } from '../../contexts/manage-your-time-preview/manage-your-time.context';

const ManageYourTimePreview = () => (
  <ManageYourTimeProvider>
    <Container>
      <TimeManageSection />
    </Container>
  </ManageYourTimeProvider>
);

export default ManageYourTimePreview;
