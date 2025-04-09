import React, { useState } from "react";
import { motion } from "framer-motion";

// Skills array
const skills = [
    "React.js", "Next.js","Tailwind css",  "Bootstrap","Material UI", "GitHub",  "MongoDB", "Figma", "Formik" ,'Yup', "Axios"
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

const Experience = () => {
      const [showPopupf, setShowPopupf] = useState(false);
    
        const handleOpenf = () => setShowPopupf(true);
        const handleClosef = () => setShowPopupf(false);
    return (
        <section id="experience" className="py-16 px-4 md:px-12 bg-white text-black pb-0">
            <div className="grid grid-cols-1 md:grid-cols-1 gap-8">

                {/* Left - Bio */}

                <RevealWrapper overlayColor="bg-[#96ff01]">
                    <div>

                        <h1 className="text-4xl font-semibold mb-4 text-[#96ff01]">Experience</h1>


                    </div>
                </RevealWrapper>

                {/* Right Side */}
                <div className="flex flex-col space-y-6 mb-[6rem]">

                    {/* Skills */}
                    <RevealWrapper overlayColor="bg-[#96ff01]">
                        <div>
                            <div className="flex justify-between ">
                                <div className="font-bold text-lg mb-1"> Codestrup Infotech Pvt Ltd.</div>
                                <div className="mb-1">April 2024 - Oct 2024</div>
                            </div>
                            <div className="flex justify-between ">
                                <div className="font-semibold  mb-4">Web Developer Intern</div>
                                <div className="mb-4">Nanded City, Pune</div>
                            </div>
                            <p className="text-base leading-relaxed text-black">
                                Hi! I’m a passionate front-end developer who enjoys crafting beautiful and functional web applications. With a background in React, Tailwind CSS, and JavaScript, I bring ideas to life with responsive and user-friendly designs. I also have hands-on experience with Figma and wireframing, allowing me to bridge the gap between design and development seamlessly. I love building things that live on the web. I love building things that live on the web.
                            </p>
                            <h3 className="text-xl font-semibold mb-2 text-[#96ff01]">Skills Use In</h3>
                            <div className="flex justify-between">

                            <div className="flex flex-wrap gap-2 items-center">
                                {skills.map((skill, index) => (
                                    <span
                                        key={index}
                                        className="text-xs border border-gray-400 px-3 py-1 rounded-[5px] bg-black text-white"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                            <button
                                        onClick={handleOpenf}
                                        className="rounded-md bg-[#96ff01] px-3.5 py-2.5 text-sm font-semibold text-black
          shadow-xs hover:bg-white border border-[#96ff01] hover:text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        Completion Certificate
                                    </button>

                                    {showPopupf && (
                                       <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center overflow-auto">
                                       <div className="bg-white p-4 rounded-lg max-w-3xl w-full relative overflow-auto max-h-[90vh]">
                                         <button
                                           onClick={handleClosef}
                                           className="absolute top-2 right-2 text-gray-600 text-xl font-bold hover:text-black"
                                         >
                                           &times;
                                         </button>
                                         <div
                                           onDoubleClick={(e) => {
                                             const img = e.currentTarget.querySelector("img");
                                             img.classList.toggle("scale-[2]");
                                           }}
                                           className="overflow-auto transition-transform duration-300 cursor-zoom-in"
                                         >
                                           <img
                                             src="/interncertificate.jpeg"
                                             alt="Internship Certificate"
                                             className="w-full h-auto rounded-md transition-transform duration-300"
                                           />
                                         </div>
                                       </div>
                                     </div>
                                     
                                    )}
                            </div>
                        </div>
                    </RevealWrapper>
                    <hr className="my-8 border-t-2 border-[#96ff01] w-3/4 mx-auto" />
                 
                </div>
            </div>
        </section>
    );
}

export default Experience;
