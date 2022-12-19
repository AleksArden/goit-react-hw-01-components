import PropTypes from 'prop-types';
import {
  ProfileStyled,
  Container,
  Description,
  Avatar,
  Name,
  Tag,
  Stats,
  StatsItems,
  Label,
  Quantity,
} from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <ProfileStyled>
      <Container>
        <Description>
          <Avatar src={avatar} alt="User avatar" />
          <Name>{username}</Name>
          <Tag>{tag}</Tag>
          <p>{location}</p>
        </Description>

        <Stats>
          <StatsItems>
            <Label>Followers</Label>
            <Quantity>{followers}</Quantity>
          </StatsItems>
          <StatsItems>
            <Label>Views</Label>
            <Quantity>{views}</Quantity>
          </StatsItems>
          <StatsItems>
            <Label>Likes</Label>
            <Quantity>{likes}</Quantity>
          </StatsItems>
        </Stats>
      </Container>
    </ProfileStyled>
  );
};

Profile.propTypes = {
  user: PropTypes.exact({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    
    stats: PropTypes.exact({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  }),
};
