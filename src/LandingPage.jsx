import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import './index.css'
import { TypeAnimation } from 'react-type-animation';
import TechStack from './Components/TechStack';
import useMediaQuery from '@mui/material/useMediaQuery';

export const socials = [
    {
        icon: faLinkedin,
        href: "https://www.linkedin.com/in/shreyas-kanyady/",
    },
    {
        icon: faGithub,
        href: "https://github.com/shreyaskan",
    },
    {
        icon: faEnvelope,
        href: "mailto:shreyas.kanyady@gmail.com",
    },
];

function LandingPage({ timelineRef, landingPageRef }) {
    const [showDescription, setShowDescription] = useState(false)
    const [showBirthPlace, setShowBirthPlace] = useState(false)
    const isMobile = useMediaQuery('(max-width: 768px)');

    useEffect(() => {
        const descTimer = setTimeout(() => setShowDescription(true), 2000);
        const birthPlaceTimer = setTimeout(() => setShowBirthPlace(true), 6000);
        return () => {
            clearTimeout(descTimer);
            clearTimeout(birthPlaceTimer);
        }
    }, []);

    return (
        <div
            ref={landingPageRef}
            className="flex flex-col justify-center items-center min-h-screen bg-[#301E67] text-center px-4"
        >
            <div className="py-6 sm:py-4 md:py-8">
                <TypeAnimation
                    sequence={["Hi, I'm Shreyas"]}
                    wrapper="span"
                    cursor={false}
                    className="text-[#B6EADA] text-3xl sm:text-4xl md:text-5xl md:mt-8"
                />
            </div>
            {showDescription && (
                <TypeAnimation
                    sequence={[
                        "Full stack engineer who's passionate about building applications."
                    ]}
                    wrapper="span"
                    speed={{ type: "keyStrokeDelayInMs", value: 50 }}
                    cursor={false}
                    className="text-[#B6EADA] text-base sm:text-lg md:text-xl mt-3 block"
                />
            )}
            {showBirthPlace && (
                <TypeAnimation
                    sequence={["Based in Reading, England"]}
                    wrapper="span"
                    cursor={false}
                    speed={{ type: "keyStrokeDelayInMs", value: 30 }}
                    className="text-[#B6EADA] text-sm sm:text-base mt-2 block"
                />
            )}

            <div className="bg-[#03001C] my-8 px-3 py-2 sm:px-4 sm:py-3 rounded-xl flex justify-around scale-90 sm:scale-95 md:scale-100">
                {socials.map((social, index) => {
                    return (
                        <a
                            key={index}
                            target="_blank"
                            href={social.href}
                            className="pr-3 sm:pr-4"
                        >
                            <FontAwesomeIcon
                                className="text-[#B6EADA] text-xl sm:text-2xl md:text-[2rem] transition-transform duration-300 hover:scale-125"
                                icon={social.icon}
                            />
                        </a>
                    )
                })}
            </div>
            <TechStack />
            {!isMobile && <button
                className="bg-[#03001C] mt-16 sm:mt-20 px-2 py-2 rounded-full transition-transform duration-300 hover:scale-110"
                onClick={() => {
                    timelineRef.current.scrollIntoView({ behavior: "smooth" });
                }}
            >
                <FontAwesomeIcon
                    className="text-[#B6EADA] text-xl sm:text-2xl md:text-[2rem]"
                    icon={faArrowDown}
                />
            </button>}
        </div>
    )
}

export default LandingPage
