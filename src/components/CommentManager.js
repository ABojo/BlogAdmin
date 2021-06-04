import formatDate from '../utils/formatDate';

function CommentManager(props) {
  const { comments, hideManager } = props;
  console.log(comments);
  return (
    <div className="fixed h-screen w-screen bg-opacity-40 bg-black top-0 left-0 z-10">
      <div className="rounded p-6 max-w-xl w-11/12 bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <button className="mb-3" onClick={hideManager}>
          <i className="fas fa-arrow-left text-blue-500 text-2xl"></i>
        </button>
        <h1 className="font-bold text-md mb-3">Comments ({comments.length})</h1>
        <div className="overflow-y-scroll max-h-96">
          {comments
            .map((com) => (
              <div className="mb-3 border-t border-gray-300 pt-3">
                <h1 className="font-bold text-sm mb-1">{com.name}</h1>
                <p className="text-sm text-gray-400 mb-1">
                  {formatDate(com.timestamp)}
                </p>
                <p className="text-sm text-gray-500 mb-1">{com.body}</p>
                <button className="text-red-500 hover:text-red-800 transition duration-200 font-bold text-sm">
                  Delete
                </button>
              </div>
            ))
            .reverse()}
        </div>
      </div>
    </div>
  );
}

export default CommentManager;
