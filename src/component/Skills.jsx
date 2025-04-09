import React from "react";
import ScrollFloat from "../react-component/ScrollFloat";

const Skills = () => {
  const skills = [
    { name: "React", src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
    { name: "Next.js", src: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg" },
    { name: "HTML", src: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" },
    { name: "CSS", src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" },
    { name: "JavaScript", src: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" },
    { name: "Tailwind CSS", src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
    { name: "Bootstrap", src: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg" },
    { name: "Node.js", src: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" },
    { name: "MongoDB", src: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg" },
    { name: "Figma", src: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" },
    { name: "GitHub", src: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" },
     { name: "Jest", src: "https://jestjs.io/img/jest.png" }


    
  ];

  return (
    <div className="bg-white py-20 sm:py-16">
      <div className="text-center pb-12">
      
      <ScrollFloat
        animationDuration={1}
        ease='back.inOut(2)'
        scrollStart='center bottom+=50%'
        scrollEnd='bottom bottom-=40%'
        stagger={0.03} 
        className="text-sm"
      >
        My Skills & Technologies
        
      </ScrollFloat>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">



        {/* reactbits */}
        {/* <h2 className="text-center text-[clamp(1.6rem, 8vw, 10rem)] font-semibold text-[#96ff01] pb-20">
          My Skills & Technologies
        </h2> */}

        {/* First 6 logos */}
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-3 gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 lg:mx-0 lg:max-w-none">
          {skills.slice(0, 6).map((skill, index) => (
            <div key={index} className="flex flex-col items-center col-span-1">
              <img
                src={skill.src}
                alt={skill.name}
                width={80}
                height={80}
                className="max-h-12 w-auto object-contain"
              />
              <p className="mt-2 text-sm font-medium text-gray-900">{skill.name}</p>
            </div>
          ))}
        </div>

        {/* Separator Line */}
        <hr className="my-8 border-t-2 border-[#96ff01] w-3/4 mx-auto" />

        {/* Second 6 logos */}
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-3 gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 lg:mx-0 lg:max-w-none">
          {skills.slice(6).map((skill, index) => (
            <div key={index} className="flex flex-col items-center col-span-1">
              <img
                src={skill.src}
                alt={skill.name}
                width={80}
                height={80}
                className="max-h-12 w-auto object-contain"
              />
              <p className="mt-2 text-sm font-medium text-gray-900">{skill.name}</p>
            </div>
          ))}
        </div>

      </div>
      

    </div>

  );
};

export default Skills;
