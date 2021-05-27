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

const API = { login };

export default API;
