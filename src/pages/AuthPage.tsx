import React, { useState } from 'react';
import Login from '../components/Login';
import SignUp from '../components/SignUp';

const AuthPage: React.FC = () => {
  const [login, setLogin] = useState(false);

  function changeComponent() {
    setLogin(!login);
  }

  return (
    <div className="authPage">
      {login ? (
        <Login changeComponent={changeComponent} />
      ) : (
        <SignUp changeComponent={changeComponent} />
      )}
    </div>
  );
};

export default AuthPage;
