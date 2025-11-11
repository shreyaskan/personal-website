import CloudIcon from '@mui/icons-material/Cloud';
import Face6Icon from '@mui/icons-material/Face6';
import ExtensionIcon from '@mui/icons-material/Extension';

export const personalProjectsInfo = [
    {
        icon: <CloudIcon sx={{ fontSize: "4rem" }} />,
        title: "Live Weather Data App",
        description: "A weather application with user authentication built using React Router 7 and Supabase ORM",
    },
    {
        icon: <Face6Icon sx={{ fontSize: "4rem" }} />,
        title: "Facial Recognition App",
        description: "A facial recognition application using Siamese Neural Networks on Python",
        githubLink: "https://github.com/shreyaskan/facial-recognition-app"
    },
    {
        icon: <ExtensionIcon sx={{ fontSize: "4rem" }} />,
        title: "Wordle App",
        description: "My own version of the New York Times game",
        githubLink: "https://github.com/shreyaskan/wordle"
    }
]