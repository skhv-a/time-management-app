import React from 'react';
import { InProcessSectionContainer } from './in-process.styles';
import CustomHeader from '../../components/custom-header/custom-header.component';

const InProcessSection = () => {
  return (
    <InProcessSectionContainer>
      <CustomHeader inProcess>In process</CustomHeader>
    </InProcessSectionContainer>
  );
};

export default InProcessSection;
