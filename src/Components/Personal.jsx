import React from 'react'
import ProjectsCard from './ProjectsCard'
import { personalProjectsInfo } from './PersonalInfo'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

function Personal({ landingPageRef, personalPageRef }) {
    return (
        <>
            <div ref={personalPageRef} className='flex flex-col justify-start items-center min-h-screen bg-[#301E67]'>
                <h2 className='flex flex-col justify-center items-center text-[#B6EADA] uppercase text-[2rem] py-8'>
                    Personal Projects
                </h2>
                <div className='flex flex-col md:flex-row justify-center items-center flex-wrap gap-6 min-w-[content]'>
                    {personalProjectsInfo.map((project, index) => {
                        return (
                            <ProjectsCard key={index} title={project.title} description={project.description} icon={project.icon} link={project.githubLink} />
                        )
                    })}
                </div>
                <button
                    className="bg-[#03001C] mt-20 md:mt-60 mb-10 px-2 py-2 rounded-[50%]  transition-all duration-300 hover:scale-110"
                    onClick={() => {
                        landingPageRef.current.scrollIntoView({
                            behavior: "smooth"
                        })
                    }}
                >
                    <FontAwesomeIcon className="text-[2rem] text-[#B6EADA]" icon={faArrowUp} />
                </button>
            </div>
        </>
    )
}

export default Personal
