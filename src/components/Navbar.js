function Navbar(props) {
  return (
    <div className="bg-blue-500 px-5 py-3 flex justify-between items-baseline mb-5">
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
  );
}

export default Navbar;
