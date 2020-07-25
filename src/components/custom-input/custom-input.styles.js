import styled, { css } from 'styled-components';
import TextareaAutosize from 'react-autosize-textarea';

const customInput = css`
  height: 30px;
  outline: none;
  border-radius: 25px;
  padding: 15px;
  border: none;
  resize: none;

  font-family: RobotoCondensed-Light;
  font-size: 25.5px;
  text-align: left;
`;

export const StyledInput = styled.input`
  ${customInput}
  max-width: 400px;
  background-color: white;
  color: #595959;
  padding: 25px;
`;

export const ModalField = styled(TextareaAutosize)`
  ${customInput}
  width: 80%;
  color: #404040;
  background-color: #d5d5d5;
  margin-bottom: 50px;

  overflow-wrap: break-word;

  outline: none;
  border: none;
  resize: none;
`;
