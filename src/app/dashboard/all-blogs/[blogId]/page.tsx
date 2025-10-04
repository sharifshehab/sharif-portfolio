

// export const generateStaticParams = async () => {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/project/projects`)
//     const { data: projects } = await res.json()
//     return projects.map((project: any) => ({
//         postId: project?._id,
//     }))
// }

import EditBlogForm from "@/components/modules/Blogs/EditBlog";



// Function to fetch "single post data"
const getSingleBlog = async (id: string) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blog/blogs?blogId=${id}`, { next: { tags: ["SINGLEPBLOG"] } })
    const data = await res.json()
    return data
}

const Project = async ({ params }: { params: Promise<{ blogId: string }> }) => {
    const { blogId } = await params
    const { data } = await getSingleBlog(blogId)

    return (
        <EditBlogForm id={blogId} blog={data}></EditBlogForm>
    );
};

export default Project;
