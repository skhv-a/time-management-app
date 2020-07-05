import styled from 'styled-components';

export const InputEditor = styled.div`
  font-family: RobotoCondensed-Light;
  font-size: 15px;

  border-radius: 25px;
  background-color: #b2b1b1;
  color: white;

  cursor: pointer;
  padding: 5px 10px;

  position: absolute;
  right: 15px;
  bottom: 15px;
  &:hover {
    background-color: #757575;
    transition: background-color 0.3s;
  }
`;
