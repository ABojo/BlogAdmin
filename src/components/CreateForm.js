import { useState } from 'react';
import API from '../utils/API';
import Message from './Message';
import Loader from './Loader';

function CreateForm(props) {
  const { postTitle, setPostTitle, postBody, setPostBody } = props;
  const [popUpText, setPopUpText] = useState('');
  const [popUpStatus, setPopUpStatus] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const clearFields = () => {
    setPostTitle('');
    setPostBody('');
  };

  const setPopUp = (text, success) => {
    setPopUpText(text);
    setPopUpStatus(success);
  };

  const onClickPost = async () => {
    if (postTitle && postBody) {
      setIsLoading(true);
      const json = await API.createPost(postTitle, postBody);
      setIsLoading(false);

      if (json.status === 'failure') {
        setPopUp('Sorry, there was a problem creating your post!', false);
      } else {
        setPopUp('Your post was successfully created!', true);
        clearFields();
      }
    } else {
      setPopUp('Sorry, you must fill out both fields!', false);
    }
  };

  const activeBtnCss = 'bg-green-100 text-green-900 hover:bg-green-200';
  const disabledBtnCss = 'bg-gray-100 text-gray-300 cursor-default';

  return (
    <div className="px-5 max-w-3xl w-11/12 mx-auto ">
      {isLoading && <Loader />}
      {popUpText && <Message text={popUpText} success={popUpStatus} />}
      <input
        placeholder="Title"
        className="p-4 bg-gray-100 block rounded w-full mb-5 text-gray-900 placeholder-gray-600 shadow"
        value={postTitle}
        onChange={(e) => {
          setPostTitle(e.currentTarget.value);
        }}
      />
      <textarea
        placeholder="Body"
        className="p-4 bg-gray-100 block rounded w-full mb-5 text-gray-900 placeholder-gray-600 resize-none h-64 shadow"
        value={postBody}
        onChange={(e) => {
          setPostBody(e.currentTarget.value);
        }}
      />
      <button
        className={`${
          isLoading ? disabledBtnCss : activeBtnCss
        } w-full p-4 font-bold rounded text-xl transition duration-200 shadow`}
        onClick={onClickPost}
        disabled={isLoading}
      >
        Create Post
      </button>
    </div>
  );
}

export default CreateForm;
