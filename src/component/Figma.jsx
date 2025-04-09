import { motion } from 'framer-motion';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Figma = () => {
    const navigate = useNavigate();
    const onclick =() =>{
        navigate("/")

    }

    const designs = [
        { id: 1, title: "Trip Booking Web Design", img: "/project-img/figma1.png", url:'https://www.figma.com/proto/D2aKRgSjwTT3eebiEy0CEa/Untitled?node-id=3-2&t=k8A5LH2bIcC3M1om-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=3%3A2' },
        { id: 2, title: "City Slider ", img: "/project-img/city_slider.png", url:'https://www.figma.com/proto/e8zyZu5bOx3tpEIY6FcLh7/City-Slider?node-id=4-3&starting-point-node-id=4%3A3&scaling=contain&mode=design&t=vUmjTVpTpxnlL08b-1' },
        { id: 3, title: "Monster Drink Design", img: "/project-img/monster_drink.png", url:'https://www.figma.com/proto/T9x0PU5ozjKQaEftpeDaER/Monster-drink-site?type=design&node-id=7-40&t=kbnV57tCD2Bwc4f9-1&scaling=contain&page-id=0%3A1&starting-point-node-id=1%3A3&mode=design' },
        { id: 4, title: "Pizza Design", img: "/project-img/pizza.png", url:'https://www.figma.com/proto/abpcn9D74raFCm3cHmwrO5/Pizza-Website?type=design&node-id=8-55&t=phjpXrQXhykqhRKu-0&scaling=scale-down&page-id=0%3A1&starting-point-node-id=26%3A31' },
        { id: 5, title: "Portfolio Design", img: "/project-img/portfolio_1.png", url:'https://www.figma.com/proto/CfahT10TknOVeeufNRp2Uv/PortFolio?type=design&node-id=93-319&t=hwWmQlQfiniheaFv-1&scaling=min-zoom&page-id=0%3A1' },
        { id: 6, title: "Lays Design", img: "/project-img/lays.png", url:'https://www.figma.com/proto/WpzG1CnYNV3MWsX4s4ybym/Lays-Animation?type=design&node-id=5-150&t=INRM6voTWdzpz68M-1&scaling=scale-down&page-id=0%3A1&mode=design' },
    ];

    return (
        <section className="px-6 py-12 bg-[#9dff19]/90 mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
            <button className='border border-dotted px-[10px]  border-black font-semibold flex items-center'onClick={onclick}><span aria-hidden="true" className='text-4xl text-black mr-4'>←</span>Back</button>
            <h2 className="text-4xl font-bold text-center mb-10">Figma Design </h2>

            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 ">
                {designs.map((design) => (
                    <a
                        href={design.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        key={design.id}
                    >
                        <motion.div
                            key={design.id}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                            className="bg-white rounded-lg overflow-hidden shadow-md cursor-pointer hover:shadow-xl transform hover:-translate-y-1"
                        >
                            <img
                                src={design.img}
                                alt={design.title}
                                className="w-full h-56 object-cover p-4"
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-gray-800">{design.title}</h3>
                            </div>
                        </motion.div>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default Figma;
