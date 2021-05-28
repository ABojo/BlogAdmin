import API from '../utils/API';
import { useState, useEffect } from 'react';

function Dashboard() {
  const [posts, setPosts] = useState('');

  useEffect(() => {
    (async () => {
      const json = await API.getMyPosts();
      setPosts(json.data.posts);
    })();
  }, []);

  return <h1>Dashboard</h1>;
}

export default Dashboard;
