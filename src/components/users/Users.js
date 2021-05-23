import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import UserItem from './UserItem';
import Spinner from "../layouts/Spinner";
import GithubContext from '../../context/github/githubContext';

const Users = ({ }) => {

  const githubContext = useContext(GithubContext);

  const { loading, users } = githubContext;

  if (loading) {
    return <Spinner />
  }
  else {
    return (
      <div style={userStyle}>
        {users.map(user => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    )
  }
}


Users.propTypes = {
  user: PropTypes.array,
  loading: PropTypes.bool.isRequired,
}

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
}

export default Users
