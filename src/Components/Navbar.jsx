import React, { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

function Navbar({ scrollToSection }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white text-(--deep-green) py-6 px-3 flex justify-between items-center">
      <h1 className="text-xl font-bold bg-clip-text text-transparent bg-linear-to-r from-green-300 via-lime-500 to-green-600">
        GREENSCAPE
      </h1>

      <ul className="hidden md:flex [&>li>a]:mx-[10px]">
        <li>
          <a
            onClick={(e) => {
              e.preventDefault;
              scrollToSection("hero");
            }}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault;
              scrollToSection("features");
            }}
          >
            Features
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault;
              scrollToSection("about");
            }}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault;
              scrollToSection("products");
            }}
          >
            Products
          </a>
        </li>
      </ul>

      <div className="md:hidden z-50">
        {isOpen ? (
          <HiOutlineX
            className="text-3xl cursor-pointer"
            onClick={toggleMenu}
          />
        ) : (
          <HiOutlineMenu
            className="text-3xl cursor-pointer"
            onClick={toggleMenu}
          />
        )}
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <ul className="absolute top-15 right-0 h-[100vh] w-[200px] bg-white flex flex-col items-center gap-4 py-10 lg:hidden z-50">
          <li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault;
                scrollToSection("hero");
              }}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault;
                scrollToSection("features");
              }}
            >
              Features
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault;
                scrollToSection("about");
              }}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault;
                scrollToSection("products");
              }}
            >
              Products
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
