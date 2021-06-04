import formatDate from '../utils/formatDate';
import React, { useState } from 'react';
import API from '../utils/API';
function Comment(props) {
  const { comment, removeComment, setPopUp } = props;
  const [deleteMode, setDeleteMode] = useState(false);

  const toggleMode = () => {
    setDeleteMode(!deleteMode);
  };

  const onClickDelete = async () => {
    //clear pop up at start of a new delete so the new popup gets the wobble animation
    setPopUp({ message: null, status: null });

    const json = await API.deleteComment(comment._id);
    console.log(json);
    if (json.status === 'failure') {
      setPopUp({
        message: 'Sorry, there was a problem deleting your comment!',
        success: true,
      });
      toggleMode();
    } else {
      removeComment(comment._id);
      setPopUp({
        message: 'You have succesfully removed the comment!',
        success: true,
      });
    }
  };

  const normalMarkup = (
    <React.Fragment>
      <h1 className="font-bold text-sm mb-1">{comment.name}</h1>
      <p className="text-sm text-gray-400 mb-1">
        {formatDate(comment.timestamp)}
      </p>
      <p className="text-sm text-gray-500 mb-1">{comment.body}</p>
      <button
        onClick={toggleMode}
        className="text-red-500 hover:text-red-800 transition duration-200 font-bold text-sm"
      >
        Delete
      </button>
    </React.Fragment>
  );

  const deleteMarkup = (
    <React.Fragment>
      <h1 className="mb-3 font-bold">
        Are you sure you want to delete this comment?
      </h1>

      <button
        onClick={toggleMode}
        className="hover:cursor-pointer mr-3 p-2 border text-gray-500 border-gray-200 rounded hover:bg-gray-100 transition duration-200 text-sm"
      >
        Close
      </button>
      <button
        onClick={onClickDelete}
        className={`p-2 font-bold rounded shadow bg-red-100 text-red-900 hover:bg-red-200 transition duration-200 text-sm`}
      >
        Delete
      </button>
    </React.Fragment>
  );

  return (
    <div className="mb-3 border-t border-gray-300 pt-3">
      {deleteMode ? deleteMarkup : normalMarkup}
    </div>
  );
}

export default Comment;
