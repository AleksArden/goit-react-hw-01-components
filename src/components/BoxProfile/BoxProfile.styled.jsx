import styled from 'styled-components';

export const BoxProfileStyled = styled.div`
width: 700px;
background-color: ${p => p.theme.colors.muted};
margin-left: auto;
margin-right: auto;
padding: ${p => p.theme.space[7]}px;
 font-size: ${p => p.theme.fontSizes.l};
 color: ${p => p.theme.colors.muted};
`;