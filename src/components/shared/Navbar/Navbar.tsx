"use client"

import React, { useState } from "react";
// react icons
import { IoIosArrowUp } from "react-icons/io";
import { TbLogout2, } from "react-icons/tb";
import { CiMenuFries } from "react-icons/ci";
import { AiOutlineFire } from "react-icons/ai";
import { BiSupport } from "react-icons/bi";
import { FiUser } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import Container from "@/components/Container";

const Navbar = () => {
    const [accountMenuOpen, setAccountMenuOpen] = useState(false)
    const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)

    return (
        <div className="bg-amber-400">
            <Container>
                <nav
                    className="flex items-center justify-between w-full relative  py-2.5">
                    {/* logo */}
                    <img src="https://i.ibb.co/0BZfPq6/darklogo.png" alt="logo" className="w-[55px] " />

                    {/* nav links */}
                    <ul className="items-center gap-[20px] text-[1rem] text-[#424242] md:flex hidden">

                        <li className="flex items-center dark:text-[#abc2d3] hover:text-[#3B9DF8] group gap-[5px] cursor-pointer">
                            <AiOutlineFire
                                className="text-[1.1rem] group-hover:text-[#3B9DF8] dark:text-[#abc2d3] text-gray-600" />
                            Features
                        </li>
                        <li className="flex items-center dark:text-[#abc2d3] hover:text-[#3B9DF8] group gap-[5px] cursor-pointer">
                            <BiSupport className="text-[1.1rem] group-hover:text-[#3B9DF8] dark:text-[#abc2d3] text-gray-600" />
                            Support
                        </li>

                    </ul>

                    {/* user account */}
                    <div className="flex items-center gap-[15px]">
                        <div className="flex items-center gap-[10px] cursor-pointer relative"
                            onClick={() => setAccountMenuOpen(!accountMenuOpen)}>
                            <div className="relative">
                                <img
                                    src="https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?t=st=1724605498~exp=1724609098~hmac=7f6fc106bae2c17b0c93af1b2e5483d9d8368f3e51284aaec7c7d50590d2bae5&w=740"
                                    alt="avatar" className="w-[35px] h-[35px] rounded-full object-cover" />
                                <div
                                    className="w-[10px] h-[10px] rounded-full bg-green-500 absolute bottom-[0px] right-0 border-2 border-white"></div>
                            </div>

                            <h1 className="text-[1rem] dark:text-[#abc2d3] font-[400] text-gray-600 sm:block hidden">Dhon
                                Deo</h1>

                            <div
                                className={`${accountMenuOpen ? "translate-y-0 opacity-100 z-[1]" : "translate-y-[10px] opacity-0 z-[-1]"} bg-white w-max rounded-md absolute dark:bg-slate-800 top-[45px] right-0 p-[10px] flex flex-col transition-all duration-300 gap-[5px]`}>
                                <p className="flex items-center gap-[5px] rounded-md p-[8px] pr-[45px] py-[3px] text-[1rem] dark:text-[#abc2d3] dark:hover:bg-slate-900/50 text-gray-600 hover:bg-gray-50">
                                    <FiUser />
                                    View Profile
                                </p>
                                <p className="flex items-center gap-[5px] rounded-md p-[8px] pr-[45px] py-[3px] text-[1rem] dark:text-[#abc2d3] dark:hover:bg-slate-900/50 text-gray-600 hover:bg-gray-50">
                                    <IoSettingsOutline />
                                    Settings
                                </p>

                                <div className="mt-3 border-t dark:border-slate-700 border-gray-200 pt-[5px]">
                                    <p className="flex items-center gap-[5px] rounded-md p-[8px] pr-[45px] py-[3px] text-[1rem] dark:text-red-500 dark:hover:bg-red-500/20 text-red-500 hover:bg-red-50">
                                        <TbLogout2 />
                                        Logout
                                    </p>
                                </div>

                            </div>

                            <IoIosArrowUp
                                className={`${accountMenuOpen ? "rotate-0" : "rotate-[180deg]"} transition-all duration-300 dark:text-[#abc2d3] text-gray-600 sm:block hidden`} />

                        </div>

                        <CiMenuFries onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
                            className="text-[1.8rem] dark:text-[#abc2d3] text-[#424242]c cursor-pointer md:hidden flex" />
                    </div>

                    {/* mobile sidebar */}
                    <aside
                        className={` ${mobileSidebarOpen ? "translate-x-0 opacity-100 z-20" : "translate-x-[200px] opacity-0 z-[-1]"} md:hidden bg-white p-4 text-center absolute dark:bg-slate-700 top-[55px] right-0 sm:w-[300px] w-full rounded-md transition-all duration-300`}>
                        <ul className="items-start gap-[20px] text-[1rem] text-gray-600 flex flex-col">
                            <li className="hover:text-[#3B9DF8] dark:text-[#abc2d3] transition-all duration-500 cursor-point ter capitalize">Features
                            </li>
                            <li className="hover:text-[#3B9DF8] dark:text-[#abc2d3] transition-all duration-500 cursor-pointer capitalize">Support</li>
                        </ul>
                    </aside>
                </nav>
            </Container>

        </div>
    );
};

export default Navbar;