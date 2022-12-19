import styled from 'styled-components';

export const StatisticsStyled = styled.section`
display: flex;
align-items: center;
justify-content: center;
    width: 730px;
/* background-color: ${p => p.theme.colors.muted}; */
/* padding: ${p => p.theme.space[6]}px; */

`;
export const Container = styled.div`
display: flex;
width: 300px;
    background-color: ${p => p.theme.colors.white};
     box-shadow:
  0 2.8px 2.2px rgba(0, 0, 0, 0.034),
  0 6.7px 5.3px rgba(0, 0, 0, 0.048),
  0 12.5px 10px rgba(0, 0, 0, 0.06),
  0 22.3px 17.9px rgba(0, 0, 0, 0.072),
  0 41.8px 33.4px rgba(0, 0, 0, 0.086),
  0 100px 80px rgba(0, 0, 0, 0.12);
`;
export const Title = styled.h2`
width: 150px;
display: flex;
text-align: center;
align-items: center;
  /* padding: ${p => p.theme.space[5]}px 0 ${p => p.theme.space[5]}px; */
 text-transform: uppercase;
 color: ${p => p.theme.colors.muted};
 border: ${p => p.theme.borders.normal};
  border-color: ${p => p.theme.colors.background};
  background-color: ${p => p.theme.colors.primary};

  
`;
export const StatList = styled.ul`
flex-grow: 1;

    display: flex;
    flex-direction: column;
`;
export const Item = styled.li`
  flex-basis: calc(100% / 4);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
border: ${p => p.theme.borders.normal};
  border-color: ${p => p.theme.colors.background};
  padding: ${p => p.theme.space[4]}px 0 ${p => p.theme.space[4]}px;
  font-size: ${p => p.theme.fontSizes.l};
  color: ${p => p.theme.colors.white};
`;
export const Label = styled.span`
  margin-bottom: ${p => p.theme.space[3]}px;  
`;
export const Percentage = styled.span`
  font-weight: ${p => p.theme.fontWeights.bold};
`;