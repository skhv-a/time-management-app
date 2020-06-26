import React from 'react';
import {
  CustomHeaderContainer,
  LogoContainer,
  LogoTitle,
} from './custom-header.styles';

const CustomHeader = (props) => {
  return (
    <CustomHeaderContainer props={props}>
      <LogoContainer props={props}>
        <LogoTitle>{props.children}</LogoTitle>
      </LogoContainer>
    </CustomHeaderContainer>
  );
};

export default CustomHeader;
