import { Link } from 'react-router-dom';

const Nav = ({ user, setUser }) => {
  return (
    <nav className="bg-gray-700 text-white px-6 py-4 flex items-center justify-between">
      <h1 className="text-lg font-bold">DAY1</h1>
      <div className="flex gap-4">
        <Link to="/" className="hover:text-gray-300">Home</Link>
        {!user ? (
          <>
            <Link to="/login" className="hover:text-gray-300">Login</Link>
            <Link to="/Register" className="hover:text-gray-300">Signup</Link>
          </>
        ) : (
          <button
            className="hover:text-gray-300"
            onClick={() => setUser(null)}
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Nav;