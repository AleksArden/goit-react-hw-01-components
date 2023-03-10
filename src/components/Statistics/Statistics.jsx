import PropTypes from 'prop-types';
import {
  StatisticsStyled,
  Container,
  Title,
  StatList,
  Item,
  Label,
} from './Statistics.styled';
import { createRandomColors } from 'assets/createRandomColor';
import colors from 'assets/colors.json';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsStyled>
      <Container>
        {title && <Title>{title}</Title>}
        <StatList>
          {stats.map(({ id, label, percentage }) => (
            <Item
              key={id}
                  style={{ backgroundColor: createRandomColors(colors) }}
            >
              <Label>{label}</Label>
              <span>{percentage}</span>
            </Item>
          ))}
        </StatList>
      </Container>
    </StatisticsStyled>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
  colors: PropTypes.arrayOf(PropTypes.string.isRequired),
};
