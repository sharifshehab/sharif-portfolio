import SectionHeading from "@/components/shared/SectionHeading";
import { getBlogs } from "@/services/BlogServices/BlogApi";
import { IBlog } from "@/types";
import SingleBlog from "./SingleBlog";
import Container from "@/components/Container";
import Link from "next/link";

const Blogs = async () => {
    const { data: posts } = await getBlogs();

    return (
        <section id="blogs">
            <Container>
                <div className="mb-5 text-center">
                    <SectionHeading bgHeading="My Blog" Heading="Latest Blogs"></SectionHeading>
                </div>
                <div className="flex-center flex-col gap-16">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
                        {posts.map((post: IBlog) => <SingleBlog key={post._id} post={post}></SingleBlog>)}
                    </div>
                    <div className="text-center mt-8">
                        <Link href={"/all-blogs"} ><button className="p-3 rounded-none cursor-pointer bg-primary text-white hover:bg-secondary duration-500">All Blogs</button></Link>
                    </div>
                </div>

            </Container>
        </section>
    );
};

export default Blogs;