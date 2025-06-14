import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white py-4 shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold tracking-tight">
          TheUnblog
        </Link>
        <nav className="space-x-6">
          <Link to="/" className="hover:text-indigo-400">Home</Link>
          <Link to="/admin" className="hover:text-indigo-400">Admin</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
