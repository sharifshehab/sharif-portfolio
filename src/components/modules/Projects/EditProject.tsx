/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { Button } from "@/components/ui/button";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { toast } from "sonner";
import { z } from "zod";
import { useState } from "react";
import SingleImageUploader from "@/components/ui/SingleImageUploader";
import LexicalEditor from "../Editor/LexicalEditor";
import { IProject } from "@/types";
import Image from "next/image";
import { updateProject } from "@/services/ProjectServices/ProjectApi";
import { useRouter } from "next/navigation";

const EditProjectForm = ({ id, project }: { id: string, project: any }) => {
    const { name, title, description, thumbnail, technologies, features, frontEndGithubRepo, liveLink, backEndGithubRepo } = project || {}
    const [image, setImage] = useState<File | null>(null);
    const router = useRouter();
    // using ZOD
    const registrationFormSchema = z.object({
        name: z
            .string()
            .min(5, { message: "Name must be at least 5 characters long." })
            .max(25, { message: "Name cannot exceed 25 characters." }),
        title: z
            .string()
            .min(1, { message: "Title is required." }),
        description: z
            .string()
            .min(1, { message: "Description is required." }),
        thumbnail: z
            .string()
            .optional(),
        technologies: z
            .string()
            .min(1, { message: "Technologies is required." }),
        features: z
            .string()
            .min(1, { message: "Features is required." }),
        frontEndGithubRepo: z
            .string()
            .min(1, { message: "Frontend Github Repository is required." }),
        backEndGithubRepo: z
            .string()
            .min(1, { message: "Backend Github Repository is required." }),
        liveLink: z
            .string()
            .min(1, { message: "Live Link is required." }),
    });

    const form = useForm<z.infer<typeof registrationFormSchema>>({
        resolver: zodResolver(registrationFormSchema),
        defaultValues: {
            name: name,
            title: title,
            description: description,
            technologies: technologies?.join(", "),
            features: features?.join(", "),
            frontEndGithubRepo: frontEndGithubRepo,
            backEndGithubRepo: backEndGithubRepo,
            liveLink: liveLink,
        },
    });

    const onSubmit: SubmitHandler<IProject> = async (data: z.infer<typeof registrationFormSchema>) => {

        try {
            const formData = new FormData();
            const submittedData = {
                ...data,
                technologies: data.technologies ? data.technologies.split(",").map((technology: string) => technology.trim()) : [],
                features: data.features ? data.features.split(",").map((feature: string) => feature.trim()) : [],
            }
            formData.append("data", JSON.stringify(submittedData));
            formData.append("file", image as File);

            const loadingToast = toast.loading("Updating project...", {
                style: {
                    background: "#02245b",
                    color: "#ff5e14 ",
                    fontWeight: "bold"
                }
            });
            const result = await updateProject(id, formData);
            if (result.success) {
                form.reset();
                toast.success("Project updated successfully.", {
                    id: loadingToast,
                    style: {
                        background: "#ff5e14",
                        color: "#02245b",
                        fontWeight: "bold"
                    }
                });
                router.push('/dashboard/all-projects');
            }

        } catch (error: any) {
            console.error(error);
            toast.error(error)
        }
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} id="edit-project" >
                <h2 className="text-3xl mb-10 text-center">Edit Project</h2>
                <div className="flex flex-col md:flex-row justify-between gap-14">
                    <div className="flex-1">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-primary text-base p-1">Name:</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Write project name" {...field} className="border-0 border-b border-b-primary rounded-none shadow-none p-0 text-white" />
                                    </FormControl>
                                    <FormMessage className="" />
                                </FormItem>
                            )}
                        />
                    </div>{/* name */}
                    <div className="flex-1">
                        <FormField
                            control={form.control}
                            name="title"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-primary text-base p-1 ">Title:</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Write project title" {...field} className="border-0 border-b border-b-primary rounded-none shadow-none p-0 text-white" />
                                    </FormControl>
                                    <FormMessage className="" />
                                </FormItem>
                            )}
                        />
                    </div>{/* Title */}
                </div>{/* 1st row */}
                <div className="flex flex-col md:flex-row justify-between gap-14">
                    <div className="flex-1">
                        <FormField
                            control={form.control}
                            name="technologies"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-primary text-base p-1">Technologies:</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Write project technology, separate each technology with comma" {...field} className="border-0 border-b border-b-primary rounded-none shadow-none p-0 text-white" />
                                    </FormControl>
                                    <FormMessage className="" />
                                </FormItem>
                            )}
                        />
                    </div>{/* technology */}
                    <div className="flex-1">
                        <FormField
                            control={form.control}
                            name="features"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-primary text-base p-1 ">Features:</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Write project features, separate each feature with comma" {...field} className="border-0 border-b border-b-primary rounded-none shadow-none p-0 text-white" />
                                    </FormControl>
                                    <FormMessage className="" />
                                </FormItem>
                            )}
                        />
                    </div>{/* features */}
                </div>{/* 2nd row */}
                <div className="flex flex-col md:flex-row justify-between gap-14">
                    <div className="flex-1">
                        <FormField
                            control={form.control}
                            name="frontEndGithubRepo"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-primary text-base p-1 ">Frontend Repository:</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Provide frontend github repository Url" {...field} className="border-0 border-b border-b-primary rounded-none shadow-none p-0 text-white" />
                                    </FormControl>
                                    <FormMessage className="" />
                                </FormItem>
                            )}
                        />
                    </div>{/* frontend github repo */}
                    <div className="flex-1">
                        <FormField
                            control={form.control}
                            name="backEndGithubRepo"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-primary text-base p-1 ">Backend Repository:</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Provide backend github repository Url" {...field} className="border-0 border-b border-b-primary rounded-none shadow-none p-0 text-white" />
                                    </FormControl>
                                    <FormMessage className="" />
                                </FormItem>
                            )}
                        />
                    </div>{/* backend github repo */}
                </div>{/* 3rd row */}
                <div className="flex flex-col md:flex-row justify-between gap-14">
                    <div className="flex-1">
                        <FormField
                            control={form.control}
                            name="liveLink"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-primary text-base p-1 ">Project Live Url:</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Provide project live Url" {...field} className="border-0 border-b border-b-primary rounded-none shadow-none p-0 text-white" />
                                    </FormControl>
                                    <FormMessage className="" />
                                </FormItem>
                            )}
                        />
                    </div>{/* Project Live Url */}
                </div>{/* 4th row */}


                <div className="flex flex-col md:flex-row justify-between gap-14 py-10">
                    {!image && (
                        <div>
                            <p className="text-primary text-base mb-5">Current image</p>
                            <Image alt={title} src={thumbnail} style={{ width: "auto", height: "auto" }} width={300} height={300} className="mx-auto max-h-full rounded object-contain" />
                        </div>
                    )
                    }
                    <div className="flex-1">
                        <h3 className="text-primary text-base mb-5">Image</h3>
                        <SingleImageUploader onChange={setImage} />
                    </div>{/* blog thumbnail */}
                </div>{/* 2nd row */}

                <div className="">
                    <FormField
                        control={form.control}
                        defaultValue={description}
                        name="description"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-primary text-base p-1 ">Project Description:</FormLabel>
                                <FormControl>
                                    <LexicalEditor
                                        value={field.value}
                                        onChange={field.onChange}
                                    />
                                </FormControl>
                                <FormMessage className="" />
                            </FormItem>
                        )}
                    />

                </div>
                {/* 5th row */}
                <div className="flex flex-col items-end mt-5">
                    <Button type="submit" className="rounded-none cursor-pointer text-white">Update Project</Button>
                </div>
            </form>
        </Form>
    );
};

export default EditProjectForm;