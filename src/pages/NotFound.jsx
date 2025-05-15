import { Link } from 'react-router-dom';
import { FadeInUp } from '../components/ScrollAnimation';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

const NotFound = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <div className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-2xl mx-auto text-center">
          <FadeInUp>
            <h1 className="text-6xl md:text-8xl font-bold mb-8 gradient-text">404</h1>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Page Not Found</h2>
            <p className="text-lg text-gray-400 mb-12">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <Link
              to="/"
              className="gradient-button px-8 py-4 rounded-xl font-bold text-lg inline-flex items-center gap-3 hover:scale-105 transition-transform duration-300"
            >
              <ArrowLeftIcon className="h-5 w-5" />
              Back to Home
            </Link>
          </FadeInUp>
        </div>
      </div>
    </div>
  );
};

export default NotFound; 