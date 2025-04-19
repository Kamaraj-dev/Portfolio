const Footer = () => {
    return (
      <footer className="bg-gray-900 text-gray-400 py-6">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-center space-y-4 md:space-y-0">
          <p className="text-sm">
            © {new Date().getFullYear()} Kamaraj. All rights reserved.
          </p>
          <div className="flex space-x-5 text-lg">
            <a
              href="https://www.linkedin.com/in/kamaraj-p"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/Kamaraj-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://leetcode.com/u/kamaraj78/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition"
            >
              <i className="fas fa-code"></i>
            </a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  