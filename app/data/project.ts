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
        title: "Google authentication",
        image: "/API.svg",
        description: "Sign In with google in nest JS. This authentication using passport and JWT (Json Web Token). After login with google account, refresh and access token will generated. Refresh token will stored at cookie and database. Refresh token at cookie will expire in 3 days. For more secure, refresh token at database is hashed before stored.",
        tech: "Nest JS, MySQL",
        links: [
            {
             url: 'https://github.com/DanarCahyadi12/nestjs-google-oauth',
             icon: LiaGithub
            },
        ]
    },
    {
        title: "CRUD operations",
        image: "/API.svg",
        description: "Simple CRUD(Create, Read, Update, Delete) operations with authentication using JWT (JSON Web Token).",
        tech: "Nest JS, MySQL",
        links: [
            {
             url: 'https://github.com/DanarCahyadi12/nestjs-crud',
             icon: LiaGithub
            },
        ]
    },
    {
        title: "CRUD operations",
        image: "/API.svg",
        description: "Simple CRUD(Create, Read, Update, Delete) operations with authentication using JWT (JSON Web Token) and clean architecure.",
        tech: "Golang, MySQL",
        links: [
            {
             url: 'https://github.com/DanarCahyadi12/golang-crud',
             icon: LiaGithub
            },
        ]
    },
    {
        title: "Trisandya App",
        image: "/pura-bali.jpg",
        description: "This application is an application where there is a collection of Hindu prayers. In addition, there is a collection of Hindu slokas. This application also features an alarm that will automatically play the Puja Trisandya song every 12 PM, 6 PM, and 6 AM.",
        tech: "Java, Android Studio",
        links: [
            {
             url: 'https://github.com/DanarCahyadi12/trisandya-app',
             icon: LiaGithub
            },
        ]
    },
]