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
import { IBlog } from "@/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { updateBlog } from "@/services/BlogServices/BlogApi";

const EditBlogForm = ({ id, blog }: { id: string, blog: any }) => {
    const { title, description, thumbnail, tags } = blog || {}
    const [image, setImage] = useState<File | null>(null);
    const router = useRouter();

    // using ZOD
    const editBlogFormSchema = z.object({
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

    const form = useForm<z.infer<typeof editBlogFormSchema>>({
        resolver: zodResolver(editBlogFormSchema),
        defaultValues: {
            title: title,
            description: description,
            tags: tags?.join(", "),
        },
    });
    const onSubmit: SubmitHandler<IBlog> = async (data: z.infer<typeof editBlogFormSchema>) => {

        try {
            const formData = new FormData();
            const submittedData = {
                ...data,
                tags: data.tags ? data.tags.split(",").map((tag: string) => tag.trim()) : [],
            }
            formData.append("data", JSON.stringify(submittedData));
            formData.append("file", image as File);

            const loadingToast = toast.loading("Updating blog...",
                {
                    style: {
                        background: "#02245b",
                        color: "#ff5e14 ",
                        fontWeight: "bold"
                    }
                }
            );
            const result = await updateBlog(id, formData);
            if (result.success) {
                form.reset();
                toast.success("Blog updated successfully.", {
                    id: loadingToast,
                    style: {
                        background: "#ff5e14",
                        color: "#02245b",
                        fontWeight: "bold"
                    }
                });
                router.push('/dashboard/all-blogs');
            }

        } catch (error: any) {
            console.error(error);
            toast.error(error)
        }
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} id="edit-project" className="py-10">
                <h2 className="text-3xl mb-10 text-center text-white">Update Blog</h2>
                <div className="flex flex-col md:flex-row justify-between gap-14">
                    <div className="flex-1">
                        <FormField
                            control={form.control}
                            name="title"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="p-1 text-base text-primary">Title:</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Write blog title" {...field} className="border-0 border-b border-b-primary rounded-none shadow-none p-0 ps-1 text-white" />
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
                                    <FormLabel className="text-primary text-base p-1 ">Tags:</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Write blog tags, separate each tag with comma" {...field} className="border-0 border-b border-b-primary rounded-none shadow-none p-0 ps-1 text-white" />
                                    </FormControl>
                                    <FormMessage className="" />
                                </FormItem>
                            )}
                        />
                    </div>{/* tags */}
                </div>{/* 1st row */}
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
                        name="description"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-primary text-base p-1 ">Blog Description:</FormLabel>
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
                {/* last row */}
                <div className="flex flex-col items-end mt-5">
                <Button type="submit" className="rounded-none cursor-pointer text-white">Update Blog</Button>
                </div>
            </form>
        </Form>
    );
};

export default EditBlogForm;