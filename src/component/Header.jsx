import { useState } from "react";
import { Menu, X } from "lucide-react";


const sections = [
  { name: "About", href: "/#about" },
  { name: "Skills", href: "/#skills" },
  { name: "Projects", href: "/#projects" },
  { name: "Contact", href: "/#contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white cursor-pointer text-gray-800 shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">

        <a href="/" className="text-xl font-bold font-serif text-gray-900">Kamaraj</a>

        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          {sections.map(({ name, href }) => (
            <a key={name} href={href} className="hover:text-orange-500 transition">
              {name}
            </a>
          ))}
        </nav>
        <button className="md:hidden text-gray-800 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <nav className="md:hidden bg-white py-4 text-center border-t space-y-2">
          {sections.map(({ name, href }) => (
            <a key={name} href={href}className="block py-2 hover:text-orange-500 transition">
              {name}
            </a>
          ))}
        </nav>
      )}
      
    </header>
  );
};

export default Header;
