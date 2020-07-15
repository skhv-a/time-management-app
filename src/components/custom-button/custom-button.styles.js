import styled, { css } from 'styled-components';

const startButton = css`
  width: 250px;
  height: 85px;

  font-family: Roboto-Regular;
  font-size: 35px;

  background-color: #ffa500;
`;

const modalButton = css`
  min-height: 60px;

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

const remove = css`
  ${done};
  &:hover {
    background-color: #ff0000;
  }
`;

const save = css`
  ${done};
  &:hover {
    background-color: #03ac13;
  }
`;

const mobile = css`
  ${startButton};
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 150px;

  position: absolute;
  bottom: 0;

  border-radius: 25px 25px 0 0;

  background-color: #242582;
`;

const setStyles = (props) => {
  switch (true) {
    case props.startButton:
      if (props.isMobile) return mobile;

      return startButton;
    case props.add:
      return add;
    case props.done:
      return done;
    case props.remove:
      return remove;
    case props.save:
      return save;
    default:
      return null;
  }
};

//Default custom button's styles

export const CustomButton = styled.button`
  text-transform: uppercase;
  color: #ffffff;

  cursor: pointer;
  border: none;
  outline: none;
  border-radius: 25px;
  opacity: 1;

  ${setStyles}
  &:disabled {
    opacity: 0.7;
  }
  transition: opacity 0.3s;
`;
