import React, { useState } from "react";
import { motion } from "framer-motion";

// Skills array
const skills = [
    "HTML", "CSS", "Javascript", "Java", "SQL"
];
const skillsfigma = [
    "Figma", "UI & UX Design", "Wireframes", "Prototypes"
];
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


const Certificate = () => {
    const [showPopup, setShowPopup] = useState(false);

    const handleOpen = () => setShowPopup(true);
    const handleClose = () => setShowPopup(false);

    const [showPopupf, setShowPopupf] = useState(false);

    const handleOpenf = () => setShowPopupf(true);
    const handleClosef = () => setShowPopupf(false);
    return (
        <section id="experience" className="py-16 px-4 md:px-12 bg-white text-black pb-0">
            <div className="grid grid-cols-1 md:grid-cols-1 gap-8">

                {/* Left - Bio */}

                <RevealWrapper overlayColor="bg-[#96ff01]">
                    <div>

                        <h1 className="text-4xl font-semibold mb-4 text-[#96ff01]">Achievement</h1>


                    </div>
                </RevealWrapper>

                {/* Right Side */}
                <div className="flex flex-col space-y-6 mb-[6rem]">

                    {/* java certification */}
                    <RevealWrapper overlayColor="bg-[#96ff01]">
                        <div>
                            <div className="flex justify-between ">
                                <div className="font-bold text-lg mb-1">Full Stack Java Development</div>
                                <div className="mb-1"> 2024 </div>
                            </div>
                            <div className="flex justify-between ">
                                <div className="font-semibold  mb-4">Java Development</div>
                                <div className="mb-4">Punjagutta, Hyderabad</div>
                            </div>
                            <p className="text-base leading-relaxed text-black">
                                Hi! I Have successfully completed a Full Stack Java Development course, gaining strong knowledge in core Java, and SQL. I specialize in building responsive and interactive web applications using React, Tailwind CSS, and JavaScript. I’m also certified in Figma and React, I enjoy solving problems through code and continuously look for opportunities to learn new technologies and enhance my skills.
                            </p>




                            <h3 className="text-xl font-semibold mb-2 text-[#96ff01]">Skills Use In</h3>
                            <div className="flex justify-between">

                                <div className="flex flex-wrap gap-2 items-center">
                                    {skills.map((skill, index) => (
                                        <span
                                            key={index}
                                            className="text-xs border border-gray-400 px-3 py-1 rounded-[5px] bg-black text-white "
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                                <div className="">
                                    <button
                                        onClick={handleOpen}
                                        className="rounded-md bg-[#96ff01] px-3.5 py-2.5 text-sm font-semibold text-black
          shadow-xs hover:bg-white border border-[#96ff01] hover:text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        Certificate
                                    </button>

                                    {showPopup && (
                                       <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center overflow-auto">
                                       <div className="bg-white p-4 rounded-lg max-w-3xl w-full relative overflow-auto max-h-[90vh]">
                                         <button
                                           onClick={handleClose}
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
                                             src="/java.jpeg"
                                             alt="Java Certificate"
                                             className="w-full h-auto rounded-md transition-transform duration-300"
                                           />
                                         </div>
                                       </div>
                                     </div>
                                     
                                    )}
                                </div>
                            </div>

                           

                        </div>
                    </RevealWrapper>
                    <hr className="my-8 border-t-2 border-[#96ff01] w-3/4 mx-auto" />


                    {/* Figma certification */}
                    <RevealWrapper overlayColor="bg-[#96ff01]">
                        <div>
                            <div className="flex justify-between ">
                                <div className="font-bold text-lg mb-1">Figma Certification</div>
                                <div className="mb-1">By UI & UX Designer Željko Milivojević,</div>
                            </div>
                            <div className="flex justify-between ">
                                <div className="font-semibold  mb-4">Figma </div>
                                <div className="mb-4">Udemy</div>
                            </div>
                            <p className="text-base leading-relaxed text-black">
                                Through my Figma certification course, I learned to design responsive web and mobile layouts, create structured wireframes, and build interactive prototypes with animations. I also gained skills in organizing design systems, automating workflows, and optimizing project structures for real-world client work.
                            </p>






                            <h3 className="text-xl font-semibold mb-2 text-[#96ff01]">Skills Use In</h3>
                            <div className="flex justify-between">

                                <div className="flex flex-wrap gap-2 items-center">
                                    {skillsfigma.map((skill, index) => (
                                        <span
                                            key={index}
                                            className="text-xs border border-gray-400 px-3 py-1 rounded-[5px] bg-black text-white "
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                                <div className="">
                                    <button
                                        onClick={handleOpenf}
                                        className="rounded-md bg-[#96ff01] px-3.5 py-2.5 text-sm font-semibold text-black
          shadow-xs hover:bg-white border border-[#96ff01] hover:text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        Certificate
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
                                         src="/figma.jpeg"
                                         alt="figma Certificate"
                                         className="w-full h-auto rounded-md transition-transform duration-300"
                                       />
                                     </div>
                                   </div>
                                 </div>
                                 
                                   
                                    )}
                                </div>
                            </div>

                            {/* <div className="">

                                <button
                                    href="/PoonamRathodResume.pdf"
                                    download
                                    className="rounded-md bg-[#96ff01] px-3.5 py-2.5 text-sm font-semibold text-black
          shadow-xs hover:bg-white hover:text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    My Resume
                                </button>

                            </div> */}

                        </div>
                    </RevealWrapper>
                    <hr className="my-8 border-t-2 border-[#96ff01] w-3/4 mx-auto" />

                </div>
            </div>
        </section>
    );
}

export default Certificate;
