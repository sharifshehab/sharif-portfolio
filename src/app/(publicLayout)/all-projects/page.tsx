
import SingleProject from "@/components/modules/Home/Projects/SingleProject";
import SectionHeading from "@/components/shared/SectionHeading";
import { getProjects } from "@/services/ProjectServices/ProjectApi";
import { IProject } from "@/types";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "All Projects",
    description: "Showcase of Sharif Shehabuzzaman's web development projects including React, Next.js, and full-stack applications.",
    keywords: ["Sharif Shehabuzzaman",
        "portfolio projects",
        "web development",
        "React.js projects",
        "Next.js projects",
        "full-stack applications",
        "frontend development",
        "backend development",
        "MERN stack",
        "software projects",
        "developer portfolio"]
};

const AllProjects = async () => {
    const { data: projects } = await getProjects();

    return (
        <section className="container mx-auto px-5 min-h-screen" id="projects">
            <SectionHeading bgHeading="All Projects" Heading="All the Projects I have worked on"></SectionHeading>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                {
                    projects.map((project: IProject) => <SingleProject key={project._id} project={project}></SingleProject>)
                }
            </div>
        </section>
    );
};

export default AllProjects;