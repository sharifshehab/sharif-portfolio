/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";


export const generateStaticParams = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blog/blogs`)
    const { data: blogs } = await res.json()
    return blogs.map((blog: any) => ({
        blogId: blog?._id,
    }))
}

// Function to fetch "single post data"
const getSinglePost = async (id: string) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blog/blogs?blogId=${id}`, { next: { tags: ["SINGLEPOST"] } })
    const data = await res.json()
    return data
}


const singleProject = async ({ params }: { params: { blogId: string } }) => {
    const { blogId } = params
    const { data } = await getSinglePost(blogId)
    const { title, description, thumbnail } = data || {}

    return (
        <section className="container mx-auto px-5 min-h-screen">
            <div className="py-20">
                <Image alt={title} src={thumbnail!} width={600} style={{ width: "auto", height: "auto" }} height={600} className="mx-auto" />

                {/* Post details */}
                <>
                    <h1 className="text-4xl font-bold text-primary underline underline-offset-8 decoration-secondary text-center my-10">{title}</h1>
                    <p>
                        {description}
                    </p>
                </>
            </div>
        </section>
    );
};

export default singleProject;
