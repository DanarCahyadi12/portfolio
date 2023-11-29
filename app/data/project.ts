import { Project } from '../interfaces/project';
import { LiaGithub } from 'react-icons/lia';
import { CiGlobe } from "react-icons/ci";
export const projects: Project[] = [
    {
        title: "Netsound",
        image: "/netsound.png",
        description: "Netsound is a music player website. The music data used is sourced from Spotify. So, I use the Spotify API to obtain music data, artist information, playlists, and more.",
        tech: "React, Chakra UI, Spotify API ",
        links: [
            {
             url: 'https://github.com/DanarCahyadi12/netsound',
             icon: LiaGithub
            },
            {
             url: 'https://net-sound.vercel.app',
             icon: CiGlobe
            },
        ]
    },
    {
        title: "FEE school payment",
        image: "/spp.png",
        description: "With the large number of students in the school, it becomes challenging for the school to manage tuition fee payments. Therefore, this website is created to facilitate the school in managing tuition fee payment",
        tech: "PHP, Bootstrap, MySQL",
        links: [
            {
                url: 'https://github.com/DanarCahyadi12/pembayaran-spp',
                icon: LiaGithub
            }
        ]
    },
    {
        title: "API Bookshelf",
        image: "/API.svg",
        description: "API bookshelf is a Dicoding Academy submission. The API bookshelf was created for the final project in the course 'Learn to Create Back-End Applications for Beginners.'",
        tech: "Javascript, Hapi",
        links: [
            {
                url: 'https://github.com/DanarCahyadi12/API-bookshelf',
                icon: LiaGithub
            }
        ]
    },
    {
        title: "Learned (Coming soon)",
        image: "/soon.svg",
        description: "Learned is an e-learning platform based on a website. Learned is designed to assist teachers and students in conducting online learning. Learned can help students in creating school assignments, taking quizzes, studying materials, and more.",
        tech: "Nest JS, Next JS, MySQL",
        links: [
            {
                url: 'https://github.com/DanarCahyadi12/learned-api',
                icon: LiaGithub
            }
        ]
    }
]