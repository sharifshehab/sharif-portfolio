import About from "@/components/modules/Home/About/About";
import Blogs from "@/components/modules/Home/Blogs/Blogs";
import Contact from "@/components/modules/Home/Contact/Contact";
import Educations from "@/components/modules/Home/Educations/Educations";
import Hero from "@/components/modules/Home/Hero/Hero";
import Projects from "@/components/modules/Home/Projects/Projects";
import Skills from "@/components/modules/Home/Skills/Skills";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Educations />
      <Blogs />
      <Contact />
    </>
  );
}
