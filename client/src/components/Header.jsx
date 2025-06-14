import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-transparent text-brown py-4">
      <div className="container mx-auto px-4 flex justify-center items-center">
        <Link to="/" className="text-2xl font-bold tracking-tight flex items-center">
          <img 
            src="/theunblog.gif" 
            alt="TheUnblog Logo" 
            className="w-32 h-8 mr-2" // Adjusted width and height for the gif
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
