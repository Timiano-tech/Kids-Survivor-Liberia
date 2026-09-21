import { Link } from 'react-router-dom';
import { FiHome, FiAlertTriangle } from 'react-icons/fi';
import SEO from '../components/SEO';

const NotFound = () => {
  return (
    <>
      <SEO
        title="404 — Page Not Found"
        description="The requested page could not be found on Kids Survivor Liberia."
        noindex={true}
      />
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center px-4">
        <div className="max-w-md w-full text-center">
          {/* Icon */}
          <div className="mb-8 flex justify-center">
            <div className="bg-yellow-400 p-6">
              <FiAlertTriangle className="w-16 h-16 text-slate-900" />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-6xl font-semibold text-slate-900 mb-4">404</h1>

          {/* Subtitle */}
          <h2 className="text-2xl font-semibold text-slate-800 mb-4">
            Page Not Found
          </h2>

          {/* Message */}
          <p className="text-slate-600 mb-8">
            The page you are looking for might have been removed, had its name changed,
            or is temporarily unavailable.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-bold px-6 py-3 transition-colors"
            >
              <FiHome className="w-5 h-5" />
              Back to Home
            </Link>

            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center bg-white border border-slate-300 text-slate-700 hover:border-blue-500 font-semibold px-6 py-3 transition-colors"
            >
              Go Back
            </button>
          </div>

          {/* Additional Info */}
          <div className="mt-12 pt-8 border-t border-slate-200">
            <p className="text-slate-500 text-sm">
              If you believe this is an error, please contact support
            </p>
            <p className="text-slate-400 text-xs mt-2">
              Error Code: 404 - Page Not Found
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;