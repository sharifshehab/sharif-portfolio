import Container from "@/components/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import { getDetails } from "@/services/DetailsServices/DetailsApi";

const About = async () => {
    const { data } = await getDetails()
    const { about } = data[0]
    return (
        <section id="about" className="mt-20">
            <Container>
                <SectionHeading></SectionHeading>
                <p className="first-letter:font-jost first-letter:text-xl first-letter:font-bold first-letter:float-none first-letter:text-primary first-letter:leading-none leading-relaxed">{about}
                </p>
            </Container>
        </section>

    );
};

export default About;