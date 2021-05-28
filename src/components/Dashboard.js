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
    <div className="px-5 max-w-lg w-11/12 mx-auto">
      <h1 className="text-3xl mb-5 block">
        Your Posts ({posts && posts.length})
      </h1>
      {posts &&
        posts
          .map((post, i) => {
            return (
              <div className="mb-5 bg-gray-50 p-5 rounded">
                <h1 className="text-xl inline font-bold">{post.title}</h1>
                <h1>
                  <i className="fas fa-comment text-blue-100"></i>{' '}
                  {post.comments.length}
                </h1>
                <h1>
                  <i
                    class="fa fa-calendar text-blue-100"
                    aria-hidden="true"
                  ></i>
                  {post.timestamp}
                </h1>
                <a
                  href="/"
                  className="text-yellow-900 bg-yellow-100 px-4 py-2 rounded font-bold inline-block"
                >
                  Edit
                </a>

                <a href="/" className="text-gray-500 ml-3">
                  Delete
                </a>
              </div>
            );
          })
          .reverse()}
    </div>
  );
}

export default Dashboard;
