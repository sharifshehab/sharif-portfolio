/* eslint-disable react/no-unescaped-entities */
import Container from "@/components/Container";
import SectionHeading from "@/components/shared/SectionHeading";

const About = () => {
    return (
        <section id="about" className="mt-20">
            <Container>
                <SectionHeading></SectionHeading>
                <p className="first-letter:font-jost first-letter:text-xl first-letter:font-bold first-letter:float-none first-letter:text-primary first-letter:leading-none leading-relaxed">Hello, I'm Sharif Shehab. My journey into the digital world began with graphic design, where I honed my skills in creating brand logos, banners, business cards, and UI templates. Over time, I realized that merely designing static templates wasn’t enough, I wanted to see my designs come to life and function dynamically on the web. This curiosity and drive to create more interactive and engaging digital experiences led me to explore the world of coding. I started my development journey with WordPress, building websites that were not only visually appealing but also functional and user-friendly. This initial step into web development fueled my passion further, pushing me to expand my skill set. I soon transitioned to the MERN stack—comprising React, Node.js, Express.js, and MongoDB—allowing me to grow into a full-stack web developer. Today, I specialize in building responsive, user-friendly interfaces with reusable components, managing global state throughout applications using the Context API, and efficiently handling server-side management and HTTP requests with TanStack Query and Axios for seamless API integration with dynamic backend systems. My goal is to blend my design sensibilities with my coding expertise, transforming ideas into fully functional, well-crafted websites that deliver exceptional user experiences.
                    When I’m not coding or designing, you can find me indulging in my favorite hobbies: playing video games and watching anime series. These passions not only help me unwind but also inspire me to think creatively and stay connected to the latest trends in storytelling and interactive media.
                    I am passionate about merging creativity with cutting-edge technology to deliver digital solutions that genuinely help users and clients alike. Whether it's a simple blog or a complex web application, I am dedicated to creating impactful digital experiences that stand out and make a difference.
                </p>
            </Container>
        </section>

    );
};

export default About;