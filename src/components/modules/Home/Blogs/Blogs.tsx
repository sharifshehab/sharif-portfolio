"use client"
import SectionHeading from "@/components/shared/SectionHeading";
import { useEffect, useState } from "react";

const Blogs = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('https://sharif-shehab-server.vercel.app/posts')
            .then(res => res.json())
            .then(data => {
                setPosts(data);
            });
    }, [])

    return (
        <section className="py-32 container mx-auto px-5">
            <div className="mb-5 text-center">
                <SectionHeading bgHeading="My Blog" Heading="Latest Blogs"></SectionHeading>
            </div>
            <div className="flex-center flex-col gap-16">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
                    {posts.map((post) => (

                        <div key={post._id} className="grid gap-y-6 sm:grid-cols-10 sm:gap-x-5 sm:gap-y-0 md:items-center md:gap-x-8 lg:gap-x-12">
                            <div className="sm:col-span-5 space-y-3">
                                <h3 className="heading text-2xl line-clamp-2 font-bold text-left border-b-2 border-b-primaryColor pb-2 hover:border-b-secondaryColor duration-300 transition-all">
                                    {/* <Link to={`/blog/${post?._id}`}> {post.title}</Link> */}
                                </h3>
                                <p className="line-clamp-3 text-secondaryColor">
                                    {/* {post.summary} */}
                                </p>
                                <div className="lex items-center space-x-2">
                                    {/* <Link to={`/blog/${post?._id}`}><button className="mt-2 btn rounded-none bg-primaryColor text-white hover:bg-secondaryColor duration-500">Read More</button></Link> */}
                                </div>
                            </div>
                            <div className="order-first sm:order-last sm:col-span-5">
                                <a href={post.url} target="_blank" className="block">
                                    <div className="aspect-16/9 overflow-clip rounded-lg border border-border h-60">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="h-full w-full object-top transition-opacity duration-200 fade-in hover:opacity-70"
                                        />
                                    </div>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blogs;