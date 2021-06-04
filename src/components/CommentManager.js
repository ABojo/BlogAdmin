import { useState } from 'react';
import Comment from './Comment';
import Message from './Message';

function CommentManager(props) {
  const { comments, hideManager, removeComment } = props;
  const [popUp, setPopUp] = useState({ message: null, success: null });

  return (
    <div className="fixed h-screen w-screen bg-opacity-40 bg-black top-0 left-0 z-10">
      <div className="rounded p-6 max-w-xl w-11/12 bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        {popUp.message && (
          <Message text={popUp.message} success={popUp.success} />
        )}

        <button className="mb-3" onClick={hideManager}>
          <i className="fas fa-arrow-left text-blue-500 text-2xl"></i>
        </button>
        <h1 className="font-bold text-md mb-3">Comments ({comments.length})</h1>

        <div className="overflow-y-auto max-h-96">
          {comments
            .map((comment) => (
              <Comment
                removeComment={removeComment}
                comment={comment}
                key={comment._id}
                setPopUp={setPopUp}
              />
            ))
            .reverse()}
        </div>
      </div>
    </div>
  );
}

export default CommentManager;
