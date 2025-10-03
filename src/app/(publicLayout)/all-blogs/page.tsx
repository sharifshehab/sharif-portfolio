import SingleBlog from "@/components/modules/Home/Blogs/SingleBlog";
import SectionHeading from "@/components/shared/SectionHeading";
import { getBlogs } from "@/services/BlogServices/BlogApi";
import { IBlog } from "@/types";

const AllBlogs = async() => {
    const { data: posts } = await getBlogs();

    return (
        <section className="py-32 container mx-auto px-5">
            <div className="mb-5 text-center">
                <SectionHeading bgHeading="My Blog" Heading="Latest Blogs"></SectionHeading>
            </div>
            <div className="flex-center flex-col gap-16">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
                    {posts.map((post: IBlog) => <SingleBlog key={post._id} post={post}></SingleBlog>)}
                </div>
            </div>
        </section>
    );
};

export default AllBlogs;