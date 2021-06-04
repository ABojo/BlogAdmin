import formatDate from '../utils/formatDate';

function Comment(props) {
  const { comment } = props;

  return (
    <div className="mb-3 border-t border-gray-300 pt-3">
      <h1 className="font-bold text-sm mb-1">{comment.name}</h1>
      <p className="text-sm text-gray-400 mb-1">
        {formatDate(comment.timestamp)}
      </p>
      <p className="text-sm text-gray-500 mb-1">{comment.body}</p>
      <button className="text-red-500 hover:text-red-800 transition duration-200 font-bold text-sm">
        Delete
      </button>
    </div>
  );
}

export default Comment;
