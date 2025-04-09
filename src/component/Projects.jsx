import React from 'react'
import ScrollFloat from '../react-component/ScrollFloat'
import { Link, useNavigate } from 'react-router-dom'

const Projects = () => {
    const navigate = useNavigate();

    const handleRedirect = () => {
        navigate('/figmadesign'); 
    };
    return (
        <div>

            <div className="bg-[#96ff01]/30 py-24 sm:py-32">
                <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
                    {/* <h2 className="text-center text-base/7 font-semibold text-indigo-600">Deploy faster</h2> */}
                    {/* <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-gray-950 sm:text-5xl">
                        Everything you need to deploy your app
                    </p> */}
                    <div className="text-center ">

                        <ScrollFloat
                            animationDuration={1}
                            ease='back.inOut(2)'
                            scrollStart='center bottom+=50%'
                            scrollEnd='bottom bottom-=40%'
                            stagger={0.03}
                            className="text-3xl"
                        >
                            Projects

                        </ScrollFloat>
                    </div>
                    <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
                        <div className="relative lg:row-span-2">
                            <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]"></div>
                            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                                <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">

                                    <div className="flex items-center justify-between gap-x-6">
                                        <p className=" text-lg font-medium tracking-tight text-[#A30FF7] max-lg:text-center">Rush</p>
                                        <Link to='https://rush-game.vercel.app/' target='_blank' className="text-lg font-semibold text-[#96ff01]">
                                            Link <span aria-hidden="true">→</span>
                                        </Link>
                                    </div>

                                    <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                                        A <span className='text-[#A30FF7]'>Rush Gaming app UI clone</span>  built with <span className='text-blue-400 font-bold'>React</span> and <span className='text-blue-400 font-bold'>Tailwind</span>  offers a responsive, sleek design with smooth navigation, game cards, and interactive elements for a modern UX. 🎮🚀
                                    </p>
                                    <Link to='https://rush-game.vercel.app/' target='_blank' className="text-lg font-bold text-[#96ff01]">
                                        Link <span aria-hidden="true ">→</span>
                                    </Link>
                                </div>
                                <div className="@container relative min-h-[30rem] w-full grow max-lg:mx-auto max-lg:max-w-sm">
                                    <div className="absolute inset-x-10 top-10 bottom-0 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl">
                                        <img
                                            className="size-full object-cover object-top"
                                            src="/project-img/rush.png"
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 lg:rounded-l-[2rem]"></div>
                        </div>
                        <div className="relative max-lg:row-start-1">
                            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]"></div>
                            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                                    <div className="flex items-center justify-between gap-x-6">
                                        <p className=" text-lg font-medium tracking-tight text-[#6B21A8] max-lg:text-center">Tunez</p>
                                        <Link to='https://tunez-five.vercel.app/' target='_blank' className="text-lg font-semibold text-[#96ff01]">
                                            Link <span aria-hidden="true">→</span>
                                        </Link>
                                    </div>
                                    <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                                        A <span className='text-[#6B21A8]'>music streaming website</span> built with <span className='font-bold'>Next.js</span>, <span className='text-blue-500 font-bold'>TypeScript</span>, and <span className='font-bold'>Material UI</span>, offering a sleek UI, seamless playback, and playlist management. 🎵🚀
                                    </p>



                                </div>
                                <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
                                    <img
                                        className="w-full max-lg:max-w-xs"
                                        src="/project-img/Tunez.png"
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 max-lg:rounded-t-[2rem]"></div>
                        </div>
                        <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
                            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]"></div>
                            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                                <div className="px-8 pt-8 sm:px-10 sm:pt-10">

                                    <div className="flex items-center justify-between gap-x-6">
                                        <p className=" text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">E-commerce</p>
                                        <Link to='https://e-commerce-phi-lilac.vercel.app/' target='_blank' className="text-lg font-semibold text-[#96ff01]">
                                            Link <span aria-hidden="true">→</span>
                                        </Link>
                                    </div>
                                    <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                                        A <span className='text-blue-400 font-bold'>React</span> and <span className='text-[#6B21A8] font-bold'>Bootstrap</span> e-commerce site with product listings and a responsive for a smooth shopping experience. 🛒🚀
                                    </p>
                                </div>
                                <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
                                    <img
                                        className="w-full max-lg:max-w-xs"
                                        src="/project-img/shopping.png"
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 max-lg:rounded-t-[2rem]"></div>
                        </div>

                        <div className="relative lg:row-span-2">
                            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
                            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                                <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                                    <div className="flex items-center justify-between gap-x-6">
                                        <p className=" text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Website</p>
                                        <Link to='https://internship-website-five.vercel.app/' target='_blank' className="text-lg font-semibold text-[#96ff01]">
                                            Link <span aria-hidden="true">→</span>
                                        </Link>
                                    </div>

                                    {/* <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                                        Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget sem sodales gravida.
                                    </p> */}
                                </div>
                                <div className="@container relative min-h-[30rem] w-full grow max-lg:mx-auto max-lg:max-w-sm">
                                    <div className="absolute inset-x-10 top-10 bottom-0 overflow-hidden  border-t-[3cqw] shadow-2xl">
                                        <img
                                            className="size-full object-cover object-top"
                                            src="/project-img/newgen.png"
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
                        </div>


                    </div>
                    <button onClick={handleRedirect} className="flex cursor-pointer items-center mt-10">
                        <p className='text-2xl font-semibold text-black mr-10'>Figma Design</p>
                        <span aria-hidden="true" className='text-4xl text-black mr-10'>→</span>
                    </button>
                    {/* <Figma /> */}
                </div>
            </div>
        </div>
    )
}

export default Projects
