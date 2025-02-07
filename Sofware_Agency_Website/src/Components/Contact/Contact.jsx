export default function Contact() {
  return (
    <>
      <div className="contact w-full h-[auto] bg-gray-700">
        <section id="contact">
          <div className="grid grid-cols-1 lg:grid-cols-2 pt-20 pb-3">
            <div className="left-part">
              <div className="w-full max-w-md mx-auto p-6  rounded-lg">
                <h2 className="text-3xl font-bold text-center mb-4 text-white">
                  Contact Us
                </h2>
                <form>
                  <div className="mb-4">
                    <label className="block  font-bold mb-2 text-lg ">
                      Your Name:
                    </label>
                    <input
                      placeholder="Code Crafts"
                      type="text"
                      id="name"
                      className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block  font-bold mb-2 text-lg ">
                      Your Email:
                    </label>
                    <input
                      placeholder="Codecrafts@gmail.com"
                      type="email"
                      id="email"
                      className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"                     
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <label className="block  font-bold mb-2 text-lg ">
                      Message:
                    </label>
                    <textarea
                      placeholder="Your message"
                      id="message"
                      className="shadow appearance-none border rounded py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                      required
                    ></textarea>
                  </div>
                  <div className="flex items-center justify-center">
                    <button
                      type="submit"
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="right-part">
              <div className=" bg-gradient-to-t from-[#ADD4FA] to-[#4091f1] rounded-xl mx-8   sm:w-96  md:w-4/5 sm:mx-auto py-16">
                <div className="w-4/5 mx-auto mt-12  text-white">
                  <p className=" font-bold text-xl pb-6 ">Get in Touch</p>
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-message-circle w-6 h-6 text-blue-100  "
                    >
                      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                    </svg>
                    <p className="font-semibold text-xl ">Let s Have a Chat</p>
                  </div>
                  <p className="mx-8 text-pretty ">
                    I m always open to discussing new projects, creative ideas
                    or opportunities to be part of your visions.
                  </p>
                  <div className="flex items-center gap-2 mt-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-message-square w-6 h-6 text-white"
                    >
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                    <p className="font-semibold text-xl">Email Us</p>
                  </div>
                  <p className="mx-8 ">Codecrafts&#64;gmail.com</p>
                  <p className="text-xl font-bold text-white  mt-6">
                    Connect with me
                  </p>
                  <div className="flex items-center gap-2 my-2  ">
                    <a
                      href="www.linkedin.com/in/mujtaba-sohail-dar-27937b280"
                      className="text-2xl"
                    >
                      <i className="fa-brands fa-linkedin"></i>
                    </a>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/MDar123?tab=repositories"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-github w-6 h-6 text-white"
                      >
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                        <path d="M9 18c-4.51 2-5-2-7-2"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
