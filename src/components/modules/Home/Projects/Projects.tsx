"use client"
import { useEffect, useState } from "react";
import SingleProject from "./SingleProject";
import SectionHeading from "@/components/shared/SectionHeading";
import Link from "next/link";


const Projects = () => {

    const [projects, setProjects] = useState([])

    useEffect(() => {
        fetch('https://sharif-shehab-server.vercel.app/projects')
            .then(res => res.json())
            .then(data => {
                setProjects(data);
            });
    }, [])


    return (
        <section className="container mx-auto px-5" id="projects">
            <SectionHeading bgHeading="Projects" Heading="Projects I have worked on"></SectionHeading>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                {
                    projects.map(project => <SingleProject key={project._id} project={project}></SingleProject>)
                }
            </div>
            <div className="text-center mt-8">
                {/* <Link to={"/all-projects"} ><button className="btn rounded-none bg-primaryColor text-white hover:bg-secondaryColor duration-500">All Projects</button></Link> */}
            </div>
        </section>
    );
};

export default Projects;