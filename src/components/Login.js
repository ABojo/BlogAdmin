import { useState } from 'react';
import Message from './Message';
import Loader from './Loader';
import API from '../utils/API';
import onEnter from '../utils/onEnter';

function Login(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const onClickLogin = async () => {
    setErrorMessage('');
    if (username && password) {
      setIsLoading(true);
      const res = await API.login(username, password);

      if (res.status === 'failure') {
        setIsLoading(false);
        setErrorMessage('Sorry, please enter valid login information!');
      } else {
        const jwt = res.data.token;
        props.setToken(jwt);
      }
    } else {
      setErrorMessage('Sorry, you must fill out both fields first!');
    }
  };

  return (
    <div className="w-full h-screen bg-blue-400">
      <div className="login-form max-w-sm w-11/12">
        <div className={`p-5 w-full bg-yellow-100 rounded mb-10 wobble`}>
          <h1 className={`text-yellow-900 text-sm mb-3`}>
            You can test this app with the guest account
          </h1>

          <p className="text-yellow-900 text-sm">
            Username:
            <span className=" text-yellow-900 font-bold text-lg"> Guest</span>
          </p>
          <p className="text-yellow-900 text-sm">
            Password:
            <span className=" text-yellow-900 font-bold text-lg">
              {' '}
              password
            </span>
          </p>
        </div>
        {errorMessage && <Message text={errorMessage} success={false} />}
        <div className="inline-block p-10 w-full shadow-lg rounded bg-white ">
          {isLoading ? (
            <Loader />
          ) : (
            <h1 className="text-center text-blue-500 text-5xl mb-5">
              <i className="fas fa-lock"></i>
            </h1>
          )}
          <input
            type="text"
            placeholder="Username"
            value={username}
            onKeyPress={(e) => onEnter(e, onClickLogin)}
            onChange={(e) => setUsername(e.currentTarget.value)}
            className="p-3 bg-gray-100 block rounded w-full mb-5 text-gray-900 placeholder-gray-600"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onKeyPress={(e) => onEnter(e, onClickLogin)}
            onChange={(e) => setPassword(e.currentTarget.value)}
            className="p-3 bg-gray-100 block rounded w-full mb-5 text-gray-900 placeholder-gray-600"
          />
          <button
            onClick={onClickLogin}
            className={`${
              isLoading
                ? 'bg-blue-200 cursor-default '
                : 'bg-blue-500 hover:bg-blue-600'
            }  transition duration-200 font-bold p-3 rounded w-full text-white`}
            disabled={isLoading}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
