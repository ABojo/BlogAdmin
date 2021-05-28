function Navbar(props) {
  return (
    <div>
      <div className="bg-blue-500 px-5 py-3 flex justify-between items-baseline mb-10">
        <a className="text-xl font-bold text-white" href="/">
          Blog Admin
        </a>
        <button
          onClick={() => {
            props.setToken('');
          }}
          className="bg-white hover:bg-blue-100 transition duration-200 rounded text-white p-2 text-md text-blue-500 font-bold"
        >
          Logout
        </button>
      </div>

      <div className="text-lg text-gray-500 mb-10 block text-center">
        <a
          href="/posts"
          className="mr-12 font-bold text-blue-500 pb-1 border-blue-500 border-b-2 transition duration-200"
        >
          My Posts
        </a>
        <a href="/create">Create Post</a>
      </div>
    </div>
  );
}

export default Navbar;
