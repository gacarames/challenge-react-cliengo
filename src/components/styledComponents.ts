import styled from 'styled-components';

const StyledButton = styled.button`
  color: #fff;
  font-weight: bold;
  padding: 8px 16px;
  border: none;
  border-radius: 8px;

  &:focus {
    box-shadow: 0 0 0 0.25rem rgb(225 83 97 / 50%);
  }
`;

const StyledPrimaryButton = styled(StyledButton)`
  background-color: #7d60f5;
  border-color: #7d60f5;

  &:hover {
    background-color: #8946a6;
    border-color: #b02a37;
  }

  &:focus {
    background-color: #bb2d3b;
    border-color: #b02a37;
    box-shadow: 0 0 0 0.25rem rgb(225 83 97 / 50%);
  }

  &:active {
    background-color: #8946a6;
    border-color: #b02a37;
  }
`;

const StyledDeleteButton = styled(StyledButton)`
  border-color: #dc3545;
  background-color: #dc3545;
  background: #ef5350;

  &:hover {
    background-color: #bb2d3b;
    border-color: #b02a37;
  }

  &:focus {
    background-color: #bb2d3b;
    border-color: #b02a37;
    box-shadow: 0 0 0 0.25rem rgb(225 83 97 / 50%);
  }

  &:active {
    background-color: #b02a37;
    border-color: #a52834;
  }
`;

const StyledHeading = styled('h2')`
  margin: 0;
  margin-bottom: 30px;
`;

const StyledInputEdit = styled.input.attrs({ type: 'text' })`
  border: 1px solid #bfbbbd;
  box-sizing: border-box;
  padding: 8px;
  border-radius: 8px;
  margin: 0px 10px;
  font-size: 16px;
  line-height: 24px;
`;

export {
  StyledPrimaryButton,
  StyledDeleteButton,
  StyledHeading,
  StyledInputEdit
};
