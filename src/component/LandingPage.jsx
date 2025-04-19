const LandingPage = () => {
  return (
    <section id="land" className="bg-white text-gray-800 min-h-screen flex flex-col justify-center items-center text-center px-6">
      <p className="text-lg text-gray-500 mb-2">hello, I'm</p>
      <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 mb-2">
        Kamaraj
      </h1>
      <p className="text-xl text-gray-600 mb-6">Full Stack Developer</p>

      <div className="flex flex-wrap justify-center gap-4 mb-6">
        <a href="#contact" className="bg-orange-400 text-white px-6 py-2 rounded-full font-semibold hover:bg-orange-500 transition">
          HIRE ME
        </a>
        <a href="https://drive.google.com/file/d/1xGrO63TvvpruV6QIy3ZGJjm3akTEPUNW/view?usp=sharing" target="_blank" download className="bg-gray-800 text-white px-6 py-2 rounded-full font-semibold hover:bg-gray-900 transition">
          DOWNLOAD CV
        </a>
      </div>

      <div className="flex space-x-4">
        <a href="https://www.linkedin.com/in/kamaraj-p" target="_blank" className="border-2 border-gray-500 rounded-full p-2 text-blue-700 hover:bg-orange-400 hover:text-white transition" >
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com/Kamaraj-dev" target="_blank" className="border-2 border-gray-500 rounded-full p-2 text-gray-700 hover:bg-orange-400 hover:text-black transition">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://leetcode.com/u/kamaraj78/" target="_blank" className="border-2 border-gray-500 rounded-full p-2 text-gray-900 hover:bg-orange-400 hover:text-black transition" >
        <i className="fas fa-code"></i>
        </a>
      </div>
    </section>
  );
};

export default LandingPage;
