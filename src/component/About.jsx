const About = () => {
  return (
    <section id="about" className="bg-white text-gray-800 py-20 px-6">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-6">
          About Me
        </h2>
        <p className="text-base md:text-lg text-gray-600 leading-relaxed">
          I'm <span className="font-semibold text-gray-800">Kamaraj</span>, a dedicated software developer with expertise in 
          <span className="text-orange-500 font-semibold"> Java</span>, 
          <span className="text-orange-500 font-semibold"> React</span>, and 
          <span className="text-orange-500 font-semibold"> Spring Boot</span>.
          My passion lies in building innovative web applications and creating seamless user experiences.
        </p>
        <p className="text-base md:text-lg text-gray-600 leading-relaxed mt-4">
          With a strong foundation in both front-end and back-end development, I enjoy solving complex problems
          and continuously learning new technologies. Let's build something amazing together!
        </p>
      </div>
    </section>
  );
};

export default About;
