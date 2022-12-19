import styled from 'styled-components';

export const FriendListItemStyled = styled.li`
  display: flex;
  align-items: center;
border-radius: ${p => p.theme.radii.normal};
  /* border: ${p => p.theme.borders.normal}; */
  padding: ${p => p.theme.space[3]}px ${p => p.theme.space[4]}px
    ${p => p.theme.space[3]}px;
box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
background-color: ${p => p.theme.colors.primary};
`;
export const Status = styled.span`
  display: block;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  /* outline: 1px solid black; */
  margin-right: 24px;
  background-color: ${p => {
  return p.isOnline ? p.theme.colors.statusIsOnline : p.theme.colors.status
  }};
`;
export const Avatar = styled.img`
  width: 60px;
  height: 60px;
  margin-right: ${p => p.theme.space[5]}px;
`;
export const Name = styled.p`
  font-size: ${p => p.theme.fontSizes.l};
`;
