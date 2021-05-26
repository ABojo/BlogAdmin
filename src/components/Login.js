import { useState } from 'react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="w-full h-screen bg-blue-400">
      <div className="inline-block p-10 max-w-sm w-11/12 login-form shadow-lg rounded bg-white ">
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
        <button className="bg-blue-500 hover:bg-blue-600 transition duration-200 font-bold p-3 rounded w-full text-white">
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
