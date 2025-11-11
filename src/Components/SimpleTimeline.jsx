import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { experienceInfo } from './ExperienceInfo.jsx';
import { SimpleExperienceCard } from './ExperienceCard.jsx';
import Box from '@mui/material/Box';

export default function SimpleTimeline() {
    return (
        <Timeline
            sx={{
                width: '100%',
                ml: { xs: -1, sm: -1 },
                pl: { xs: 0, sm: 0 },
            }}
            position="right"
        >
            {experienceInfo.map((experience, index) => (
                <TimelineItem key={index}>
                    <TimelineSeparator>
                        <TimelineDot sx={{ backgroundColor: '#B6EADA' }}>
                            {experience.icon}
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>

                    <TimelineContent
                        sx={{
                            py: 1,
                            px: 1,
                            ml: -1,
                            maxWidth: { xs: '90vw', sm: '70vw', md: '500px' },
                        }}
                    >
                        <Box className="flex flex-col justify-start items-start">
                            <SimpleExperienceCard
                                jobRole={experience.jobRole}
                                companyName={experience.companyName}
                                tenure={experience.tenure}
                            />
                        </Box>
                    </TimelineContent>
                </TimelineItem>
            ))}
        </Timeline>
    );
}
