import { useState } from 'react';
import Message from './Message';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const resetScreen = () => {
    setUsername('');
    setPassword('');
    setErrorMessage('');
  };

  const login = async (username, password) => {
    const raw = await fetch('https://odingblogapi.herokuapp.com/api/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const json = await raw.json();
    return json;
  };

  const onClickLogin = async () => {
    if (username && password) {
      const response = await login(username, password);

      if (response.status === 'failure') {
        setErrorMessage('Sorry, please enter valid login information!');
      } else {
        resetScreen();
      }
    } else {
      setErrorMessage('Sorry, you must fill out both fields first!');
    }
  };

  return (
    <div className="w-full h-screen bg-blue-400">
      <div className="login-form max-w-sm w-11/12">
        {errorMessage && <Message text={errorMessage} success={false} />}
        <div className="inline-block p-10 w-full shadow-lg rounded bg-white ">
          <h1 className="text-center text-blue-500 text-5xl mb-5">
            <i className="fas fa-lock"></i>
          </h1>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.currentTarget.value)}
            className="p-3 bg-gray-100 block rounded w-full mb-5 text-gray-900 placeholder-gray-600"
          />
          <input
            type="text"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
            className="p-3 bg-gray-100 block rounded w-full mb-5 text-gray-900 placeholder-gray-600"
          />
          <button
            onClick={onClickLogin}
            className="bg-blue-500 hover:bg-blue-600 transition duration-200 font-bold p-3 rounded w-full text-white"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
