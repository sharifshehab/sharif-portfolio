/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTrigger,
} from "@/components/ui/dialog"
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
import { addProject } from "@/services/ProjectServices/ProjectApi";
import { DialogTitle } from "@radix-ui/react-dialog";

const AddProject = () => {
    const [image, setImage] = useState<File | null>(null);
    const [open, setOpen] = useState(false);

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
            name: "",
            title: "",
            description: "",
            technologies: "",
            features: "",
            frontEndGithubRepo: "",
            backEndGithubRepo: "",
            liveLink: "",
        },
    });

    const onSubmit: SubmitHandler<IProject> = async (data: z.infer<typeof registrationFormSchema>) => {
        if (!image) {
            return toast.warning("Select project image");
        }


        try {
            const formData = new FormData();
            const submittedData = {
                ...data,
                technologies: data.technologies.split(",").map((technology: string) => technology.trim()),
                features: data.features.split(",").map((feature: string) => feature.trim()),
            }
            formData.append("data", JSON.stringify(submittedData));
            formData.append("file", image as File);

            const loadingToast = toast.loading("Adding project...");
            const result = await addProject(formData);
            if (result.success) {
                form.reset();
                toast.success("Project added successfully.", { id: loadingToast });
                setOpen(false)
            }

        } catch (error: any) {
            console.error(error);
            toast.error(error)
        }
    }
    return (
        <Dialog open={open} onOpenChange={setOpen}>

            <div className="flex justify-end">
                <DialogTrigger asChild>
                    <Button variant="outline" className="rounded-none bg-primary mb-3 text-white text-lg cursor-pointer">Add Project</Button>
                </DialogTrigger>
            </div>
            <DialogContent className="w-[90%] md:max-w-4xl max-h-[90vh] overflow-y-auto rounded-none">

                <DialogHeader className="sr-only">
                    <DialogTitle>Edit profile</DialogTitle>
                </DialogHeader>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} id="add-project" >
                        <h2 className="text-3xl mb-10 text-center">Add New Project</h2>
                        <div className="flex flex-col md:flex-row justify-between gap-14">
                            <div className="flex-1">
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-base p-1">Name:</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Write project name" {...field} className="border-0 border-b border-b-primary rounded-none shadow-none p-0 ps-1" />
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
                                            <FormLabel className="text-base p-1">Title:</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Write project title" {...field} className="border-0 border-b border-b-primary rounded-none shadow-none p-0 ps-1" />
                                            </FormControl>
                                            <FormMessage className="" />
                                        </FormItem>
                                    )}
                                />
                            </div>{/* Title */}
                        </div>{/* 1st row */}
                        <div className="flex flex-col md:flex-row justify-between gap-14 my-8">
                            <div className="flex-1">
                                <FormField
                                    control={form.control}
                                    name="technologies"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-base p-1">Technologies:</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Write project technology, separate each technology with comma" {...field} className="border-0 border-b border-b-primary rounded-none shadow-none p-0 ps-1" />
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
                                            <FormLabel className="text-base p-1">Features:</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Write project features, separate each feature with comma" {...field} className="border-0 border-b border-b-primary rounded-none shadow-none p-0 ps-1" />
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
                                            <FormLabel className="text-base p-1">Frontend Repository:</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Provide frontend github repository Url" {...field} className="border-0 border-b border-b-primary rounded-none shadow-none p-0 ps-1" />
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
                                            <FormLabel className="text-base p-1">Backend Repository:</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Provide backend github repository Url" {...field} className="border-0 border-b border-b-primary rounded-none shadow-none p-0 ps-1" />
                                            </FormControl>
                                            <FormMessage className="" />
                                        </FormItem>
                                    )}
                                />
                            </div>{/* backend github repo */}
                        </div>{/* 3rd row */}
                        <div className="flex flex-col md:flex-row  items-end justify-between gap-14 my-8">
                            <div className="flex-1">
                                <FormField
                                    control={form.control}
                                    name="liveLink"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-base p-1">Project Live Url:</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Provide project live Url" {...field} className="border-0 border-b border-b-primary rounded-none shadow-none p-0 ps-1" />
                                            </FormControl>
                                            <FormMessage className="" />
                                        </FormItem>
                                    )}
                                />
                            </div>{/* Project Live Url */}
                            <div className="flex-1">
                                <h3 className="mb-2">Image:</h3>
                                <SingleImageUploader onChange={setImage} />
                            </div>{/* Project thumbnail */}
                        </div>{/* 4th row */}

                        <div className="">
                            <FormField
                                control={form.control}
                                name="description"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-base p-1">Project Description:</FormLabel>
                                        <FormControl>
                                            <LexicalEditor
                                                onChange={field.onChange}
                                            />
                                        </FormControl>
                                        <FormMessage className="" />
                                    </FormItem>
                                )}
                            />

                        </div>
                        {/* 5th row */}
                    </form>
                </Form>

                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant="outline">Cancel</Button>
                    </DialogClose>
                    <Button type="submit" form="add-project">Add Project</Button>
                </DialogFooter>
            </DialogContent>


        </Dialog>
    );
};

export default AddProject;