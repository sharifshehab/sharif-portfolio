import { DataTable } from "@/components/ui/data-table";
import { columns } from "./columns";
import { getBlogs } from "@/services/BlogServices/BlogApi";
import AddBlog from "@/components/modules/Blogs/AddBlog";


const AllProjects = async () => {

    const { data } = await getBlogs();
    console.log(data);

    return (
        <div className="container mx-auto py-10">
            <AddBlog />
            <DataTable columns={columns} data={data} />
        </div>
    );
};

export default AllProjects;