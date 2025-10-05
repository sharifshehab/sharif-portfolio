"use client"
import { IChildren } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoMdArrowBack } from "react-icons/io";
import { Toaster } from "sonner";

const DashboardLayout = ({ children }: IChildren) => {
    const pathName = usePathname();
    const links = [
        {
            title: "Details",
            path: '/dashboard/details'
        },
        {
            title: "Projects",
            path: '/dashboard/all-projects'
        },
        {
            title: "Blogs",
            path: '/dashboard/all-blogs'
        }
    ]
    return (
        <>
            <div className="grid grid-cols-12">
                <div className="col-span-4 lg:col-span-2 bg-primary">

                    <div className="w-full h-full flex flex-col justify-between pt-20">

                        <ul className="menu">
                            {
                                links.map(link => <li className={`${pathName === link.path ? "bg-secondary border-b-0" : "border-b-2"} px-6 py-1.5`} key={link.path}><Link className={`${pathName === link.path && "text-white font-semibold"} text-base text-secondary block hover:text-white` } href={link.path}>{link.title}</Link></li>)
                            }
                        </ul>

                        <div className="bg-white">
                            <Link
                                href={"/"}
                                className="ps-5 text-secondary py-3 hover:opacity-95 flex items-center justify-start gap-2 hover:text-primary"
                            >
                                {" "}
                                <IoMdArrowBack size={20} />
                                Home Page
                            </Link>
                        </div>

                    </div>

                </div>
                <main className="min-h-dvh bg-secondary col-span-8 lg:col-span-10 px-8">
                    {children}
                    <Toaster />
                </main>
            </div>

        </>
    )

};

export default DashboardLayout;