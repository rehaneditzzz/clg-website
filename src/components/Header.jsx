import { useState } from "react";
import Programme from "./Programme";
import Modal from "./Modal";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const items = [
    { name: "About", href: "/about" },
    { name: "Academic", href: "/academic" },
    { name: "Admission", href: "/admission" },
    { name: "Research", href: "/research" },
    { name: "Campus", href: "/campus" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header className="w-full h-18 py-4 px-6 flex items-center justify-between lg:justify-around text-white fixed z-10 shadow-md bg-gradient-to-t from-transparent to-black">
        {/* Logo Section */}
        <div className="flex items-center space-x-16">
          <img src="/public/logo.jpeg" alt="Logo" className="h-12 w-auto rounded-full" />
          <Programme />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          {items.map((item, index) => (
            <ul key={index} className="relative group">
              <li className="px-4 py-2 cursor-pointer transition-all duration-300 hover:text-purple-400">
                {item.name}
                <span className="absolute left-0 top-3 h-2/4 w-1 bg-purple-700 scale-y-0 group-hover:scale-y-100 origin-bottom transition-all duration-200"></span>
              </li>
            </ul>
          ))}
        </nav>
      </header>

      <Modal />
    </>
  );
};

export default Header;
