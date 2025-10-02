import { columns } from "./columns";
import { DataTable } from "./data-table";
import { getBlogs } from "@/services/BlogServices/BlogApi";


const AllProjects = async () => {

    const { data } = await getBlogs();
    console.log(data);

    return (
        <div className="container mx-auto py-10">
            {/* <AddProject /> */}
            <DataTable columns={columns} data={data} />
        </div>
    );
};

export default AllProjects;