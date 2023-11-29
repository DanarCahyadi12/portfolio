import { Link } from "./link";

export interface Project {
    title: string;
    tech: string
    description:string;
    image: string;
    links?: Link[]
}