import { aboutData } from "../data/aboutData";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-12 md:py-20 bg-gradient-to-b from-netflix-black to-netflix-dark"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Title */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 relative inline-block">
            Get In Touch
            <span className="absolute top-[calc(100%+0.5rem)] left-1/2 transform -translate-x-1/2 w-16 md:w-20 h-1 bg-netflix-red mt-2"></span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 md:gap-12 bg-netflix-card p-4 md:p-6 lg:p-8 rounded-xl shadow-2xl">
          {/* Contact Info */}
          <div className="lg:w-2/5">
            <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-10 md:after:w-12 after:h-0.5 after:bg-netflix-red">
              Let's Connect
            </h3>

            <div className="space-y-4 md:space-y-2">
              {aboutData.contacts.map(({ label, href, icon: Icon }, i) => (
                <div
                  key={i}
                  className="flex items-center p-3 md:p-4 rounded-lg bg-netflix-black hover:bg-netflix-dark transition-all duration-300 group"
                >
                  <div className="text-netflix-red mr-3 md:mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="text-xl md:text-2xl" />
                  </div>
                  <div className="overflow-hidden">
                    <h4 className="font-bold text-xs md:text-sm">{label}</h4>
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : "_self"}
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-netflix-red transition-colors duration-300 text-sm md:text-base truncate block"
                    >
                      {href.replace("mailto:", "").replace("tel:", "")}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-3/5 mt-8 md:mt-0">
            <div className="bg-netflix-black p-4 md:p-6 lg:p-8 rounded-xl">
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-10 md:after:w-12 after:h-0.5 after:bg-netflix-red">
                Send a Message
              </h3>

              <form
                name="ContactUS"
                method="POST"
                netlify
                className="space-y-4 md:space-y-6"
              >
                {/* Hidden input required by Netlify */}
                <input type="hidden" name="form-name" value="ContactUS" />

                <div className="relative">
                  <label
                    htmlFor="name"
                    className="block mb-1 md:mb-2 font-medium text-netflix-light-gray text-sm md:text-base"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-3 md:px-4 py-2 md:py-3 bg-netflix-dark border border-netflix-gray rounded focus:outline-none focus:ring-2 focus:ring-netflix-red focus:border-transparent transition-all duration-300 text-sm md:text-base"
                    placeholder="Your full name"
                    required
                  />
                </div>

                <div className="relative">
                  <label
                    htmlFor="email"
                    className="block mb-1 md:mb-2 font-medium text-netflix-light-gray text-sm md:text-base"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-3 md:px-4 py-2 md:py-3 bg-netflix-dark border border-netflix-gray rounded focus:outline-none focus:ring-2 focus:ring-netflix-red focus:border-transparent transition-all duration-300 text-sm md:text-base"
                    placeholder="email@example.com"
                    required
                  />
                </div>

                <div className="relative">
                  <label
                    htmlFor="message"
                    className="block mb-1 md:mb-2 font-medium text-netflix-light-gray text-sm md:text-base"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="w-full px-3 md:px-4 py-2 md:py-3 bg-netflix-dark border border-netflix-gray rounded focus:outline-none focus:ring-2 focus:ring-netflix-red focus:border-transparent transition-all duration-300 text-sm md:text-base"
                    placeholder="Tell me about your project or inquiry..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-netflix-red hover:bg-red-700 text-white font-bold py-2 md:py-3 px-6 md:px-8 rounded transition-all duration-300 transform hover:scale-[1.02] active:scale-100 text-sm md:text-base cursor-pointer"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
