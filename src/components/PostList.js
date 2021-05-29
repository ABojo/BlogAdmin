import API from '../utils/API';
import { useState, useEffect } from 'react';
import Loader from './Loader';
import DeletePopUp from './DeletePopUp';

function PostList(props) {
  const [posts, setPosts] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [deletePopUp, setDeletePopUp] = useState({
    show: false,
    id: null,
    title: null,
  });

  const showDeletePopUp = (id, title) => {
    setDeletePopUp({ show: true, id, title });
  };

  const hideDeletePopUp = () => {
    setDeletePopUp({ show: false, id: null, title: null });
  };

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const json = await API.getMyPosts();
      setIsLoading(false);

      if (json.data.message === 'Sorry, please login again!') {
        props.setToken('');
      } else {
        setPosts(json.data.posts);
      }
    })();
  }, [props]);

  return (
    <div className="px-5 max-w-3xl w-11/12 mx-auto ">
      {deletePopUp.show && (
        <DeletePopUp
          id={deletePopUp.id}
          title={deletePopUp.title}
          hidePopUp={hideDeletePopUp}
          posts={posts}
          setPosts={setPosts}
        />
      )}
      {isLoading && <Loader />}
      {posts && !posts.length && (
        <h1 className="text-center text-3xl font-bold">You have no posts!</h1>
      )}
      {posts &&
        posts
          .map((post) => {
            return (
              <div
                className="mb-10 p-8 bg-blue-50 rounded relative"
                key={post._id}
              >
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

                  <button
                    onClick={() => showDeletePopUp(post._id, post.title)}
                    className="hover:cursor-pointer ml-3 px-4 py-2 border text-gray-500 border-gray-200 rounded"
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })
          .reverse()}
    </div>
  );
}

export default PostList;
