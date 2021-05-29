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

const getMyPosts = async () => {
  const raw = await fetch('https://odingblogapi.herokuapp.com/api/me/posts', {
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      Authorization: `Bearer ${localStorage.getItem('authToken')}`,
    },
  });

  const json = await raw.json();

  return json;
};

const createPost = async (title, body) => {
  const raw = await fetch('https://odingblogapi.herokuapp.com/api/posts', {
    method: 'POST',
    body: JSON.stringify({ title, body, published: true }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      Authorization: `Bearer ${localStorage.getItem('authToken')}`,
    },
  });

  const json = await raw.json();

  return json;
};

const deletePost = async (postId) => {
  const raw = await fetch(
    `https://odingblogapi.herokuapp.com/api/posts/${postId}`,
    {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        Authorization: `Bearer ${localStorage.getItem('authToken')}`,
      },
    }
  );

  const json = await raw.json();

  return json;
};

const API = { login, getMyPosts, createPost, deletePost };

export default API;
