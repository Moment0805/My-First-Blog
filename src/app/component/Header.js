"use client";
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

 /* useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };
    return () => {
    };
  }, [menuRef]);*/

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640 && isOpen) {
        closeMenu();
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isOpen]);

  return (
    <header className="font-mono bg-white/10 backdrop-blur-md shadow-xl p-2 mb-0 pt-2 relative z-20">
      <div className="flex items-center justify-between px-4">
        <h2 className="text-xl italic">My Personal Blog</h2>

        <div className="sm:hidden z-[100]">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? (
              <FontAwesomeIcon
                icon={faTimes}
                className="text-xl text-black"
                onClick={(e) => {
                  e.stopPropagation();
                  closeMenu(); 
                }}
              />
            ) : (
              <FontAwesomeIcon icon={faBars} className="text-xl text-white" />
            )}
          </button>
        </div>

        <nav className="hidden sm:flex text-md space-x-4">
          <a href="/" className="hover:text-slate-400 mt-2">Home</a>
          <Link href="/about" className="hover:text-slate-400 mt-2">About</Link>
          <Link href="/" className="hover:text-slate-400 mt-2">Contact</Link>
          <Link href="/blog" className="border-2 text-white py-1 px-2 rounded-md hover:bg-white/15 hover:border-green-200 transition-colors duration-1000">
            View Blogs
          </Link>
        </nav>
      </div>
      <div
        ref={menuRef}
        className={`fixed top-0 right-0 h-full w-56  text-white z-[99] transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ display: isOpen ? 'block' : 'none' }}
      >
        <nav className="flex flex-col bg-white/90 border pb-3 border-gray-800 rounded-2xl text-black backdrop-blur-md m-2 items-center space-y-4 py-8">
          <a href="/" className="hover:text-slate-400 border-b border-gray-400 w-40 text-center" onClick={closeMenu}>Home</a>
          <Link href="/about" className="hover:text-slate-400 border-b border-gray-400 w-44 text-center" onClick={closeMenu}>About</Link>
          <Link href="/" className="hover:text-slate-500 border-b border-gray-400 w-48 text-center" onClick={closeMenu}>Contact</Link>
          <Link href="/blog" className="bg-blue-500 font-sans text-white mb-1 py-1 px-2 rounded hover:bg-blue-700 transition-colors duration-1000" onClick={closeMenu}>
            View Blogs
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
