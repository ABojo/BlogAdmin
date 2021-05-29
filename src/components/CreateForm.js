import { useState } from 'react';

function CreateForm(props) {
  const { postTitle, setPostTitle, postBody, setPostBody } = props;

  return (
    <div className="px-5 max-w-3xl w-11/12 mx-auto ">
      <input
        placeholder="Title"
        className="p-4 bg-gray-100 block rounded w-full mb-5 text-gray-900 placeholder-gray-600"
        value={postTitle}
        onChange={(e) => {
          setPostTitle(e.currentTarget.value);
        }}
      />
      <textarea
        placeholder="Body"
        className="p-4 bg-gray-100 block rounded w-full mb-5 text-gray-900 placeholder-gray-600 resize-none h-64"
        value={postBody}
        onChange={(e) => {
          setPostBody(e.currentTarget.value);
        }}
      />
      <button className="w-full p-4 bg-green-100 text-green-900 font-bold rounded hover:bg-green-200 text-xl transition duration-200">
        Create Post
      </button>
    </div>
  );
}

export default CreateForm;
