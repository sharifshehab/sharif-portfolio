

// export const generateStaticParams = async () => {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/project/projects`)
//     const { data: projects } = await res.json()
//     return projects.map((project: any) => ({
//         postId: project?._id,
//     }))
// }

import EditProjectForm from "@/components/modules/Projects/EditProject";

// Function to fetch "single post data"
const getSinglePost = async (id: string) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/project/projects?projectId=${id}`, { next: { tags: ["SINGLEPROJECT"] } })
    const data = await res.json()
    return data
}


const Project = async ({ params }: { params: Promise<{ projectId: string }> }) => {
    const { projectId } = await params
    const { data } = await getSinglePost(projectId)

    return (
        <EditProjectForm id={projectId} project={data}></EditProjectForm>
    );
};

export default Project;
