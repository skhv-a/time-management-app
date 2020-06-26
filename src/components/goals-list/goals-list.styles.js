import styled from 'styled-components';
import { scaleUpAnimation } from '../../animations/animations';
import GoalItem from '../goal-item/goal-item.component';

const setProps = (props) => {
  if (props.hasFound) {
    return scaleUpAnimation;
  }
};

export const Goals = styled.div`
  margin: 0 auto;
  width: 80%;

  display: flex;
  flex-direction: column;
  align-self: center;
  flex: 1;
  margin: 35px 0;
  overflow: scroll;
`;

export const NothingMessage = styled.span`
  font-family: RobotoCondensed-Light;
  font-size: min(1.5vw, 28px);
  color: white;
  margin: auto auto;

  ${setProps}
`;

export const InProcessGoalItem = styled(GoalItem)`
  background-color: red;
`;
