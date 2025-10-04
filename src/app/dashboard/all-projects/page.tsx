import { getProjects } from "@/services/ProjectServices/ProjectApi";
import { columns } from "./columns";
import AddProject from "@/components/modules/Projects/AddProject";
import { DataTable } from "@/components/ui/data-table";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projects",
    description: "Dashboard for managing all projects",
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

    const { data } = await getProjects();

    return (
        <div className="container mx-auto py-10">
            <AddProject />
            <DataTable columns={columns} data={data} />
        </div>
    );
};

export default AllProjects;
