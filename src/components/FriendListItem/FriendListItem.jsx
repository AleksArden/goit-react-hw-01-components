import PropTypes from 'prop-types';
import { FriendListItemStyled, Status, Avatar, Name} from './FriendListItem.styled';

export const FriendListItem = ({isOnline, avatar, name}) => {
    return (
<FriendListItemStyled>
        <Status isOnline={isOnline}></Status>
  <Avatar src={avatar} alt="User avatar" width="48" />
        <Name>{ name}</Name>
</FriendListItemStyled>
    )
}

FriendListItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}


















