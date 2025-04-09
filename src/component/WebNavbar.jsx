import React, { useEffect, useRef } from 'react'
'use client'

import { useState } from 'react'
import SplitText from '../react-component/SplitText'
import AnimatedContent from '../react-component/AnimatedContent '

const WebNavbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isResumeOpen, setIsResumeOpen] = useState(false);
    const modalRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close modal if clicked outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setIsResumeOpen(false);
            }
        };

        if (isResumeOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isResumeOpen]);

    const handleAnimationComplete = () => {
        console.log('All letters have animated!');
    };

    return (
        <div className="bg-black">
            <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/50 backdrop-blur-md' : 'bg-black'}`}>
                <nav aria-label="Global" className="flex items-center justify-between p-3 lg:px-8">
                    <div className="flex lg:flex-1">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="text-white font-bold text-xl">Portfolio</span>
                        </a>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12">
                        <button
                            onClick={() => setIsResumeOpen(true)}
                            className="rounded-md bg-[#96ff01] px-3.5 py-1.5 text-sm font-semibold text-black shadow-xs hover:bg-white hover:text-black"
                        >
                            My Resume
                        </button>
                    </div>
                </nav>
            </header>

            {/* Modal outside nav, with backdrop click detection */}
            {isResumeOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                    <div
                        ref={modalRef}
                        className="relative w-[90%] max-w-4xl h-[90%] bg-white rounded-lg shadow-lg overflow-hidden"
                    >
                        <button
                            onClick={() => setIsResumeOpen(false)}
                            className="absolute top-2 right-2 text-gray-600 hover:text-black text-xl font-bold"
                        >
                            ×
                        </button>
                        <iframe
                            src="/PoonamRathodResume.pdf"
                            title="Resume"
                            className="w-full h-full p-4"
                        />
                    </div>
                </div>
            )}

            {/* Hero Section */}
            <div className="relative isolate px-6 pt-14 lg:px-8">
                <div aria-hidden="true" className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
                    <div
                        style={{
                            clipPath: 'polygon(...)',
                        }}
                        className="relative left-[calc(50%-11rem)] ..."
                    />
                </div>

                <div className="mx-auto max-w-2xl py-32 sm:py-28 lg:py-36 text-center">
                    <SplitText
                        text="Hi I'm Poonam Rathod."
                        className="text-6xl font-semibold text-center text-white"
                        delay={150}
                        animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                        animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                        easing="easeOutCubic"
                        threshold={0.2}
                        onLetterAnimationComplete={handleAnimationComplete}
                    />
                    <p className='mt-5 text-2xl text-white'>I'm Developer</p>
                    <p className="mt-5 text-lg text-gray-500 sm:text-xl">
                        Hi! I'm a front-end developer with a passion for creating responsive, user-friendly web applications using React, Tailwind CSS, and JavaScript...
                    </p>
                    <div className="mt-10 flex justify-center gap-x-6">
                        <AnimatedContent>
                            <a
                                href="/PoonamRathodResume.pdf"
                                download
                                className="rounded-md bg-[#96ff01] px-3.5 py-2.5 text-sm font-semibold text-black hover:bg-white hover:text-black"
                            >
                                My Resume
                            </a>
                        </AnimatedContent>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WebNavbar;
