import React, { useState } from 'react';
import PostEditForm from './PostEditForm';
import PostDetails from './PostDetails';

function Post(props) {
  const { post, showDeletePopUp } = props;
  const [editMode, setEditMode] = useState(false);

  const [postTitle, setPostTitle] = useState(post.title);
  const [postBody, setPostBody] = useState(post.body);

  const toggleMode = () => {
    setEditMode(!editMode);
  };

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
        <PostDetails
          post={post}
          postTitle={postTitle}
          postBody={postBody}
          toggleMode={toggleMode}
          showDeletePopUp={showDeletePopUp}
        />
      )}
    </div>
  );
}

export default Post;
