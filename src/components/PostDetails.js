import React from 'react';

function PostDetails(props) {
  const { post, postTitle, postBody, toggleMode, showDeletePopUp } = props;

  return (
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
}

export default PostDetails;
