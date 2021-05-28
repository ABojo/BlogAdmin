import { NavLink } from 'react-router-dom';
function Navbar(props) {
  const activeClassName =
    'font-bold text-blue-500 pb-1 border-blue-500 border-b-2 transition duration-200';

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
        <NavLink
          exact
          to="/"
          className="mr-12"
          activeClassName={activeClassName}
        >
          My Posts
        </NavLink>
        <NavLink exact to="/create" activeClassName={activeClassName}>
          Create Post
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
