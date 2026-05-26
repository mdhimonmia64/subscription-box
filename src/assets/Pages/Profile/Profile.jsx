import React from "react";

const Profile = () => {
  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center">
          <div className="relative group">
            <img
              src="https://i.ibb.co.com/RT48rqhd/mdhimonmia.png"
              alt="Profile"
              className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] object-cover rounded-3xl border-4 border-cyan-400 shadow-2xl transition duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 rounded-3xl bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition duration-500"></div>
          </div>
        </div>

        <div>
          <p className="text-cyan-400 uppercase tracking-[4px] mb-4">
            MERN Stack Developer
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Hi, I'm <span className="text-cyan-400">Himon</span>
          </h1>

          <p className="text-slate-400 mt-6 leading-8 text-lg">
            Passionate frontend and MERN stack developer focused on creating
            modern, responsive, and user-friendly web applications using React,
            Next.js, Tailwind CSS, Node.js, Express, and MongoDB.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">
            <a
              href="/contactMe"
              className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 transition rounded-full font-semibold text-black"
            >
              Contact Me
            </a>

            <a
              href="https://i.ibb.co.com/ZzxKQx0x/MERN-Stack-Developer.png"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-cyan-400 rounded-full hover:bg-cyan-500 hover:text-black transition font-semibold"
            >
              Download Resume
            </a>
          </div>
          <div className="flex flex-wrap gap-3 mt-10">
            {[
              "React",
              "Next.js",
              "Tailwind",
              "Firebase",
              "MongoDB",
              "Node.js",
            ].map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-cyan-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
