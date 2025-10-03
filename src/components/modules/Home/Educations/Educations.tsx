import SectionHeading from "@/components/shared/SectionHeading";

const Educations = () => {

    const TimelineData = [
        { date: "2021", title: "BSc Electrical and Electronic Engineering", institute: "AMIE - The Institution of Engineers, Bangladesh (IEB)", session: "2021-2024", },
        { date: "2016", title: "Diploma in Electrical Technology", institute: "AMIE - Faridpur Polytechnic Institute", session: "2016-2019", publication: "2020" }
    ]
    return (
        <section className="container mx-auto px-5" id="contact">
            <SectionHeading bgHeading="Educations" Heading="MY Academic History"></SectionHeading>
            <div className="max-w-4xl mx-auto p-6">

                <div className="relative border-l border-primary">
                    {TimelineData.map((milestone, index) => (
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
                                        {milestone.title}
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
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Educations;