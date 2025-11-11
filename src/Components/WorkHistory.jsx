import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import ExperienceCard from './ExperienceCard.jsx';
import { experienceInfo } from './ExperienceInfo.jsx';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

export default function WorkHistory({ timelineRef, personalPageRef }) {


    return (
        <div className='flex flex-col justify-center min-h-screen bg-[#301E67]' ref={timelineRef}>
            <h2 className='flex flex-col justify-center items-center text-[#B6EADA] uppercase text-[2rem]'>
                Work Experience and Education
            </h2>
            <div className='pt-8'>
                <Timeline position="alternate">
                    {experienceInfo.map((experience, index) => {
                        return (
                            <TimelineItem key={index}>
                                <TimelineOppositeContent
                                    sx={{ m: 'auto 0' }}
                                    align="right"
                                    variant="body2"
                                    color="#EEEEEE"
                                >
                                    {experience.tenure}
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineConnector />
                                    <TimelineDot sx={{ backgroundColor: '#EEEEEE' }}>
                                        {experience.icon}
                                    </TimelineDot>
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent sx={{ py: '12px', px: 2 }}>
                                    <div className={`flex flex-col ${index % 2 === 0 ? 'items-start' : 'items-end'}`}>
                                        <ExperienceCard jobRole={experience.jobRole} companyName={experience.companyName} jobDescription={experience.jobDescription} />
                                    </div>
                                </TimelineContent>
                            </TimelineItem>)
                    })}
                </Timeline>
            </div>
            <div className='flex flex-col items-center'>
                <button
                    className="bg-[#03001C] mt-12 px-2 py-2 rounded-[50%] transition-all duration-300 hover:scale-110"
                    onClick={() => {
                        personalPageRef.current.scrollIntoView({
                            behavior: "smooth"
                        })
                    }}
                >
                    <FontAwesomeIcon className="text-[2rem] text-[#B6EADA]" icon={faArrowDown} />
                </button>
            </div>
        </div >
    );
}

