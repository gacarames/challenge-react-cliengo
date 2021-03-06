import styled from "styled-components";

const StyledUser = styled("div")`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;

  > span {
    width: calc(100% / 5);
    text-align: center;
    padding: 0 10px;
    &:first-child {
      text-align: start;
    }
    &:last-child {
      text-align: end;
    }
  }
`;
export default StyledUser;
