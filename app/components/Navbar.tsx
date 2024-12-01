"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gray-900 border-b border-yellow-500">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link
            href="/"
            className="text-2xl font-bold text-yellow-400 hover:text-yellow-300 transition-colors duration-300"
          >
            FutureVentures
          </Link>
          <div className="hidden md:flex space-x-8">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/team">The Team</NavLink>
            <NavLink href="/join">Join Us</NavLink>
          </div>
          <button
            onClick={toggleMenu}
            className="md:hidden text-yellow-400 hover:text-yellow-300 transition-colors duration-300"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileNavLink href="/" onClick={toggleMenu}>
              Home
            </MobileNavLink>
            <MobileNavLink href="/team" onClick={toggleMenu}>
              The Team
            </MobileNavLink>
            <MobileNavLink href="/join" onClick={toggleMenu}>
              Join Us
            </MobileNavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
  >
    {children}
  </Link>
);

const MobileNavLink = ({
  href,
  onClick,
  children,
}: {
  href: string;
  onClick: () => void;
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-yellow-400 hover:bg-gray-800 transition-colors duration-300"
    onClick={onClick}
  >
    {children}
  </Link>
);

export default Navbar;
