import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: ${p => p.theme.space[6]}px;
  background-color: ${p => p.theme.colors.background};
`;
