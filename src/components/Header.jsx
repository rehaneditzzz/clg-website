import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null); // To track which dropdown is open

  const items = [
    {
      name: "About",
      href: "/about",
      dropdown: ["Company", "Team", "Careers", "Vision", "Mission"],
    },
    {
      name: "Academic",
      href: "/academic",
      dropdown: [
        "Undergraduate",
        "Postgraduate",
        "Research",
        "Curriculum",
        "Admissions",
      ],
    },
    {
      name: "Admission",
      href: "/admission",
      dropdown: [
        "Apply Now",
        "Requirements",
        "Deadlines",
        "Scholarships",
        "Events",
      ],
    },
    {
      name: "Research",
      href: "/research",
      dropdown: [
        "Publications",
        "Projects",
        "Collaborations",
        "Innovation",
        "Funding",
      ],
    },
    {
      name: "Campus",
      href: "/campus",
      dropdown: ["Facilities", "Hostels", "Events", "Clubs", "Sports"],
    },
    {
      name: "Contact",
      href: "/contact",
      dropdown: ["Address", "Phone", "Email", "FAQs", "Feedback"],
    },
  ];

  const handleDropdownToggle = (index) => {
    setDropdownOpen(dropdownOpen === index ? null : index); // Toggle the dropdown
  };

  return (
    <header className="w-full h-auto py-2 px-6 flex items-center justify-between lg:justify-around text-white fixed z-10 shadow-md bg-gradient-to-t from-transparent to-black">
      {/* Logo Section */}
      <div className="flex items-center space-x-16">
        <img
          src="/public/logo.jpeg"
          alt="Logo"
          className="h-12 w-auto rounded-full"
        />
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex">
        {items.map((item, index) => (
          <div key={index} className="relative group">
            <ul className="flex flex-col items-start select-none">
              <li
                className="px-4 py-2 cursor-pointer transition-all duration-300 hover:text-purple-400"
                onClick={() => handleDropdownToggle(index)}
              >
                {item.name}
                {/* Add icon or any indicator for dropdown */}
                <span className="ml-2"></span>
              </li>

              {/* Dropdown */}
              {dropdownOpen === index && (
                <div className="absolute left-0 top-12 pt-6 w-48 bg-slate-200 text-purple-600 bg-opacity-90  rounded-lg shadow-lg mt-2">
                  {item.dropdown.map((dropdownItem, idx) => (
                    <a
                      key={idx}
                      href="#"
                      className="block text-sm font-semibold px-4 py-2 hover:bg-slate-200 rounded-lg hover:shadow-md  hover:translate-x-3 transition-all duration-200 "
                    >
                      {dropdownItem}
                    </a>
                  ))}
                </div>
              )}
            </ul>
          </div>
        ))}
      </nav>

      {/* Mobile Hamburger Menu */}
      <button
        className="md:hidden focus:outline-none relative"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {/* Hamburger icon */}
        <div
          className={`w-8 h-1 bg-white rounded-full transition-all duration-300 transform ${
            isMenuOpen
              ? "rotate-45 absolute top-1/2 left-1/2 -translate-x-1/2"
              : ""
          }`}
        ></div>
        <div
          className={`w-8 h-1 bg-white rounded-full transition-all duration-300 mt-2 ${
            isMenuOpen ? "opacity-0" : ""
          }`}
        ></div>
        <div
          className={`w-8 h-1 bg-white rounded-full transition-all duration-300 mt-2 transform ${
            isMenuOpen
              ? "-rotate-45 absolute top-1/2 left-1/2 -translate-x-1/2"
              : ""
          }`}
        ></div>
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full sm:w-1/2 rounded-b-2xl bg-slate-200 bg-opacity-90 text-white flex flex-col items-start gap-4 p-4 z-10 min-h-[40vh] overflow-y-auto">
          {items.map((item, index) => (
            <div key={index} className="relative">
              <a
                href={item.href}
                className="block w-72 text-sm px-4 py-2 transition-all text-purple-600 duration-300 hover:bg-slate-200 rounded-lg hover:shadow-md hover:translate-x-2"
                onClick={() => setIsMenuOpen(false)} // Close menu on click
              >
                {item.name}
              </a>

              {/* Mobile Dropdown */}
              {dropdownOpen === index && (
                <div className="space-y-2 pl-4">
                  {item.dropdown.map((dropdownItem, idx) => (
                    <a
                      key={idx}
                      href="#"
                      className="block text-sm px-4 py-2 hover:bg-gray-700 transition-all duration-300"
                      onClick={() => setIsMenuOpen(false)} // Close menu on click
                    >
                      {dropdownItem}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
