import React from 'react';
import AboutSection from './AboutSection';
import WebNavbar from './WebNavbar'
import Projects from './Projects';
import Experience from './Experience';
import Certificate from './Certificate';

const Home = () => {
    return (
        <div>
            <WebNavbar />
            <AboutSection />
            {/* <Skills/> */}
            <Projects />
            <Experience />
            <Certificate />
        </div>
    );
}

export default Home;
