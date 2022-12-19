import styled from 'styled-components';

export const TransactionHistoryStyled = styled.table`
  /* border: 1px solid black; */
  margin-left: auto;
  width: 700px;
     box-shadow:
  0 2.8px 2.2px rgba(0, 0, 0, 0.034),
  0 6.7px 5.3px rgba(0, 0, 0, 0.048),
  0 12.5px 10px rgba(0, 0, 0, 0.06),
  0 22.3px 17.9px rgba(0, 0, 0, 0.072),
  0 41.8px 33.4px rgba(0, 0, 0, 0.086),
  0 100px 80px rgba(0, 0, 0, 0.12);
   /* border-collapse: collapse; */
`;
export const TableHead = styled.thead`
    /* border: 1px solid black; */
    background-color: ${p => p.theme.colors.secondary};
`;
export const Title = styled.th`
height: 30px;
     /* border: 1px solid black; */
`;

export const Information = styled.td`
height: 30px;
     /* border: 1px solid black; */
     text-align: center;
     background-color: ${p => {
     return p.idx === 0 || p.idx % 2 === 0 ? p.theme.colors.table : p.theme.colors.white 
     }};
`;