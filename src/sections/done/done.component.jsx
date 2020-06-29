import React, { useContext, useState, useEffect } from 'react';
import { DoneSectionContainer } from './done.styles';
import CustomHeader from '../../components/custom-header/custom-header.component';
import { ManageYourTimeContext } from '../../contexts/manage-your-time-preview/manage-your-time.context';
import GoalsList from '../../components/goals-list/goals-list.component';

const DoneSection = () => {
  const {
    state: { goals },
  } = useContext(ManageYourTimeContext);

  const [doneGoals, setDoneGoals] = useState();
  useEffect(() => {
    setDoneGoals(goals.filter((goal) => goal.isDone === true));
  }, [goals]);
  return (
    <DoneSectionContainer>
      <CustomHeader done>Done</CustomHeader>
      <GoalsList whichComponent={'done'} goalsSrc={doneGoals} />
    </DoneSectionContainer>
  );
};

export default DoneSection;
