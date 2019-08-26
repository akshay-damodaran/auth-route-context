import React, { useContext } from 'react'
import { Link } from 'react-router-dom';

import UserContext from '../context/UserContext';

const Home = () => {
  const user = useContext(UserContext);

  const onLogoutClick = () => {
    user.dispatch({
      type: 'logout',
    });
  }

  return (
    <div>
      <p>Hey {user.state.isAuthenticated? user.state.name : 'there'}!</p>
      {user.state.isAuthenticated ?
        <button onClick={() => onLogoutClick()}>Logout</button> :
        <button><Link to='/login'>Click to login</Link></button>
      }
    </div>
  )
}

export default Home;
