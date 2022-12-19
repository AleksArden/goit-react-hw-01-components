import styled from 'styled-components';

export const TransactionHistoryStyled = styled.table`
  width: 700px;
  margin-left: auto;
  border-radius: ${p => p.theme.radii.big};
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
`;
export const TableHead = styled.thead`
  background-color: ${p => p.theme.colors.secondary};
`;
export const Title = styled.th`
  height: 30px;
  &:nth-child(1) {
    border-top-left-radius: ${p => p.theme.radii.big};
  }
  &:last-child {
    border-top-right-radius: ${p => p.theme.radii.big};
  }
`;
export const Item = styled.tr`
  &:last-child td:nth-child(1) {
    border-bottom-left-radius: ${p => p.theme.radii.big};
  }
  &:last-child td:last-child {
    border-bottom-right-radius: ${p => p.theme.radii.big};
  }
`;
export const Information = styled.td`
  height: 30px;
  text-align: center;
  background-color: ${p => {
    return p.idx === 0 || p.idx % 2 === 0
      ? p.theme.colors.table
      : p.theme.colors.white;
  }};
`;
