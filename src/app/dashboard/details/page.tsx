import AddDetails from "@/components/modules/Details/AddDetails";
import UpdateDetails from "@/components/modules/Details/UpdateDetails";
import { Button } from "@/components/ui/button";
import { getDetails } from "@/services/DetailsServices/DetailsApi";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Details",
    description: "Dashboard for managing details",
    keywords: [
        "Sharif Shehabuzzaman",
        "web development blogs",
        "React.js tutorials",
        "Next.js articles",
        "full-stack development",
        "frontend development",
        "backend development",
        "MERN stack tips",
        "programming insights",
        "developer blog",
        "software development articles"
    ]
};

const Details = async () => {
    const { data } = await getDetails();
    const { _id, about, education } = data[0]
    const { title, institute, session } = education[0]

    return (
        <div className="container mx-auto py-10">
            {
                data?.length > 0 ? <div className="flex justify-end"><Button variant="outline" className="rounded-none bg-primary mb-3 text-white text-lg cursor-not-allowed text-right">Details already added</Button></div> : <AddDetails />
            }

            <div className="shadow-lg rounded-none flex flex-col justify-center items-center bg-white mb-4 py-8">
                <div className="">
                    <div className="w-full start mt-3 px-2">
                        <h2 className="font-[600] text-primary text-center text-[1.4rem]">
                            About
                        </h2>
                        <p className="text-secondary text-[0.9rem]">
                            {about}
                        </p>
                    </div>

                    <div
                        className="w-full p-4 mt-8 border-t border-border">

                        <div className="flex items-center justify-center flex-col">
                            <h2 className="font-[600] text-primary text-center text-[1.4rem]">
                                Education
                            </h2>
                            <h2 className="text-lg text-secondary">{title}</h2>
                        </div>

                        <div className="flex flex-col md:flex-row items-center justify-between text-secondary">
                            <p>{institute}</p>
                            <p>{session}</p>
                        </div>
                    </div>
                </div>
            </div>
            <UpdateDetails id={_id} about={about} education={education} />
        </div>
    );
};

export default Details;