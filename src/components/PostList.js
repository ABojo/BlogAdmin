import API from '../utils/API';
import { useState, useEffect } from 'react';
import Post from './Post';
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
          .map((post) => (
            <Post
              post={post}
              showDeletePopUp={showDeletePopUp}
              key={post._id}
            />
          ))
          .reverse()}
    </div>
  );
}

export default PostList;
