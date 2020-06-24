import React, { useContext } from 'react';

import { SearchContainer } from './search-box.styles';
import { CustomInput } from '../custom-input/custom-input.styles';
import { ManageYourTimeContext } from '../../contexts/manage-your-time-preview/manage-your-time.context';

const SearchBox = () => {
  const {
    state: { goals },
  } = useContext(ManageYourTimeContext);
  const handleSearchInput = (e) => {
    console.log(goals[0].title);
  };
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
