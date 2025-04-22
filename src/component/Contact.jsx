const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    window.location.href = `mailto:kamaraj7887@gmail.com?subject=Message from ${name}&body=Email: ${email}%0D%0A%0D%0A${message}`;
  };

  return (
    <section id="contact" className="bg-white text-gray-800 py-20 px-6">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl  md:text-4xl font-extrabold text-gray-800 mb-6">
          Contact Me
        </h2>
        <ul className="text-base md:text-lg text-gray-600 mb-6">

        </ul>
        <form
          onSubmit={handleSubmit}
          className="bg-gray-100 p-6 rounded-lg shadow-md text-left"
        >
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Name</label>
            <input
              type="text"
              name="name"
              className="w-full px-4 py-2 rounded-md bg-white border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              name="email"
              className="w-full px-4 py-2 rounded-md bg-white border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Message</label>
            <textarea
              name="message"
              className="w-full px-4 py-2 rounded-md bg-white border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Your Message"
              rows="4"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-gray-800 hover:bg-gray-700 text-white py-2 rounded-md font-semibold transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
