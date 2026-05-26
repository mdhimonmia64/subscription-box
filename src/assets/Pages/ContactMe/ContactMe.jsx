import React from 'react';
import { FaFacebookF, FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";


const ContactMe = () => {

  return (
    <section
      id="contact"
      className="min-h-screen bg-base-300 text-black px-6 py-20 flex items-center justify-center"
    >
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-cyan-400 uppercase tracking-[4px] mb-4">
            Contact Me
          </p>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Let's Build Something Amazing Together
          </h2>

          <p className="text-slate-600 mt-6 leading-8 text-lg">
            Feel free to contact me for frontend, MERN stack, or full-stack web
            development projects. I'm always open to discussing new ideas,
            freelance work, and exciting opportunities.
          </p>

          <div className="mt-10 space-y-4">
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-cyan-400 text-xl" />
              <p className="text-black">mdhimonmia64@gmail.com</p>
            </div>

            <div className="flex items-center gap-4">
              <FaGithub className="text-cyan-400 text-xl" />
              <a
                href="https://github.com/mdhimonmia64"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition"
              >
                GitHub Profile
              </a>
            </div>

            <div className="flex items-center gap-4">
              <FaLinkedinIn className="text-cyan-400 text-xl" />
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>

          <div className="flex gap-4 mt-10">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-cyan-500 hover:text-black transition"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-cyan-500 hover:text-black transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-cyan-500 hover:text-black transition"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-8 shadow-2xl">
          <form className="space-y-6">
            <div>
              <label className="block mb-2 text-black">Your Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-5 py-4 rounded-xl bg-black/10 border border-white/10 outline-none focus:border-cyan-400 transition"
              />
            </div>

            <div>
              <label className="block mb-2 text-black">Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-5 py-4 rounded-xl bg-black/10 border border-white/10 outline-none focus:border-cyan-400 transition"
              />
            </div>

            <div>
              <label className="block mb-2 text-black">Message</label>
              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full px-5 py-4 rounded-xl bg-black/10 border border-white/10 outline-none focus:border-cyan-400 transition resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 transition text-black font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;