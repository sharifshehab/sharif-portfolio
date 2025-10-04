import { DataTable } from "@/components/ui/data-table";
import { columns } from "./columns";
import { getBlogs } from "@/services/BlogServices/BlogApi";
import AddBlog from "@/components/modules/Blogs/AddBlog";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blogs",
    description: "Dashboard for managing all blogs",
    keywords: [
        "Sharif Shehabuzzaman",
        "web development blogs",
        "React.js tutorials",
        "Next.js articles",
        "full-stack development",
        "frontend development",
        "backend development",
        "MERN stack tips",
        "programming insights",
        "developer blog",
        "software development articles"
    ]
};

const AllProjects = async () => {

    const { data } = await getBlogs();

    return (
        <div className="container mx-auto py-10">
            <AddBlog />
            <DataTable columns={columns} data={data} />
        </div>
    );
};

export default AllProjects;