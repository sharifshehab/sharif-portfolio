import { IBlog } from "@/types";
import Image from "next/image";
import Link from "next/link";

const SingleBlog = ({ post }: { post: IBlog }) => {
    const { _id, title, description, thumbnail } = post
    return (
        <div key={_id} className="grid gap-y-6 sm:grid-cols-10 sm:gap-x-5 sm:gap-y-0 md:items-center md:gap-x-8 lg:gap-x-12">
            <div className="sm:col-span-5 space-y-3">
                <h3 className="heading text-2xl line-clamp-2 font-bold text-left border-b-2 border-b-primary pb-2 hover:border-b-secondary duration-300 transition-all">
                    {title}                                </h3>
                <p className="line-clamp-3 text-secondary">
                    {description}
                </p>
                <div className="lex items-center space-x-2">
                    <Link href={`/all-blogs/${_id}`}><button className="mt-2 p-3 rounded-none bg-primary text-white hover:bg-secondary duration-500 cursor-pointer">Read More</button></Link>
                </div>
            </div>
            <div className="order-first sm:order-last sm:col-span-5">
                <Image alt={title} src={thumbnail!} width={150} style={{ width: "auto", height: "auto" }} height={150} className="h-full w-full object-top transition-opacity duration-200 fade-in hover:opacity-70" />
            </div>
        </div>
    );
};

export default SingleBlog;