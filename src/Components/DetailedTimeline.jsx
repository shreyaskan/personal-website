import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import React from 'react'
import { experienceInfo } from './ExperienceInfo.jsx';
import { DetailedExperienceCard } from './ExperienceCard.jsx';

function DetailedTimeline() {
    return (
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
                                <DetailedExperienceCard jobRole={experience.jobRole} companyName={experience.companyName} jobDescription={experience.jobDescription} />
                            </div>
                        </TimelineContent>
                    </TimelineItem>)
            })}
        </Timeline>
    )
}

export default DetailedTimeline

// <div>
//     <Timeline position="alternate">
//         {experienceInfo.map((experience, index) => {
//             return (
//                 <TimelineItem key={index}>
//                     <TimelineOppositeContent
//                         sx={{ m: 'auto 0' }}
//                         align="right"
//                         variant="body2"
//                         color="#B6EADA"
//                     >
//                         {experience.tenure}
//                     </TimelineOppositeContent>
//                     <TimelineSeparator>
//                         <TimelineConnector />
//                         <TimelineDot sx={{ backgroundColor: '#B6EADA' }}>
//                             {experience.icon}
//                         </TimelineDot>
//                         <TimelineConnector />
//                     </TimelineSeparator>
//                     <TimelineContent sx={{ py: '12px', px: 2 }}>
//                         <div className={`flex flex-col ${index % 2 === 0 ? 'items-start' : 'items-end'}`}>
//                             <DetailedExperienceCard jobRole={experience.jobRole} companyName={experience.companyName} jobDescription={experience.jobDescription} />
//                         </div>
//                     </TimelineContent>
//                 </TimelineItem>)
//         })}
//     </Timeline>
// </div >