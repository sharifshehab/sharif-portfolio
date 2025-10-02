import { getProjects } from "@/services/ProjectServices/ProjectApi";
import { columns } from "./columns";
import AddProject from "@/components/modules/Projects/AddProject";
import { DataTable } from "@/components/ui/data-table";


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