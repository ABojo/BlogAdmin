import React, { useState } from 'react';
import API from '../utils/API';
import Loader from './Loader';
import Message from './Message';

function PostEditForm(props) {
  const { post, setPostTitle, setPostBody, toggleMode } = props;

  const [titleInput, setTitleInput] = useState(post.title);
  const [bodyInput, setBodyInput] = useState(post.body);

  const [isLoading, setIsLoading] = useState(false);
  const [popUp, setPopUp] = useState({ message: null, success: null });

  const clearPopUp = () => {
    setPopUp({ message: null, success: null });
  };

  const onClickSave = async () => {
    clearPopUp();
    setIsLoading(true);
    const json = await API.editPost(post._id, {
      title: titleInput,
      body: bodyInput,
    });
    setIsLoading(false);

    if (json.status === 'failure') {
      setPopUp({
        message: 'Sorry, there was a problem updating your post!',
        success: false,
      });
    } else {
      setPostTitle(titleInput);
      setPostBody(bodyInput);

      setPopUp({
        message: 'You have succesfully edited your post!',
        success: true,
      });
    }
  };

  const disabledBtn = 'bg-gray-100 text-gray-400 cursor-default';
  const activeBtn =
    'text-green-900 bg-green-100 hover:bg-green-200 transition duration-200';

  return (
    <React.Fragment>
      {popUp.message && (
        <Message text={popUp.message} success={popUp.success} />
      )}
      {isLoading && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Loader />
        </div>
      )}
      <input
        type="text"
        placeholder="Title"
        onChange={(e) => {
          setTitleInput(e.currentTarget.value);
        }}
        value={titleInput}
        className="text-md font-bold mb-3 p-3 rounded w-full"
      />
      <textarea
        placeholder="Title"
        onChange={(e) => {
          setBodyInput(e.currentTarget.value);
        }}
        value={bodyInput}
        className="text-gray-400 p-3 rounded w-full resize-none h-64"
      />
      <div className="mt-3">
        <button
          disabled={isLoading}
          onClick={() => {
            clearPopUp();
            toggleMode();
          }}
          className="hover:cursor-pointer mr-3 px-4 py-2 border text-gray-500 border-gray-200 rounded hover:bg-blue-100 transition duration-200"
        >
          Cancel
        </button>

        <button
          disabled={isLoading}
          onClick={onClickSave}
          className={`${
            isLoading ? disabledBtn : activeBtn
          } px-4 py-2 rounded font-bold inline-block shadow`}
        >
          Save
        </button>
      </div>
    </React.Fragment>
  );
}

export default PostEditForm;
