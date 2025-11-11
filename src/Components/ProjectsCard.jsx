import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function ProjectsCard({ icon, title, description, link }) {
    return (
        <Box
            sx={{
                width: {
                    xs: '90%',
                    sm: '70%',
                    md: '45%',
                    lg: '30%'
                },
                borderRadius: 4,
                p: 2,
                transition: "transform 0.3s ease-in-out",
                display: "flex",
                justifyContent: "center",
                '&:hover': {
                    transform: "scale(1.05)",
                },
            }}
        >
            <Card
                variant="outlined"
                sx={{
                    width: '100%',
                    height: { xs: "18rem", sm: "17rem", md: "17rem" },
                    bgcolor: "#03001C",
                    color: "#EEEEEE",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    p: 2,
                }}
            >
                <CardContent>
                    <Typography variant="h5" component="div" sx={{ color: "#B6EADA", mb: 1 }}>
                        {icon}
                    </Typography>
                    <Typography variant="h5" component="div" sx={{ color: "#B6EADA" }}>
                        {title}
                    </Typography>
                    <Typography variant="body2" sx={{ pt: "1.5rem" }}>
                        {description}
                    </Typography>

                    {link ? (
                        <Typography variant="body2" sx={{ pt: "1.5rem" }}>
                            <a target='_blank' rel="noopener noreferrer" href={link}>
                                <FontAwesomeIcon className='text-[2rem]' icon={faGithub} />
                            </a>
                        </Typography>
                    ) : (
                        <code className='pt-6'>GitHub repo pending...</code>
                    )}
                </CardContent>
            </Card>
        </Box>
    );
}
