function Post(props) {
  const { post, showDeletePopUp } = props;

  return (
    <div className="mb-10 p-8 bg-blue-50 rounded relative" key={post._id}>
      <h1 className="text-2xl font-bold mb-3">{post.title}</h1>
      <p className="text-gray-400">
        {`${post.body.length > 200 ? post.body.slice(0, 200) : post.body}...`}
      </p>
      <div className="bg-white inline-block p-3 rounded-full shadow-md text-md absolute bubble">
        <h1 className="text-blue-500">
          <i className="fas fa-comment mr-1"></i>
          {post.comments.length}
        </h1>
      </div>

      <div className="mt-3">
        <a
          href="/"
          className="text-yellow-900 bg-yellow-100 hover:bg-yellow-200 transition duration-200 px-4 py-2 rounded font-bold inline-block"
        >
          Edit
        </a>

        <button
          onClick={() => showDeletePopUp(post._id, post.title)}
          className="hover:cursor-pointer ml-3 px-4 py-2 border text-gray-500 border-gray-200 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Post;
