import { useState } from 'react';

function useToken() {
  const [token, setToken] = useState(localStorage.getItem('authToken'));

  const saveToken = (token) => {
    localStorage.setItem('authToken', token);
    setToken(token);
  };

  return { token, setToken: saveToken };
}

export default useToken;
