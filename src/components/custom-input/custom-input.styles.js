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

const setStyles = (props) => {
  return props.searchInput ? searchInput : addModalInput;
};

export const CustomInput = styled.input`
  height: 30px;
  outline: none;
  border-radius: 25px;
  padding: 25px;
  border: none;
  background-color: red;

  font-family: RobotoCondensed-Light;
  font-size: 25.5px;
  text-align: left;
  ${setStyles}
`;
