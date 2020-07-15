import styled from 'styled-components';

export const GoalsForTodayContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
`;

export const GoalsForTodayHeader = styled.div`
  width: 100%;
  height: 70px;
  background-color: #211c74;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 700px) {
    border-radius: 15px;
  }
`;

export const GoalsForTodayTitle = styled.span`
  font-family: Roboto-Regular;
  font-size: 25px;
  color: #ffffff;
  text-align: center;
  text-transform: uppercase;
  @media only screen and (min-width: 1401px) {
    font-size: min(2vw, 28px);
  }
`;
