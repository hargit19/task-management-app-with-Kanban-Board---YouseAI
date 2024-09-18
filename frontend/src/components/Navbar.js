import { useState } from "react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-purple-900">
      <div className="px-4 py-6 mx-auto lg:py-8 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
          {/* Left Section: Logo and Title */}
          <a
            href="/"
            aria-label="Company"
            title="Company"
            className="inline-flex items-center"
          >
            
            
            <span className="ml-2 text-2xl font-bold tracking-wide text-purple-100 font-sans">
              Kanban Task Management App - YouseAI Project
            </span>
            
          </a>

          {/* Right Section: Menu for larger screens and hamburger for smaller screens */}
          <div className="flex items-center space-x-8">
            <ul className="hidden lg:flex items-center space-x-8 text-purple-100 font-medium">
              <li>
                <a href="https://www.linkedin.com/in/hardik-advani-441456250/" className="hover:text-purple-200 transition">
                  About
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/hardik-advani-441456250/" className="hover:text-purple-200 transition">
                  Contact
                </a>
              </li>
            </ul>

            {/* Mobile Menu Button (Visible on small screens) */}
            <div className="lg:hidden">
              <button
                aria-label="Open Menu"
                title="Open Menu"
                className="text-purple-100 focus:outline-none"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <svg className="w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
              {isMenuOpen && (
                <div className="absolute top-0 left-0 w-full z-10">
                  <div className="p-5 bg-purple-800 border rounded shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                      <a
                        href="/"
                        aria-label="Company"
                        title="Company"
                        className="inline-flex items-center"
                      >
                        <svg
                          className="w-8 text-purple-300"
                          viewBox="0 0 24 24"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeMiterlimit="10"
                          stroke="currentColor"
                          fill="currentColor"
                        >
                          <rect x="3" y="1" width="7" height="12" />
                          <rect x="3" y="17" width="7" height="6" />
                          <rect x="14" y="1" width="7" height="6" />
                          <rect x="14" y="11" width="7" height="12" />
                        </svg>
                        <span className="ml-2 text-2xl font-bold tracking-wide text-purple-100">
                          Kanban Task Manager
                        </span>
                      </a>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="text-purple-100 focus:outline-none"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                    <nav>
                      <ul className="space-y-4">
                        <li>
                          <a href="https://www.linkedin.com/in/hardik-advani-441456250/" className="block text-purple-100 hover:text-purple-200" target="_blank">
                            About
                          </a>
                        </li>
                        <li>
                          <a href="https://www.linkedin.com/in/hardik-advani-441456250/" className="block text-purple-100 hover:text-purple-200" target="_blank">
                            Contact
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
