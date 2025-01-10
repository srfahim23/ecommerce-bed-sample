import React, { useState } from 'react';
import { Menu, X, Search, ShoppingCart, User } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <button
              className="sm:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <div className="ml-4 flex-shrink-0 flex items-center">
              <h1 className="text-2xl font-serif">The Luxury Bed Co.</h1>
            </div>
          </div>
          
          <div className="hidden sm:flex sm:space-x-8 items-center">
            <a href="#" className="text-gray-900 hover:text-gray-600">Collections</a>
            <a href="#" className="text-gray-900 hover:text-gray-600">Beds</a>
            <a href="#" className="text-gray-900 hover:text-gray-600">Mattresses</a>
            <a href="#" className="text-gray-900 hover:text-gray-600">Accessories</a>
          </div>

          <div className="flex items-center space-x-4">
            <Search className="w-5 h-5 text-gray-600 cursor-pointer" />
            <User className="w-5 h-5 text-gray-600 cursor-pointer" />
            <ShoppingCart className="w-5 h-5 text-gray-600 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`sm:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a href="#" className="block px-3 py-2 text-gray-900">Collections</a>
          <a href="#" className="block px-3 py-2 text-gray-900">Beds</a>
          <a href="#" className="block px-3 py-2 text-gray-900">Mattresses</a>
          <a href="#" className="block px-3 py-2 text-gray-900">Accessories</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;