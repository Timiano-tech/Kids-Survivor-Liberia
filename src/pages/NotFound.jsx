import { Link } from 'react-router-dom';
import { FiArrowLeft, FiArrowUpRight } from 'react-icons/fi';
import SEO from '../components/SEO';
import NotFoundImage from '../assets/Community_Outreach_Children.jpeg';

const NotFound = () => {
  const links = [
    { label: 'Our Programs', to: '/programs' },
    { label: 'Impact & Reports', to: '/impact' },
    { label: 'Get Involved', to: '/volunteer' },
    { label: 'Contact Us', to: '/contact' },
  ];

  return (
    <>
      <SEO
        title="404 — Page Not Found"
        description="The requested page could not be found on Kids Survivor Liberia."
        noindex={true}
      />
      <div className="grid min-h-screen bg-white lg:grid-cols-2">
        <div className="relative order-2 min-h-[40vh] lg:order-1 lg:min-h-screen">
          <img
            src={NotFoundImage}
            alt="Children supported by Kids Survivor Liberia"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-950/45" />
          <div className="absolute inset-x-0 bottom-0 p-8 lg:p-12">
            <p className="text-caption uppercase tracking-[0.2em] text-yellow-400">Kids Survivor Liberia</p>
            <p className="mt-3 max-w-xs text-body-md text-slate-200">
              Every child deserves to be found.
            </p>
          </div>
        </div>

        <div className="order-1 flex items-center px-6 py-20 sm:px-10 lg:order-4 lg:px-20">
          <div className="w-full max-w-lg">
            <p className="font-serif text-[7rem] leading-none text-slate-900 sm:text-[9rem]">404</p>
            <h1 className="mt-4 text-heading-xl text-slate-900">Page not found</h1>
            <p className="mt-5 text-body-md text-slate-600">
              The page you are looking for may have been moved, renamed, or taken down.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/"
                className="inline-flex items-center justify-center gap-2 bg-yellow-500 px-7 py-3.5 text-body-sm font-semibold text-slate-900 transition-colors hover:bg-yellow-400"
              >
                Back to home
              </Link>
              <button
                onClick={() => window.history.back()}
                className="inline-flex items-center justify-center gap-2 border border-slate-300 px-7 py-3.5 text-body-sm font-semibold text-slate-700 transition-colors hover:border-slate-900 hover:text-slate-900"
              >
                <FiArrowLeft className="h-4 w-4" />
                Go back
              </button>
            </div>

            <div className="mt-14 border-t border-slate-200 pt-8">
              <p className="text-caption uppercase tracking-[0.18em] text-slate-500">Popular destinations</p>
              <ul className="mt-5 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                {links.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="group inline-flex items-center gap-2 text-body-sm font-medium text-slate-700 transition-colors hover:text-blue-700"
                    >
                      {link.label}
                      <FiArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
