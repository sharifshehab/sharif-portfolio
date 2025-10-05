// react icons
import { RiGithubLine } from "react-icons/ri";
import { LiaLinkedinIn } from "react-icons/lia";
import { BiLogoBehance } from "react-icons/bi";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-secondary border-t border-primary">
            <div className="flex flex-col items-center justify-center space-y-6 py-20">
                < Link href={'/'}  className="text-3xl text-primary font-semibold"> Sharif <span className="text-white">.S</span></ Link >
                <p className="text-white max-w-4xl text-center">Crafting sleek designs with exceptional performance.
                    Enhancing the power of MERN for seamless, robust applications.</p>

                <div className="flex items-center gap-5 text-white">
                    <a href="https://github.com/sharifshehab" target="_blank" className="border p-2">
                        <RiGithubLine size={22} className="text-white hover:animate-pulse hover:text-primary duration-500" />
                    </a>
                    <a href="https://www.linkedin.com/in/sharifshehab" target="_blank" className="border p-2">
                        <LiaLinkedinIn size={25} className="text-white hover:animate-pulse hover:text-primary duration-500" />
                    </a>
                    <a href="https://www.behance.net/-svshuvo" target="_blank" className="border p-2">
                        <BiLogoBehance size={25} className="text-white hover:animate-pulse hover:text-primary duration-500" />
                    </a>
                </div>
            </div>
            <div
                className="text-center py-3 border-t">
                <p className="text-white">
                    © {new Date().getFullYear()} <span className="text-primary">Sharif.S</span>. All Rights Reserved.
                </p>

            </div>
        </footer>
    );
};

export default Footer;
