/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import { DiGithubAlt } from "react-icons/di";
import { HiStatusOnline } from "react-icons/hi";
import { IoCheckmarkDoneSharp, IoCodeWorkingSharp } from "react-icons/io5";


// export const generateStaticParams = async () => {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/project/projects`)
//     const { data: projects } = await res.json()
//     return projects.map((project: any) => ({
//         postId: project?._id,
//     }))
// }

// Function to fetch "single post data"
const getSinglePost = async (id: string) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/project/projects?projectId=${id}`, { next: { tags: ["SINGLEPROJECT"] } })
    const data = await res.json()
    return data
}


const singleProject = async ({ params }: { params: Promise<{ projectId: string }> }) => {
    const { projectId } = await params
    const { data } = await getSinglePost(projectId)
    const { name, subTitle, description, thumbnail, technology, features, githubRepo, liveLink, upcomingFeatures, projectChallenges } = data || {}

    console.log("single", data);
    return (
        <section className="container mx-auto px-5">
            <div className="w-full min-h-screen items-center grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left side - Image gallery */}
                <div className="flex flex-col-reverse gap-4 lg:gap-0 lg:flex-row">

                    {/* Main image */}
                    <Image alt={name} src={thumbnail} style={{ width: "auto", height: "auto" }} width={600} height={600} className="mx-auto" />
                </div>

                {/* Right side - Product details */}
                <div className="flex flex-col gap-6">
                    <div className="text-center space-y-2">
                        <h1 className="text-4xl md:text-5xl font-bold text-primaryColor underline underline-offset-8 decoration-gray-300">{name}</h1>
                        <h3 className="text-2xl md:text-3xl font-semibold text-secondaryColor">{subTitle}</h3>
                    </div>

                    <p className="">
                        {description}
                    </p>

                    <h3 className="text-xl font-bold text-primaryColor underline underline-offset-8 decoration-secondaryColor decoration-2 decoration-dashed">Technology :</h3>
                    <div className="flex flex-wrap gap-4 items-center justify-between mt-2">

                        {
                            technology.map((tech: any, idx: any) => <div key={idx} className="flex items-center justify-center gap-2">
                                <IoCodeWorkingSharp size={32} className="text-white p-1 bg-secondaryColor rounded-md" />
                                <div>
                                    <p className="text-sm font-bold">{tech}</p>
                                </div>
                            </div>)
                        }



                    </div>{/* Technology */}

                    {/* features */}
                    <h3 className="text-xl font-bold text-primaryColor underline underline-offset-8 decoration-secondaryColor decoration-2 decoration-dashed">Features :</h3>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                        {
                            features.map((feature: any, idx: any) => <div key={idx} className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg">
                                <IoCheckmarkDoneSharp size={20} className="text-primaryColor" />
                                <div>
                                    <p className="font-medium">{feature}</p>
                                </div>
                            </div>)
                        }


                    </div>

                    {/* Action buttons */}
                    <div className="flex flex-col lg:flex-row gap-4">
                        <a href={githubRepo} target="_blank" className="inline-block w-full">
                            <button
                                className="py-3 px-4 w-full border bg-secondaryColor text-white hover:drop-shadow-lg hover:opacity-85 duration-500">
                                <div className="flex items-center justify-center gap-2">
                                    <DiGithubAlt size={25} className="text-primaryColor" />
                                    Github Repo
                                </div>
                            </button>
                        </a>

                        <a href={liveLink} target="_blank" className="inline-block w-full">
                            <button
                                className="py-3 px-4 w-full border bg-primaryColor text-white hover:drop-shadow-lg hover:opacity-85 duration-500">
                                <div className="flex items-center justify-center gap-2">
                                    <HiStatusOnline size={24} className="text-secondaryColor" />
                                    Visit Live Link
                                </div>
                            </button>
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default singleProject;
