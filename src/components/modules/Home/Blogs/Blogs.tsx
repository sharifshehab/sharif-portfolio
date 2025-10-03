import SectionHeading from "@/components/shared/SectionHeading";
import { getBlogs } from "@/services/BlogServices/BlogApi";
import { IBlog } from "@/types";
import SingleBlog from "./SingleBlog";
import Container from "@/components/Container";

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
                </div>
            </Container>
        </section>
    );
};

export default Blogs;