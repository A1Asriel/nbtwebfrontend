import React, { useState, useEffect } from 'react';
import { fetchData } from '../services/api';
import Cookies from 'js-cookie';
import LoginForm from '../components/loginForm';

const AuthorizationPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  useEffect(() => {
    checkLoginStatus();
  }, []);

  const checkLoginStatus = async () => {
    const loggedInUser = Cookies.get('loggedInUser');
    const loggedInPassword = Cookies.get('loggedInPassword');
    const users = await fetchData('users');
    users.forEach(async userId => {
      const user = await fetchData("users/" + userId);
      if (user.login === loggedInUser && user.password === loggedInPassword) {
        setIsLoggedIn(true);
        setUsername(loggedInUser);
        return;
      }
    });
  };

  const handleLogin = (loggedInUsername, loggedInPassword) => {
    Cookies.set('loggedInUser', loggedInUsername, { expires: 7 });
    Cookies.set('loggedInPassword', loggedInPassword, { expires: 7 });
    setIsLoggedIn(true);
    setUsername(loggedInUsername);
  };

  const handleLogout = () => {
    Cookies.remove('loggedInUser');
    Cookies.remove('loggedInPassword');
    setIsLoggedIn(false);
    setUsername('');
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h2>Welcome, {username}!</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <LoginForm handleLogin={handleLogin} />
      )}
    </div>
  );
};

export default AuthorizationPage;
