import React from 'react';

import { SearchContainer } from './search-box.styles';
import { CustomInput } from '../custom-input/custom-input.styles';

const SearchBox = () => (
  <SearchContainer>
    <CustomInput searchInput placeholder="search..."></CustomInput>
  </SearchContainer>
);

export default SearchBox;
