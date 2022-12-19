import styled from 'styled-components';

export const FriendListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[4]}px;
  width: 300px;
  height: 587px;
  margin-top: ${p => p.theme.space[8]}px;
  margin-left: auto;
  margin-right: auto;
  border-radius: ${p => p.theme.radii.normal};

  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 12px;
    background-color: ${p => p.theme.colors.background};
  }
  &::-webkit-scrollbar-thumb {
    border-radius: ${p => p.theme.radii.normal};
    background-color: ${p => p.theme.colors.secondary};
  }
`;
