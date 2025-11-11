import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import './index.css'
import { TypeAnimation } from 'react-type-animation';
import TechStack from './Components/TechStack';

function LandingPage({ timelineRef, landingPageRef }) {


    const [showDescription, setShowDescription] = useState(false)
    const [showBirthPlace, setShowBirthPlace] = useState(false)

    useEffect(() => {
        const descTimer = setTimeout(() => {
            setShowDescription(true);
        }, 2000);
        const birthPlaceTimer = setTimeout(() => {
            setShowBirthPlace(true);
        }, 6000);

        return () => {
            clearTimeout(descTimer);
            clearTimeout(birthPlaceTimer);
        }
    }, []);

    return (
        <div ref={landingPageRef} className='flex flex-col justify-center items-center min-h-screen bg-[#301E67]'>
            <TypeAnimation
                sequence={[
                    'Hi, I\'m Shreyas',

                ]}
                wrapper="span"
                cursor={false}
                style={{ fontSize: '2.5em', color: '#B6EADA' }}
            />
            {showDescription && <TypeAnimation
                sequence={[
                    'Full stack engineer who\'s passionate about building applications.'
                ]}
                wrapper="span"
                speed={{ type: "keyStrokeDelayInMs", value: 50 }}
                cursor={false}
                style={{ fontSize: '1.5em', color: '#B6EADA', paddingTop: '10px' }}
            />}
            {showBirthPlace && <TypeAnimation
                sequence={[
                    'Born in Bellary, India'
                ]}
                wrapper="span"
                cursor={false}
                speed={{ type: "keyStrokeDelayInMs", value: 10 }}
                style={{ fontSize: '1em', color: '#B6EADA', paddingTop: '10px' }}
            />}
            <div className="bg-[#03001C] mt-8 px-4 py-3 rounded-xl flex justify-around">
                <a target="_blank" href="https://www.linkedin.com/in/shreyas-kanyady/" className="pr-4">
                    <FontAwesomeIcon className="text-[2rem] text-[#B6EADA]  transition-all duration-300 hover:scale-140" icon={faLinkedin} />
                </a>
                <a target="_blank" href="https://github.com/shreyaskan" className="pr-4">
                    <FontAwesomeIcon className="text-[2rem] text-[#B6EADA] transition-all duration-300 hover:scale-140" icon={faGithub} />
                </a>
                <a target="_blank" href="mailto:shreyas.kanyady@gmail.com" className="pr-4">
                    <FontAwesomeIcon className="text-[2rem] text-[#B6EADA] transition-all duration-300 hover:scale-140" icon={faEnvelope} />
                </a>
            </div>
            <TechStack />
            <button
                className="bg-[#03001C] mt-20 px-2 py-2 rounded-[50%]  transition-all duration-300 hover:scale-110"
                onClick={() => {
                    timelineRef.current.scrollIntoView({
                        behavior: "smooth"
                    })
                }}
            >
                <FontAwesomeIcon className="text-[2rem] text-[#B6EADA]" icon={faArrowDown} />
            </button>
        </div>
    )
}

export default LandingPage
