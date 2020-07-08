const { useContext, useEffect } = require('react');
const {
  ManageYourTimeContext,
} = require('../contexts/manage-your-time-preview/manage-your-time.context');
const {
  searchGoal,
} = require('../reducers/manage-your-time/manage-your-time.actions');

const useHandleSearchInput = () => {
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

  return {
    handleSearchInput,
  };
};

export default useHandleSearchInput;
