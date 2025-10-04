"use client"
import React, { useEffect, useState } from "react";
// react icons
import { IoIosArrowUp } from "react-icons/io";
import { CiMenuFries } from "react-icons/ci";
import { usePathname } from "next/navigation";
import { getUser, logoutUser } from "@/services/AuthServices/AuthApi";
import { IUser } from "@/types";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Navbar = () => {
    const [accountMenuOpen, setAccountMenuOpen] = useState(false)
    const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)
    const [userData, setUerData] = useState<IUser | null>()
    const pathName = usePathname();

    const menItems = (
        <>
            <li>
                <Link href={"/"} className="relative group transition duration-300 hover:bg-transparent">
                    Home
                    <span className="absolute left-0 bottom-0 lg:top-[44px] h-[3px] w-full origin-left scale-x-0 bg-primary transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
                </Link>
            </li>
            <li>
                <a href="#about" className="relative group transition duration-300 hover:bg-transparent">
                    About
                    <span className="absolute left-0 bottom-0 lg:top-[44px] h-[3px] w-full origin-left scale-x-0 bg-primary transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
                </a>
            </li>
            <li>
                <a href="#skills" className="relative group transition duration-300 hover:bg-transparent">
                    Skills
                    <span className="absolute left-0 bottom-0 lg:top-[44px] h-[3px] w-full origin-left scale-x-0 bg-primary transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
                </a>
            </li>
            <li>
                <a href="#projects" className="relative group transition duration-300 hover:bg-transparent">
                    Project
                    <span className="absolute left-0 bottom-0 lg:top-[44px] h-[3px] w-full origin-left scale-x-0 bg-primary transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
                </a>
            </li>
            <li>
                <a href="#educations" className="relative group transition duration-300 hover:bg-transparent">
                    Education
                    <span className="absolute left-0 bottom-0 lg:top-[44px] h-[3px] w-full origin-left scale-x-0 bg-primary transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
                </a>
            </li>
            <li>
                <a href="#blogs" className="relative group transition duration-300 hover:bg-transparent">
                    Blog
                    <span className="absolute left-0 bottom-0 lg:top-[44px] h-[3px] w-full origin-left scale-x-0 bg-primary transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
                </a>
            </li>
            <li>
                <a href="#contact" className="relative group transition duration-300 hover:bg-transparent">
                    Contact
                    <span className="absolute left-0 bottom-0 lg:top-[44px] h-[3px] w-full origin-left scale-x-0 bg-primary transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
                </a>
            </li>
        </>
    );

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const user = await getUser();
                setUerData(user.data)
            } catch (error) {
                console.error(error);
            }
        };
        fetchUser();
    }, []);

    const handleLogOut = async () => {
        await logoutUser();
        setUerData(null)
    }


    if (pathName.includes("login")) {
        return null; // hide Navbar on login page
    }

    return (
        <div className="bg-white border-b-2">
            <nav
                className="flex items-center justify-between w-full relative">
                {/* logo */}
                <span className="text-xl md:text-3xl text-white leading-none font-semibold logo-Bg-shape py-5 md:py-4 px-8 md:px-[135px] bg-primary">
                    <Link href={'/'} className="text-3xl text-white font-semibold">Sharif <span className="text-secondary">.S</span></ Link >
                </span>

                {/* nav links */}
                <ul className="items-center gap-8 font-medium text-secondary lg:flex hidden">
                    {menItems}
                </ul>
                {
                    !userData ? (
                        <Link href={"/login"} className="w-40 bg-secondary text-white text-center py-5 hidden lg:block">login</Link>
                    ) :
                        // user account
                        <div className="flex items-center gap-[15px] pe-[135px]">
                            <div className="flex items-center gap-[10px] cursor-pointer relative"
                                onClick={() => setAccountMenuOpen(!accountMenuOpen)}>
                                {/* <div className="relative">
                                    <img
                                        src="https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?t=st=1724605498~exp=1724609098~hmac=7f6fc106bae2c17b0c93af1b2e5483d9d8368f3e51284aaec7c7d50590d2bae5&w=740"
                                        alt="avatar" className="w-[35px] h-[35px] rounded-full object-cover" />
                                    <div
                                        className="w-[10px] h-[10px] rounded-full bg-green-500 absolute bottom-[0px] right-0 border-2 border-white"></div>
                                </div> */}

                                <h1 className="text-[1rem] dark:text-[#abc2d3] font-[400] text-gray-600 sm:block hidden">{userData?.name}</h1>

                                <div
                                    className={`${accountMenuOpen ? "translate-y-0 opacity-100 z-[1]" : "translate-y-[10px] opacity-0 z-[-1]"} bg-white w-max rounded-none absolute dark:bg-slate-800 top-[45px] right-0 p-[10px] flex flex-col transition-all duration-300 gap-[5px]`}>
                                    <p className="flex items-center gap-[5px] rounded-none p-[8px] pr-[45px] py-[3px] text-[1rem] dark:text-[#abc2d3] dark:hover:bg-slate-900/50 text-gray-600 hover:bg-gray-50">
                                        <Link href={"/dashboard/details"}>Dashboard</Link>
                                    </p>

                                    <div className="mt-3 border-t  border-gray-200 pt-[5px]">
                                        <Button className="flex items-center gap-[5px] rounded-none p-[8px] pr-[45px] py-[3px] text-[1rem] text-white hover:bg-secondary cursor-pointer w-full" onClick={handleLogOut}> Logout</Button>
                                    </div>

                                </div>

                                <IoIosArrowUp
                                    className={`${accountMenuOpen ? "rotate-0" : "rotate-[180deg]"} transition-all duration-300 dark:text-[#abc2d3] text-gray-600 sm:block hidden`} />

                            </div>
                        </div>
                }
                <CiMenuFries onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
                    className="text-[1.8rem] dark:text-[#abc2d3] text-secondary cursor-pointer lg:hidden flex me-4 " />


                {/* mobile sidebar */}
                <aside
                    className={` ${mobileSidebarOpen ? "translate-y-0 opacity-100 z-20" : "translate-y-[200px] opacity-0 z-[-1]"} lg:hidden bg-white p-4 text-center absolute dark:bg-slate-700 top-[60px] right-0  w-full transition-all duration-300`}>
                    <ul className="items-start gap-[20px] text-[1rem] text-gray-600 flex flex-col w-full">
                        {menItems}
                        <Link href={"/login"} className="w-full bg-secondary text-white text-center py-5">login</Link>
                    </ul>
                </aside>
            </nav>
        </div>

    );
};

export default Navbar;