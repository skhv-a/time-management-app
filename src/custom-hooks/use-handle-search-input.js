import { useContext } from 'react';
import { ManageYourTimeContext } from '../contexts/manage-your-time-preview/manage-your-time.context';
import { searchRequest } from '../reducers/manage-your-time/manage-your-time.actions';

const useHandleSearchInput = () => {
  const { dispatch } = useContext(ManageYourTimeContext);

  const handleSearchInput = (e) => {
    dispatch(searchRequest(e.target.value.toLowerCase().trim()));
  };

  const searchedGoals = (data, searchRequest) => {
    return data.filter((goal) => goal.title.includes(searchRequest));
  };

  return {
    handleSearchInput,
    searchedGoals,
  };
};

export default useHandleSearchInput;
