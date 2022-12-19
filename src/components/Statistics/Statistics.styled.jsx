import styled from 'styled-components';

export const StatisticsStyled = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 730px;
`;
export const Container = styled.div`
  display: flex;
  width: 300px;

  background-color: ${p => p.theme.colors.primary};
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
`;
export const Title = styled.h2`
  display: flex;
  text-align: center;
  align-items: center;
  width: 150px;
  border-right: 2px solid #b0c4de;

  border-color: ${p => p.theme.colors.background};

  color: ${p => p.theme.colors.textSecondary};
  text-transform: uppercase;
`;
export const StatList = styled.ul`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;
export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${p => p.theme.space[4]}px 0 ${p => p.theme.space[4]}px;

  border-color: ${p => p.theme.colors.background};
  border-bottom: ${p => p.theme.borders.normal};
  border-top: ${p => p.theme.borders.normal};
  color: ${p => p.theme.colors.white};
  font-size: ${p => p.theme.fontSizes.l};
  &:nth-child(1) {
    border-bottom: ${p => p.theme.borders.normal};
    border-top: none;
  }
  &:last-child {
    border-top: ${p => p.theme.borders.normal};
    border-bottom: none;
  }
`;
export const Label = styled.span`
  margin-bottom: ${p => p.theme.space[3]}px;
`;
