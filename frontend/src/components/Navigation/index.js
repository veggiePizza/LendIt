import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user);

  return (
    <div className='nav'>
      {isLoaded && (<ProfileButton classsName = "menuButton" user={sessionUser} /> )}
    </div>
  );
}

export default Navigation;