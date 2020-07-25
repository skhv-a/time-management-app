import React from 'react';

import { SearchContainer } from './search-box.styles';
import { StyledInput } from '../custom-input/custom-input.styles';
import useHandleSearchInput from '../../custom-hooks/use-handle-search-input';

const SearchBox = () => {
  const { handleSearchInput } = useHandleSearchInput();
  return (
    <SearchContainer>
      <StyledInput
        placeholder="search..."
        onInput={handleSearchInput}
      ></StyledInput>
    </SearchContainer>
  );
};

export default SearchBox;
