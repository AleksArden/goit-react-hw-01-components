import styled from 'styled-components';

export const ProfileStyled = styled.div`
  width: 700px;
  padding: ${p => p.theme.space[8]}px;

  color: ${p => p.theme.colors.textSecondary};
  font-size: ${p => p.theme.fontSizes.l};
`;
export const Container = styled.div`
  border-radius: ${p => p.theme.radii.big};
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
`;
export const Description = styled.div`
  padding: ${p => p.theme.space[7]}px;
  border-top: ${p => p.theme.borders.normal};
  border-bottom: ${p => p.theme.borders.normal};
  border-top-left-radius: ${p => p.theme.radii.big};
  border-top-right-radius: ${p => p.theme.radii.big};

  border-color: ${p => p.theme.colors.background};
  background-color: ${p => p.theme.colors.primary};
  text-align: center;
`;

export const Avatar = styled.img`
  width: 150px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: ${p => p.theme.space[7]}px;
  border-radius: ${p => p.theme.radii.round};
`;
export const Name = styled.p`
  margin-bottom: ${p => p.theme.space[4]}px;

  color: ${p => p.theme.colors.text};
  font-weight: ${p => p.theme.fontWeights.bold};
`;
export const Tag = styled.p`
  margin-bottom: ${p => p.theme.space[4]}px;
`;
export const Stats = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom-left-radius: ${p => p.theme.radii.big};
  border-bottom-right-radius: ${p => p.theme.radii.big};

  background-color: ${p => p.theme.colors.secondary};
`;
export const StatsItems = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-basis: calc(100% / 3);
  padding: ${p => p.theme.space[6]}px 0 ${p => p.theme.space[6]}px;
  border-top: ${p => p.theme.borders.normal};
  border-left: ${p => p.theme.borders.normal};
  border-right: ${p => p.theme.borders.normal};
  border-color: ${p => p.theme.colors.background};
  &:nth-child(1) {
    border-left: none;
  }
  &:last-child {
    border-right: none;
  }
`;
export const Label = styled.span`
  margin-bottom: ${p => p.theme.space[3]}px;
`;
export const Quantity = styled.span`
  color: ${p => p.theme.colors.black};
`;
