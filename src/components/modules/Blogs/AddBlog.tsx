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
import { IBlog } from "@/types";
import { DialogTitle } from "@radix-ui/react-dialog";
import { addBlog } from "@/services/BlogServices/BlogApi";

const AddBlog = () => {
    const [image, setImage] = useState<File | null>(null);
    const [open, setOpen] = useState(false);

    // using ZOD
    const addBlogFormSchema = z.object({
        title: z
            .string()
            .min(5, { message: "Title must be at least 5 characters long." })
            .max(25, { message: "Title cannot exceed 25 characters." }),
        description: z
            .string()
            .min(1, { message: "Description is required." }),
        thumbnail: z
            .string()
            .optional(),
        tags: z
            .string()
            .min(1, { message: "Tags is required." }),
    });

    const form = useForm<z.infer<typeof addBlogFormSchema>>({
        resolver: zodResolver(addBlogFormSchema),
        defaultValues: {
            title: "",
            description: "",
            thumbnail: "",
            tags: "",
        },
    });


    const onSubmit: SubmitHandler<IBlog> = async (data: z.infer<typeof addBlogFormSchema>) => {

        if (!image) {
            return toast.warning("Select blog image");
        }

        try {
            const formData = new FormData();
            const submittedData = {
                ...data,
                tags: data.tags ? data.tags.split(",").map((tag: string) => tag.trim()) : [],
            }
            formData.append("data", JSON.stringify(submittedData));
            formData.append("file", image as File);

            const loadingToast = toast.loading("Adding blog...");
            const result = await addBlog(formData);
            if (result.success) {
                form.reset();
                toast.success("Blog added successfully.", { id: loadingToast });
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
                    <Button variant="outline" className="rounded-none bg-primary mb-3 text-white text-lg cursor-pointer">Add Blog</Button>
                </DialogTrigger>
            </div>
            <DialogContent className="w-[90%] md:max-w-4xl max-h-[90vh] overflow-y-auto rounded-none">

                <DialogHeader className="sr-only">
                    <DialogTitle>Add Blog</DialogTitle>
                </DialogHeader>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} id="add-blog" >
                        <h2 className="text-3xl mb-10 text-center text-secondary">Add New Blog</h2>
                        <div className="flex flex-col md:flex-row justify-between gap-14">
                            <div className="flex-1">
                                <FormField
                                    control={form.control}
                                    name="title"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-base p-1">Title:</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Write blog title" {...field} className="border-0 border-b border-b-primary rounded-none shadow-none p-0 ps-1" />
                                            </FormControl>
                                            <FormMessage className="" />
                                        </FormItem>
                                    )}
                                />
                            </div>{/* title */}
                            <div className="flex-1">
                                <FormField
                                    control={form.control}
                                    name="tags"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-base p-1">Tags:</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Write blog tags, separate each tag with comma" {...field} className="border-0 border-b border-b-primary rounded-none shadow-none p-0 ps-1" />
                                            </FormControl>
                                            <FormMessage className="" />
                                        </FormItem>
                                    )}
                                />
                            </div>{/* tags */}
                        </div>{/* 1st row */}
                        <div className="my-8">

                            <div className="flex-1">
                                <h3 className="mb-2">Image:</h3>
                                <SingleImageUploader onChange={setImage} />
                            </div>{/* blog thumbnail */}
                        </div>{/* 2nd row */}

                        <div className="">
                            <FormField
                                control={form.control}
                                name="description"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-base p-1 ">Blog Description:</FormLabel>
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
                        {/* last row */}
                    </form>
                </Form>

                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant="outline" className="rounded-none cursor-pointer">Cancel</Button>
                    </DialogClose>
                    <Button type="submit" form="add-blog" className="rounded-none cursor-pointer">Add Blog</Button>
                </DialogFooter>
            </DialogContent>


        </Dialog>
    );
};

export default AddBlog;