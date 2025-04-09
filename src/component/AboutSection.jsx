import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

// Skills array
const skills = [
  "HTML", "CSS", "JavaScript", "React.js", "Tailwind css", "Next.js", "Bootstrap", "GitHub", "Jest", "Node.js", "MongoDB"
];
// Skills array
const skills1 = [
  "Figma", "Material UI", "Vibe Coding", "Gen AI", "Prompt Engineering", "Formik", "Yup", "Axios", "API"
];

// Reveal Wrapper with animation
const RevealWrapper = ({ children, overlayColor }) => (
  <div className="relative overflow-hidden">
    {/* Overlay Animation */}
    <motion.div
      initial={{ width: "100%" }}
      whileInView={{ width: 0 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
      className={`absolute top-0 left-0 h-full ${overlayColor} z-10`}
    />

    {/* Content Animation */}
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative "
    >
      {children}
    </motion.div>
  </div>
);

const AboutSection = () => {

  const [clicked, setClicked] = useState(null);

  const handleClick = (id, url) => {
    setClicked(id);
    setTimeout(() => {
      setClicked(null);
      window.open(url, "_blank");
    }, 150); // short delay to allow animation
  };

  const socialLinks = [
    { id: 1, icon: <FaLinkedin />, url: "https://www.linkedin.com/in/poonam-rathod-835584229/" },
    { id: 2, icon: <FaGithub />, url: "https://github.com/rathodpoonam/rathodpoonam" },
    { id: 3, icon: <FaInstagram />, url: "https://instagram.com/yourprofile" },
    { id: 4, icon: <MdEmail />, url: "mailto:yourmail@gmail.com" }, 
  ];
  return (
    <section id="about" className="py-16 px-4 md:px-12 bg-white text-black pb-0">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Left - Bio */}

        <RevealWrapper overlayColor="bg-[#96ff01]">
          <div>

            <h1 className="text-4xl font-semibold mb-4 text-[#96ff01]">About Me</h1>
            <div className="text-base leading-relaxed text-black">
              <p>

                I'm a passionate front-end developer with a background in engineering and a strong focus on crafting user-friendly web applications. I completed my graduation in Electrical Engineering in 2022 and have since transitioned into the tech field, driven by curiosity and creativity. I’ve completed a Full Stack Java Development course, gaining a solid foundation in both front-end and back-end technologies. I’ve also earned certifications in Figma, React, and recently completed a Generative AI course by Google.
              </p>
              <p>

                During my internship at Codestrup Infotech Pvt Ltd, I worked on real-world projects where I developed responsive interfaces using React, Tailwind CSS, and JavaScript and design Figma Design. I enjoy solving problems, building clean and efficient solutions, and turning design ideas into interactive experiences. I’m always eager to learn new tools and technologies, constantly pushing myself to grow and stay current in the fast-paced world of web development.
              </p>

            </div>
          </div>
        </RevealWrapper>

        {/* Right Side */}
        <div className="flex flex-col space-y-6 mb-[6rem]">

          {/* Skills */}
          <RevealWrapper overlayColor="bg-[#96ff01]">
            <div>
              <h3 className="text-xl font-semibold mb-2 text-[#96ff01]">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="text-xs border border-gray-400 px-3 py-1 rounded-[5px] bg-black text-white"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </RevealWrapper>
          <hr className="my-8 border-t-2 border-[#96ff01] w-3/4 mx-auto" />
          {/* Extra Info */}
          <RevealWrapper overlayColor="bg-[#96ff01]">
            <div>
              <h3 className="text-xl font-semibold mb-2 text-[#96ff01]">Other Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills1.map((skill, index) => (
                  <span
                    key={index}
                    className="text-xs border border-gray-400 px-3 py-1 rounded-[5px] bg-black text-white"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="border border-dashed border-gray-500 p-4 rounded-md text-sm text-gray-300 mt-8 flex gap-6 bg-[#96ff01]">
              {socialLinks.map(({ id, icon, url }) => (
                <div
                  key={id}
                  onClick={() => handleClick(id, url)}
                  className={`text-black text-xl cursor-pointer transition-transform duration-150 ${clicked === id ? "scale-90" : "hover:scale-110"
                    }`}
                >
                  {icon}
                </div>
              ))}
            </div>
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
