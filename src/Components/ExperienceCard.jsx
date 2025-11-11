import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


export default function ExperienceCard({ jobRole, companyName, jobDescription }) {
    return (
        <Box sx={{ width: 400, borderRadius: 3, color: "#B6EADA" }}>
            <Card variant="outlined" sx={{ bgcolor: "#03001C" }}>
                <CardContent sx={{ color: "#B6EADA" }}>
                    <Typography variant="h5" component="div" color="inherit">
                        {jobRole}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="inherit">
                        {companyName}
                    </Typography>
                    <Typography variant="body2" color="inherit">
                        {jobDescription}
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
}
