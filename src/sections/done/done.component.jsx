import React from 'react';
import { DoneSectionContainer } from './done.styles';
import CustomHeader from '../../components/custom-header/custom-header.component';

const DoneSection = () => (
  <DoneSectionContainer>
    <CustomHeader done>Done</CustomHeader>
  </DoneSectionContainer>
);

export default DoneSection;
