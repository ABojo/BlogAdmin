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

  return (
    <div className="px-5">
      <h1 className="text-3xl font-bold mb-5 block">
        Your posts ({posts && posts.length})
      </h1>
      {posts &&
        posts.map((post, i) => {
          return (
            <div className="mb-5">
              <h1 className="text-xl inline">
                {i + 1}. {post.title}
              </h1>
              <a
                href="/"
                className="text-yellow-900 bg-yellow-100 px-4 py-2 rounded font-bold ml-3"
              >
                Edit
              </a>

              <a href="/" className="text-gray-500 ml-3">
                Delete
              </a>
            </div>
          );
        })}
    </div>
  );
}

export default Dashboard;
