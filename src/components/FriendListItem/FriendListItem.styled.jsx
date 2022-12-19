import styled from 'styled-components';

export const FriendListItemStyled = styled.li`
  display: flex;
  align-items: center;
  border-radius: ${p => p.theme.radii.normal};
  padding: ${p => p.theme.space[3]}px ${p => p.theme.space[4]}px
    ${p => p.theme.space[3]}px;

  background-color: ${p => p.theme.colors.primary};
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
`;
export const Status = styled.span`
  display: block;
  width: ${p => p.theme.space[5]}px;
  height: ${p => p.theme.space[5]}px;
  margin-right: ${p => p.theme.space[6]}px;
  border-radius: ${p => p.theme.radii.round};

  background-color: ${p => {
    return p.isOnline ? p.theme.colors.statusIsOnline : p.theme.colors.status;
  }};
`;
export const Avatar = styled.img`
  width: ${p => p.theme.space[7]}px;
  height: ${p => p.theme.space[7]}px;
  margin-right: ${p => p.theme.space[6]}px;
  border-radius: ${p => p.theme.radii.big};
`;
export const Name = styled.p`
  font-size: ${p => p.theme.fontSizes.l};
`;
