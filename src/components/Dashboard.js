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
    <div className="px-5 max-w-5xl w-11/12 mx-auto ">
      <h1 className="text-2xl font-bold mb-10 block">
        Your Posts ({posts && posts.length})
      </h1>
      {posts &&
        posts
          .map((post, i) => {
            return (
              <div className="mb-12 p-8 bg-blue-50 rounded relative">
                <h1 className="text-2xl font-bold mb-3">{post.title}</h1>
                <p className="text-gray-400">
                  {`${
                    post.body.length > 200 ? post.body.slice(0, 200) : post.body
                  }...`}
                </p>
                <div className="bg-white inline-block p-3 rounded-full shadow-md text-md absolute bubble">
                  <h1 className="text-blue-500">
                    <i className="fas fa-comment mr-1"></i>
                    {post.comments.length}
                  </h1>
                </div>

                <div className="mt-3">
                  <a
                    href="/"
                    className="text-yellow-900 bg-yellow-100 hover:bg-yellow-200 transition duration-200 px-4 py-2 rounded font-bold inline-block"
                  >
                    Edit
                  </a>

                  <a href="/" className="text-gray-500 ml-3">
                    Delete
                  </a>
                </div>
              </div>
            );
          })
          .reverse()}
    </div>
  );
}

export default Dashboard;
