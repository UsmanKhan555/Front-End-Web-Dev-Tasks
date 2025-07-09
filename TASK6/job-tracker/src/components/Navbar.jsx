import { Link, useLocation } from 'react-router-dom';
import { FiPlus, FiHome } from 'react-icons/fi';

function Navbar() {
  const { pathname } = useLocation();

  return (
    <nav className="bg-white shadow px-6 py-4 mb-6 flex justify-between items-center sticky top-0 z-10">
      <h1 className="text-xl font-bold text-blue-700">JobTracker</h1>
      <div className="flex gap-4">
        <Link
          to="/"
          className={`flex items-center gap-1 text-sm font-medium ${
            pathname === '/' ? 'text-blue-600' : 'text-gray-700'
          }`}
        >
          <FiHome /> Dashboard
        </Link>
        <Link
          to="/add"
          className={`flex items-center gap-1 text-sm font-medium ${
            pathname === '/add' ? 'text-blue-600' : 'text-gray-700'
          }`}
        >
          <FiPlus /> Add Job
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
