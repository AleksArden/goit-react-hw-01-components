import { Profile } from 'components/Profile/Profile';
import PropTypes from 'prop-types';
import {BoxProfileStyled } from './BoxProfile.styled'

export const BoxProfile = ({ user }) => {
    const { username, tag, location, avatar, stats: { followers, views, likes } } = user;
    return (
        <BoxProfileStyled>
             <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        followers={followers}
        views={views}
        likes={likes}
      />
        </BoxProfileStyled>
    )
}

BoxProfile.propTypes = {
    user: PropTypes.exact({
        username: PropTypes.string.isRequired,
        tag: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        stats: PropTypes.exact({
            followers: PropTypes.number.isRequired,
            views: PropTypes.number.isRequired,
            likes: PropTypes.number.isRequired,
        })
    })
}