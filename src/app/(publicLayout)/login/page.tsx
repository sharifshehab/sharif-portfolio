/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { Button } from "@/components/ui/button";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ILogin } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";

import { SubmitHandler, useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { toast } from "sonner";
import { z } from "zod";
import { useRouter } from "next/navigation";
import Link from "next/link";


const Login = () => {
    const router = useRouter();

    // using ZOD
    const registrationFormSchema = z.object({
        email: z.email(),
        password: z.string()
            .min(8, { message: "Password must be at least 8 characters long." }),
    });

    const form = useForm<z.infer<typeof registrationFormSchema>>({
        resolver: zodResolver(registrationFormSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    const onSubmit: SubmitHandler<ILogin> = async (data: z.infer<typeof registrationFormSchema>) => {

        // const result = await userLogin(data)

        // if (result.success) {
        //     form.reset();
        //     toast.success("User logged in successfully.");
        //     router.push('/dashboard/details');
        // } else {
        //     toast.error(result.errorMessage, {
        //         style: {
        //             background: "#ff5e14",
        //             color: "#02245b",
        //             fontWeight: "bold"
        //         }
        //     })
        // }

        try {
            const res = await fetch(`/api/v1/auth/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify(data),
            });

            if (!res.ok) {
                const errorText = await res.text();
                const match = errorText.match(/<pre[^>]*>([\s\S]*?)<\/pre>/i);
                const errorMessage = match ? match[1].trim() : "Something went wrong";
                toast.error(errorMessage, {
                    style: {
                        background: "#ff5e14",
                        color: "#02245b",
                        fontWeight: "bold"
                    }
                })
                return;
            }

            const user = await res.json();
            if (user.success) {
                form.reset();
                toast.success("User logged in successfully.");
                router.push('/dashboard/details');
            }

        } catch (error: any) {
            console.error(error);
            toast.error(error)
        }
    }

    return (
        <section className="bg-white h-screen flex flex-col justify-center items-center">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} id="add-tour" className="space-y-8 lg:w-5xl md:w-xl bg-secondary p-14">
                    <h2 className="text-primary text-3xl mb-10 text-center dark:text-white">Login</h2>
                    <div className="flex flex-col md:flex-row justify-between gap-14">
                        <div className="flex-1">
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="font-yantramanav text-primary text-base p-1 dark:text-white">Admin Email:</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Write your email address" {...field} className="border-0 border-b border-b-primary rounded-none shadow-none p-0 ps-1 text-white dark:placeholder:text-white" />
                                        </FormControl>
                                        <FormMessage className="dark:text-white" />
                                    </FormItem>
                                )}
                            />
                        </div>{/* email */}
                        <div className="flex-1">
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="font-yantramanav text-primary text-base p-1 dark:text-white">Admin Password:</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Write your password" {...field} className="border-0 border-b border-b-primary rounded-none shadow-none p-0 ps-1 text-white dark:placeholder:text-white" />
                                        </FormControl>
                                        <FormMessage className="dark:text-white" />
                                    </FormItem>
                                )}
                            />
                        </div>{/* name */}
                    </div>{/* 1st row */}
                    <Button type="submit" className="p-5 cursor-pointer rounded-none">Log In</Button>
                </form>
            </Form>

            <Link href={"/"}><Button className="rounded-none mt-6 cursor-pointer" size={"lg"}>Go To Home Page</Button></Link>
        </section>
    );
};

export default Login;