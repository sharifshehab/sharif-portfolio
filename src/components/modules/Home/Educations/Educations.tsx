import Container from "@/components/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import { getDetails } from "@/services/DetailsServices/DetailsApi";

const Educations = async () => {
    const { data } = await getDetails()
    const { education } = data[0]
    const { title, institute, session } = education[0]

    return (
        <section id="educations">
            <Container>
                <SectionHeading bgHeading="Educations" Heading="MY Academic History"></SectionHeading>
                <div className="max-w-4xl mx-auto p-6">

                    <div className="relative border-l border-primary">
                        <div className="mb-8">
                            <div
                                className="absolute w-5 h-5 bg-primary z-10 border-4 border-slate-200 rounded-full left-[0px] transform -translate-x-1/2 -translate-y-1/2" />
                            <div className="pl-6">
                                <div>
                                    <h3 className="heading text-2xl line-clamp-2 font-bold text-left">
                                        {title}
                                    </h3>
                                </div>
                                <p className="mt-1 text-lg">
                                    {institute}
                                </p>
                                <p className="mt-1">
                                    <span className="font-bold">session: </span>{session}
                                </p>
                            </div>
                        </div>
                        {/* {TimelineData.map((milestone, index) => (
                            <div key={index} className="mb-8">
                                <div
                                    className="absolute w-5 h-5 bg-primary z-10 border-4 border-slate-200 rounded-full left-[0px] transform -translate-x-1/2 -translate-y-1/2" />
                                <div className="pl-6">
                                    <div className="flex sm:items-center sm:flex-row flex-col">
                                        <div className="me-3">
                                            <h3 className="heading text-2xl font-bold text-left">
                                                {milestone.date} -
                                            </h3>
                                        </div>
                                        <div>
                                            <h3 className="heading text-2xl line-clamp-2 font-bold text-left">
                                                {title}
                                            </h3>
                                        </div>
                                    </div>
                                    <p className=" mt-1">
                                        {milestone.institute}
                                    </p>
                                    <p className="mt-1">
                                        <span className="font-bold">session: </span>{milestone.session}
                                    </p>
                                    <p className="mt-1">
                                        {
                                            milestone?.publication ?
                                                <><span className="font-bold">publication: </span>{milestone?.publication}</> : ""
                                        }
                                    </p>
                                </div>
                            </div>
                        ))} */}
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Educations;