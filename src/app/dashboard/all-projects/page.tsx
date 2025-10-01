import { getProjects } from "@/services/ProjectServices/ProjectApi";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import AddProject from "@/components/modules/Projects/AddProject";


const AllProjects = async () => {

    const { data } = await getProjects();

    return (
        <div className="container mx-auto py-10">
            <AddProject />
            <DataTable columns={columns} data={data} />
        </div>
    );
};

export default AllProjects;