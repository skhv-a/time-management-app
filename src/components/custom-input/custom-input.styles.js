import styled, { css } from 'styled-components';

const searchInput = css`
  max-width: 400px;
  background-color: white;
  color: #595959;
`;

const addModalInput = css`
  width: 80%;
  color: #404040;
  background-color: #d5d5d5;
  margin-bottom: 50px;
  overflow-wrap: break-word;
`;

const editInput = css`
  ${addModalInput}
  font-family: Roboto-Regular;
  padding: 30px 25px;
  &:before {
    font-family: RobotoCondensed-Light;

    display: block;
    width: 85px;

    margin-right: 25px;
    padding: 15px;

    background-color: #3b3dc5;
    color: white;

    content: 'Title:';
  }
`;

const setStyles = (props) => {
  switch (true) {
    case props.searchInput:
      return searchInput;
    case props.addModalInput:
      return addModalInput;
    case props.editInput:
      return editInput;
    default:
      return null;
  }
};

export const CustomInput = styled.input`
  height: 30px;
  outline: none;
  border-radius: 25px;
  padding: 25px;
  border: none;

  font-family: RobotoCondensed-Light;
  font-size: 25.5px;
  text-align: left;
  ${setStyles};
`;
