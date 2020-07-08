import React from 'react';

import { SearchContainer } from './search-box.styles';
import { CustomInput } from '../custom-input/custom-input.styles';
import useHandleSearchInput from '../../custom-hooks/use-handle-search-input';

const SearchBox = () => {
  const { handleSearchInput } = useHandleSearchInput();
  return (
    <SearchContainer>
      <CustomInput
        searchInput
        placeholder="search..."
        onInput={handleSearchInput}
      ></CustomInput>
    </SearchContainer>
  );
};

export default SearchBox;
