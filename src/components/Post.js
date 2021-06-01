import React, { useState } from 'react';
import PostEditForm from './PostEditForm';

function Post(props) {
  const { post, showDeletePopUp } = props;
  const [editMode, setEditMode] = useState(false);

  //Used to set the post info while not in edit mode if the user successfully edits the post
  const [postTitle, setPostTitle] = useState(post.title);
  const [postBody, setPostBody] = useState(post.body);

  const toggleMode = () => {
    setEditMode(!editMode);
  };

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

      <div className="mt-3">
        <button
          onClick={toggleMode}
          className="text-yellow-900 bg-yellow-100 hover:bg-yellow-200 transition duration-200 px-4 py-2 rounded font-bold inline-block shadow"
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

  return (
    <div className="mb-10 p-8 bg-blue-50 rounded relative shadow-md">
      <div className="bg-white inline-block p-3 rounded-full shadow-md text-md absolute bubble">
        <h1 className="text-blue-500">
          <i className="fas fa-comment mr-1"></i>
          {post.comments.length}
          <i class="ml-2 fas fa-external-link-alt text-blue-200 text-sm hover:text-blue-400 transition duration-200 cursor-pointer"></i>
        </h1>
      </div>

      {editMode ? (
        <PostEditForm
          post={post}
          setPostTitle={setPostTitle}
          setPostBody={setPostBody}
          toggleMode={toggleMode}
        />
      ) : (
        normalMarkup
      )}
    </div>
  );
}

export default Post;
