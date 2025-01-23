import React, { useState, useEffect } from 'react'
import Button from '../components/Button'
import Project from '../components/Project'
import { motion } from 'framer-motion';
import vid1 from '../assets/vid1.mp4'
import vid2 from '../assets/vid2.mp4'
import vid3 from '../assets/vid3.mp4'
import vid4 from '../assets/vid4.mp4'
import { FaArrowTurnDown } from "react-icons/fa6";

function Projects() {
    const data = [
        {
            name: "Portfolio",
            desc: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi accusantium natus neque necessitatibus excepturi suscipit odio dignissimos doloremque, facere, ipsam cumque reiciendis omnis.",
            live: true,
            video: vid1
        },
        {
            name: "SnapBox",
            desc: " SnapBox is a photo-sharing web app that lets users upload, organize, and manage their photos securely. It ensures safe access to personal galleries.",
            live: true,
            video: vid2
        },
        {
            name: "Quizify",
            desc: " Quizify is an interactive quiz web app that allows users to take quizzes, track their scores, and view a leaderboard.",
            live: true,
            video: vid3
        },
        {
            name: "Refokus clone",
            desc: "Refokus is a visually captivating animated website designed to engage users with dynamic, interactive animations that enhance the overall browsing experience.",
            live: false,
            video: vid4
        },
        {
            name: "Traversal Club Website",
            desc: "Traversal is a dynamic and visually engaging club website that uses captivating animations to highlight key content, events, and club activities, creating an engaging environment for visitors. ",
            live: true,
            video: vid1
        }
    ];

    const [pos, setPos] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const mover = (val) => {
        if (!isMobile) {
            setPos(val * 319);
        }
    };

    return (
        <div className="container p-4 md:p-10 bg-[#141516] font-mono flex flex-col">
            <div className="max-w-6xl mx-auto w-full">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-mono text-zinc-100 py-6 md:py-10 flex items-center">
                    <FaArrowTurnDown className="mr-2 mt-2 md:mt-6" /> Projects
                </h2>
                <div className='relative mt-10 md:mt-20 flex flex-col bg-[#141516] text-white'>
                    {/* Desktop View */}
                    <div className="hidden lg:block">
                        {data.map((item, index) => (
                            <Project key={index} val={item} count={index} mover={mover} />
                        ))}
                        
                        <div className='absolute top-0 w-full h-full pointer-events-none'>
                            <motion.div
                                initial={{ y: pos }}
                                animate={{ y: pos }}
                                className='window absolute w-[26rem] h-[319px] left-[30%] overflow-hidden rounded-3xl'
                            >
                                {data.map((item, index) => (
                                    <motion.div key={index} animate={{ y: -pos + 'px' }} className='w-[26rem] h-[320px]'>
                                        <video className='absolute object-cover rounded-3xl' src={item.video} autoPlay loop muted></video>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </div>

                    {/* Mobile View */}
                    <div className='lg:hidden space-y-16'>
                        {data.map((item, index) => (
                            <div key={index} className="space-y-6">
                                <div className='font-mono text-3xl md:text-4xl'>
                                    <h1>{item.name}</h1>
                                </div>
                                <div className='w-full'>
                                    <p className='mb-6 text-sm md:text-base text-zinc-400'>{item.desc}</p>
                                    <div className='flex flex-wrap gap-3'>
                                        {item.live && <Button title='Live link'/>}
                                        <Button title='Source Code'/>
                                    </div>
                                </div>
                                <div className='w-full aspect-video rounded-2xl overflow-hidden'>
                                    <video 
                                        className='w-full h-full object-cover'
                                        src={item.video}
                                        autoPlay 
                                        loop 
                                        muted
                                    ></video>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects