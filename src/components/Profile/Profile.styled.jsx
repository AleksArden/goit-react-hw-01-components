import styled from 'styled-components';

export const ProfileStyled = styled.div`
     box-shadow:
  0 2.8px 2.2px rgba(0, 0, 0, 0.034),
  0 6.7px 5.3px rgba(0, 0, 0, 0.048),
  0 12.5px 10px rgba(0, 0, 0, 0.06),
  0 22.3px 17.9px rgba(0, 0, 0, 0.072),
  0 41.8px 33.4px rgba(0, 0, 0, 0.086),
  0 100px 80px rgba(0, 0, 0, 0.12)
;
`;
export const Description = styled.div`
 background-color: ${p => p.theme.colors.white};
 text-align: center;
 padding: ${p => p.theme.space[6]}px;
   border: ${p => p.theme.borders.normal};
  border-color: ${p => p.theme.colors.muted};
  
`;

export const Avatar = styled.img`
  width: 150px;  
  margin-left: auto;
  margin-right: auto;
  margin-bottom: ${p => p.theme.space[6]}px;
  /* border-radius: ${p => p.theme.radii.round}; */
`;
export const Name = styled.p`
color: ${p => p.theme.colors.black};
  font-weight: ${p => p.theme.fontWeights.bold};
  margin-bottom: ${p => p.theme.space[4]}px;
`;
export const Tag = styled.p`
   margin-bottom: ${p => p.theme.space[4]}px;
`;
export const Stats = styled.ul`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #f0f0eb;

`;
export const StatsItems = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-basis: calc(100% / 3);
  border: ${p => p.theme.borders.normal};
  border-color: ${p => p.theme.colors.muted};
  padding: ${p => p.theme.space[5]}px 0 ${p => p.theme.space[5]}px;
`;

export const Label = styled.span`
    margin-bottom: ${p => p.theme.space[3]}px;
`;
export const Quantity = styled.span`
    color: ${p => p.theme.colors.black};
`;