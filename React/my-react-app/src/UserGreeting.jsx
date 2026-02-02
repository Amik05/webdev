function UserGreeting({ isLoggedIn, username }) {
  const welcomemsg = <h2 className="welcome-msg">Welcome {username}</h2>;
  const loginprompt = <h2 className="login-prompt">Please log in.</h2>;

  return isLoggedIn ? welcomemsg : loginprompt;
}

export default UserGreeting;
