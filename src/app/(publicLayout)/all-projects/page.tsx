
import SingleProject from "@/components/modules/Home/Projects/SingleProject";
import SectionHeading from "@/components/shared/SectionHeading";
import { getProjects } from "@/services/ProjectServices/ProjectApi";
import { IProject } from "@/types";

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