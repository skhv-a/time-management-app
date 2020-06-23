import styled, { css } from 'styled-components';

const startButton = css`
  width: 250px;
  height: 85px;

  font-family: Roboto-Regular;
  font-size: 35px;

  background-color: #ffa500;
`;

const modalButton = css`
  height: 60px;

  font-family: Roboto-Medium;
  font-size: 30px;

  padding: 0 35px;
`;

const add = css`
  ${modalButton};
  background-color: #3f37cd;
`;

const done = css`
  ${modalButton};
  background-color: #757575;

  &:hover {
    background-color: #ffa500;
    transition: background-color 0.3s ease-in-out;
  }
`;

const setStyles = (props) => {
  switch (true) {
    case props.startButton:
      return startButton;
    case props.add:
      return add;
    case props.done:
      return done;
    default:
      return null;
  }
};

export const CustomButton = styled.button`
  text-transform: uppercase;
  color: #ffffff;

  cursor: pointer;
  border: none;
  outline: none;
  border-radius: 25px;

  ${setStyles}
`;
