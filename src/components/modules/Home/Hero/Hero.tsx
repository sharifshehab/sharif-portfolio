// import hero_img1_1 from "../../../assets/profile-image.webp";
import { RiGithubLine } from "react-icons/ri";
import { LiaLinkedinIn } from "react-icons/lia";
import { BiLogoBehance } from "react-icons/bi";
import Image from "next/image";
import Container from "@/components/Container";
import { jost } from "@/components/shared/SectionHeading";

const Hero = () => {

    return (
        <div className="bg-gradient-to-r from-secondary">
            <Container>
                <div className="flex items-center flex-col lg:flex-row justify-between gap-10 md:gap-0">
                    <div className="content text-white text-center md:text-left">
                        <div className="space-y-5">
                            <div className="">
                                <span className="text-primary">Hi, This is</span>
                                <h2 className={`text-3xl md:text-5xl ${jost.className}`}>Sharif Shehabuzzaman</h2>
                            </div>
                            <div>
                                <span>I am A</span>
                                <h1 className={`${jost.className} text-3xl md:text-5xl lg:text-7xl font-extrabold  text-stroke text-stroke-white text-stroke-[5px] text-primary underline underline-offset-8 decoration-white decoration-4`}>
                                    Full Stack Developer
                                </h1>
                            </div>


                            <p className="text-lg">Crafting sleek designs with exceptional performance.
                                <br />
                                Enhancing the power of MERN for seamless, robust applications.
                            </p>
                            <div className="flex items-center justify-center md:justify-normal gap-3">
                                <a href="https://github.com/sharifshehab" target="_blank">
                                    <RiGithubLine size={28} className="border border-primary text-secondary bg-white p-1 rounded-full hover:animate-pulse hover:text-primary hover:border-white duration-500" />
                                </a>
                                <a href="https://www.linkedin.com/in/sharifshehab" target="_blank">
                                    <LiaLinkedinIn size={28} className="border border-primary text-secondary bg-white p-1 rounded-full hover:animate-pulse hover:text-primary hover:border-white duration-500" />
                                </a>
                                <a href="https://www.behance.net/-svshuvo" target="_blank">
                                    <BiLogoBehance size={28} className="border border-primary text-secondary bg-white p-1 rounded-full hover:animate-pulse hover:text-primaryColor hover:border-white duration-500" />
                                </a>
                            </div>
                        </div>

                    </div>

                    <div className="hero-img order-last ">
                        <Image src="/profile-image.webp" width={600} height={600} alt="banner image" className="mx-auto" />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Hero;