import styled from "styled-components";

const StyledLabel = styled.label`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  display: flex;
  align-items: center;
  color: #62595d;
  margin-bottom: 8px;
`;

const StyledInput = styled.input.attrs({ type: "text" })`
  border: 1px solid #bfbbbd;
  box-sizing: border-box;
  padding: 8px;
  border-radius: 8px;
  width: 100%;
  margin-bottom: 30px;
  font-size: 16px;
  line-height: 24px;
`;

const StyledSubmit = styled.input.attrs({ type: "submit" })`
  border: none;
  background: #7d60f5;
  border-radius: 8px;
  padding: 8px 16px;
  font-weight: bold;
  color: #ffffff;

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

const StyledErrorDisplay = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;

  & .error-message {
    color: #dc3545;
    margin-bottom: 4px;
  }
`;

const StyledForm = styled("form")`
  display: contents;
`;

export {
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledSubmit,
  StyledErrorDisplay,
};
