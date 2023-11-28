import { Project } from '../interfaces/project';
export const projects: Project[] = [
    {
        title: "Netsound",
        image: "/netsound.png",
        description: "Netsound is a music player website. The music data used is sourced from Spotify. So, I use the Spotify API to obtain music data, artist information, playlists, and more.",
        tech: "React, Chakra UI, Spotify API "
    },
    {
        title: "FEE school payment",
        image: "/spp.png",
        description: "With the large number of students in the school, it becomes challenging for the school to manage tuition fee payments. Therefore, this website is created to facilitate the school in managing tuition fee payment",
        tech: "PHP, Bootstrap, MySQL"
    },
    {
        title: "Learned (Coming soon)",
        image: "/soon.svg",
        description: "Learned is an e-learning platform based on a website. Learned is designed to assist teachers and students in conducting online learning. Learned can help students in creating school assignments, taking quizzes, studying materials, and more.",
        tech: "Nest JS, Next JS, MySQL"
    }
]