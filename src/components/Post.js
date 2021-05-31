import React, { useState } from 'react';
import API from '../utils/API';
import Loader from './Loader';
import Message from './Message';

function Post(props) {
  const { post, showDeletePopUp } = props;
  const [editMode, setEditMode] = useState(false);

  //Used to set the post info while not in edit mode if the user successfully edits the post
  const [postTitle, setPostTitle] = useState(post.title);
  const [postBody, setPostBody] = useState(post.body);

  //tracks the inputs while in edit mode
  const [titleInput, setTitleInput] = useState(post.title);
  const [bodyInput, setBodyInput] = useState(post.body);

  //Used to show a loader while a request is pending
  const [isLoading, setIsLoading] = useState(false);

  //Shows the user a feedback message based on the success/failure of their action
  const [popUp, setPopUp] = useState({ message: null, success: null });

  const clearPopUp = () => {
    setPopUp({ message: null, success: null });
  };

  const toggleEditMode = () => {
    setEditMode(!editMode);
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

  const normalMarkup = (
    <React.Fragment>
      <a
        target="_blank"
        rel="noreferrer"
        href={`https://abojo.github.io/BlogClient/posts/${post._id}`}
        className="text-2xl font-bold mb-3 hover:opacity-60 transition duration-200"
      >
        {postTitle}
        <i className="text-lg text-blue-500 ml-3 fas fa-external-link-alt"></i>
      </a>
      <p className="text-gray-400">
        {`${postBody.length > 200 ? postBody.slice(0, 200) : postBody}...`}
      </p>
      <div className="bg-white inline-block p-3 rounded-full shadow-md text-md absolute bubble">
        <h1 className="text-blue-500">
          <i className="fas fa-comment mr-1"></i>
          {post.comments.length}
        </h1>
      </div>

      <div className="mt-3">
        <button
          onClick={toggleEditMode}
          className="text-yellow-900 bg-yellow-100 hover:bg-yellow-200 transition duration-200 px-4 py-2 rounded font-bold inline-block"
        >
          Edit
        </button>

        <button
          onClick={() => showDeletePopUp(post._id, post.title)}
          className="hover:cursor-pointer ml-3 px-4 py-2 border text-gray-500 border-gray-200 rounded hover:bg-blue-100 transition duration-200"
        >
          Delete
        </button>
      </div>
    </React.Fragment>
  );

  const editModeMarkup = (
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
      <div className="bg-white inline-block p-3 rounded-full shadow-md text-md absolute bubble">
        <h1 className="text-blue-500">
          <i className="fas fa-comment mr-1"></i>
          {post.comments.length}
        </h1>
      </div>

      <div className="mt-3">
        <button
          disabled={isLoading}
          onClick={() => {
            clearPopUp();
            toggleEditMode();
          }}
          className="hover:cursor-pointer mr-3 px-4 py-2 border text-gray-500 border-gray-200 rounded"
        >
          Cancel
        </button>

        <button
          disabled={isLoading}
          onClick={onClickSave}
          className={`${
            isLoading ? disabledBtn : activeBtn
          } px-4 py-2 rounded font-bold inline-block`}
        >
          Save
        </button>
      </div>
    </React.Fragment>
  );

  return (
    <div className="mb-10 p-8 bg-blue-50 rounded relative">
      {editMode ? editModeMarkup : normalMarkup}
    </div>
  );
}

export default Post;
