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
import LexicalEditor from "../Editor/LexicalEditor";
import { DialogTitle } from "@radix-ui/react-dialog";
import { addDetails } from "@/services/DetailsServices/DetailsApi";

const AddDetails = () => {
    const [open, setOpen] = useState(false);

    // using ZOD
    const detailsFormSchema = z.object({
        about: z
            .string()
            .min(1, { message: "About is required." }),
        title: z
            .string()
            .min(1, { message: "Title is required." }),
        institute: z
            .string()
            .min(1, { message: "Institute is required." }),
        session: z
            .string()
            .min(1, { message: "Session is required." }),
    });

    const form = useForm<z.infer<typeof detailsFormSchema>>({
        resolver: zodResolver(detailsFormSchema),
        defaultValues: {
            about: "",
            title: "",
            institute: "",
            session: "",
        },
    });

    const onSubmit: SubmitHandler<z.infer<typeof detailsFormSchema>> = async (data) => {

        try {

            const formData = {
                about: data.about,
                education: [{
                    title: data.title,
                    institute: data.institute,
                    session: data.session,
                }]
            }

            const loadingToast = toast.loading("Adding details...");
            const result = await addDetails(formData);
            if (result.success) {
                form.reset();
                toast.success("Details added successfully.", { id: loadingToast });
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
                    <Button variant="outline" className="rounded-none bg-primary mb-3 text-white text-lg cursor-pointer">Add Details</Button>
                </DialogTrigger>
            </div>
            <DialogContent className="w-[90%] md:max-w-4xl max-h-[90vh] overflow-y-auto rounded-none">

                <DialogHeader className="sr-only">
                    <DialogTitle>Edit profile</DialogTitle>
                </DialogHeader>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} id="add-details" >
                        <h2 className="text-3xl mb-10 text-center">Add About Details</h2>

                        <div className="mb-8">
                            <FormField
                                control={form.control}
                                name="about"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-base p-1">About:</FormLabel>
                                        <FormControl>
                                            <LexicalEditor
                                                onChange={field.onChange}
                                            />
                                        </FormControl>
                                        <FormMessage className="" />
                                    </FormItem>
                                )}
                            />
                        </div>{/* 1st row */}

                        <div className="flex flex-col md:flex-row justify-between gap-14">
                            <div className="flex-1">
                                <FormField
                                    control={form.control}
                                    name="title"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-base p-1">Education Title:</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Write education title" {...field} className="border-0 border-b border-b-primary rounded-none shadow-none p-0 ps-1" />
                                            </FormControl>
                                            <FormMessage className="" />
                                        </FormItem>
                                    )}
                                />
                            </div>{/* name */}

                        </div>{/* 1st row */}

                        <div className="flex flex-col md:flex-row justify-between gap-14 my-8">
                            <div className="flex-1">
                                <FormField
                                    control={form.control}
                                    name="institute"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-base p-1">Institute:</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Write institute name" {...field} className="border-0 border-b border-b-primary rounded-none shadow-none p-0 ps-1" />
                                            </FormControl>
                                            <FormMessage className="" />
                                        </FormItem>
                                    )}
                                />
                            </div>{/* institute */}
                            <div className="flex-1">
                                <FormField
                                    control={form.control}
                                    name="session"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-base p-1">Session:</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Write session" {...field} className="border-0 border-b border-b-primary rounded-none shadow-none p-0 ps-1" />
                                            </FormControl>
                                            <FormMessage className="" />
                                        </FormItem>
                                    )}
                                />
                            </div>{/* session */}
                        </div>{/* 2nd row */}
                    </form>
                </Form>

                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant="outline" className="rounded-none cursor-pointer">Cancel</Button>
                    </DialogClose>
                    <Button type="submit" form="add-details" className="rounded-none cursor-pointer">Add Details</Button>
                </DialogFooter>
            </DialogContent>


        </Dialog>
    );
};

export default AddDetails;