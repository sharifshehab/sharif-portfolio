import { IProject } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { GrTechnology } from "react-icons/gr";

const SingleProject = ({ project }: { project: IProject }) => {
    const { _id, name, title, thumbnail } = project || {}
    return (
        <div
            className="shadow-md h-[350px] hover:scale-[1.05] transition-all duration-300 overflow-hidden relative cursor-pointer group">
            {/*  icons  */}
            <div
                className="absolute top-0 left-0 opacity-100 z-[-1] group-hover:opacity-100 group-hover:z-[1] ease-out transition-all duration-300 flex items-center justify-end w-full p-4">
                <div className="flex items-center justify-center gap-2">
                    <GrTechnology className="text-secondary" size={21} />
                </div>
            </div>

            {/*  image  */}
            <Image alt={name} src={thumbnail!} width={500}  height={500} className="w-full h-[60%] object-cover group-hover:opacity-40 group-hover:h-full transition-all duration-300 ease-out" />

            {/*  texts  */}
            <div className="absolute bottom-0 left-0 p-5 w-full">
                <h3 className="text-2xl font-bold">{name}</h3>
                <p>{title}</p>
                <Link href={`/all-projects/${_id}`}><button className="mt-2 p-3 cursor-pointer rounded-none bg-primary text-white hover:bg-secondary duration-500">View Details</button></Link>
            </div>
        </div>
    );
};

export default SingleProject;