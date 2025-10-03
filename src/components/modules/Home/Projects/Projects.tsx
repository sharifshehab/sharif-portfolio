import SingleProject from "./SingleProject";
import SectionHeading from "@/components/shared/SectionHeading";
import Link from "next/link";
import { getProjects } from "@/services/ProjectServices/ProjectApi";
import { IProject } from "@/types";
import Container from "@/components/Container";


const Projects = async () => {

    const { data: projects } = await getProjects();

    return (
        <section id="projects">
            <Container>
                <SectionHeading bgHeading="Projects" Heading="Projects I have worked on"></SectionHeading>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                    {
                        projects.map((project: IProject) => <SingleProject key={project._id} project={project}></SingleProject>)
                    }
                </div>
                <div className="text-center mt-8">
                    <Link href={"/all-projects"} ><button className="p-3 rounded-none cursor-pointer bg-primary text-white hover:bg-secondary duration-500">All Projects</button></Link>
                </div>
            </Container>
        </section>
    );
};

export default Projects;