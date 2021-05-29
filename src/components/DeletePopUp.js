import API from '../utils/API';
import Loader from './Loader';
import Message from './Message';
import { useState } from 'react';

function DeletePopUp(props) {
  const { id, title, hidePopUp, posts, setPosts } = props;
  const [isLoading, setIsLoading] = useState(false);
  const [popUp, setPopUp] = useState({ message: null, success: null });

  const onClickDelete = async () => {
    setIsLoading(true);
    const json = await API.deletePost(id);
    setIsLoading(false);

    if (json.status === 'failure') {
      setPopUp({
        message: 'Sorry, there was a problem deleting your post!',
        success: false,
      });
    } else {
      setPosts(posts.filter((post) => post._id !== id));
      setPopUp({
        message: 'Your post has been deleted!',
        success: true,
      });
    }
  };

  const disabledBtn = 'bg-gray-100 text-gray-400 cursor-default';
  const activeBtn =
    'bg-red-100 text-red-900 hover:bg-red-200 transition duration-200';

  return (
    <div className="fixed h-screen w-screen bg-opacity-40 bg-black top-0 left-0 z-10">
      <div className="rounded p-5 max-w-3xl w-11/12 bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        {isLoading && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Loader />
          </div>
        )}
        {popUp.message ? (
          <Message text={popUp.message} success={popUp.success} />
        ) : (
          <h1 className="text-xl mb-5 border-gray-200 border-b pb-5">
            Are you sure you want to delete {title}?
          </h1>
        )}
        <div className="ml-auto block w-max	">
          <button
            onClick={hidePopUp}
            className="hover:cursor-pointer mr-3 p-3 border text-gray-500 border-gray-200 rounded"
          >
            Close
          </button>
          <button
            onClick={onClickDelete}
            className={`${
              popUp.success ? disabledBtn : activeBtn
            } p-3 font-bold rounded`}
            disabled={popUp.success}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeletePopUp;
