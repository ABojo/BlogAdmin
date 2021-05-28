const login = async (username, password) => {
  const raw = await fetch('https://odingblogapi.herokuapp.com/api/me/login', {
    method: 'POST',
    body: JSON.stringify({ username, password }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });

  const json = await raw.json();

  return json;
};

const getMyPosts = async (authToken) => {
  const raw = await fetch('https://odingblogapi.herokuapp.com/api/me/posts', {
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      Authorization: `Bearer ${authToken}`,
    },
  });

  const json = await raw.json();

  return json;
};

const API = { login, getMyPosts };

export default API;
