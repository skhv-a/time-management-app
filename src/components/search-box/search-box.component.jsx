import React, { useContext, useEffect } from 'react';

import { SearchContainer } from './search-box.styles';
import { CustomInput } from '../custom-input/custom-input.styles';
import { ManageYourTimeContext } from '../../contexts/manage-your-time-preview/manage-your-time.context';

import { searchGoal } from '../../reducers/manage-your-time/manage-your-time.actions';

const SearchBox = () => {
  const {
    dispatch,
    state: { goals },
  } = useContext(ManageYourTimeContext);

  useEffect(() => {
    dispatch(searchGoal(goals));
  }, [goals, dispatch]);

  const handleSearchInput = (e) => {
    const searchedGoals = goals.filter((goal) =>
      goal.title.includes(e.target.value.toLowerCase().trim())
    );

    dispatch(searchGoal(searchedGoals));
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

//!need to refact
