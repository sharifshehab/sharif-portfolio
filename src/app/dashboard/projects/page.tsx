import { getProjects } from "@/services/ProjectServices/ProjectApi";
import { columns } from "./columns";
import { DataTable } from "./data-table";


const Projects = async () => {

    const { data } = await getProjects();

    return (
        <div className="container mx-auto py-10">
            <DataTable columns={columns} data={data} />
        </div>
    );
};

export default Projects;