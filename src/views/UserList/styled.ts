import styled from 'styled-components';

const StyledListHeader = styled.div`
  margin-bottom: 10px;
  & > ul {
    display: flex;
    justify-content: space-between;
    > li {
      width: calc(100% / 4);
      text-align: center;
      padding: 0 10px;
      font-weight: 600;
      &:first-child {
        text-align: start;
      }
      &:last-child {
        text-align: end;
      }
    }
  }
`;

const StyledListBody = styled.ul`
  & > li {
    padding: 15px 0;
    border-bottom: 1px solid #7d60f5;
  }
`;

export { StyledListHeader, StyledListBody };
