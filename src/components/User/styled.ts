import styled from 'styled-components';
import User from './User';

const StyledUser = styled('div')`
  display: flex;
  flex-flow: row;
  justify-content: space-between;

  > span {
    width: calc(100% / 4);
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
