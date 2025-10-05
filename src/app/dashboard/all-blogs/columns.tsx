"use client"

import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"
import { deleteBlog } from "@/services/BlogServices/BlogApi"
import Swal from "sweetalert2"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.


export interface IProject {
    _id: string;
    title: string;
    description: string;
    email: string;
    thumbnail: string;
    tags: string[]
    createdAt: string;
    updatedAt: string;
}


export const columns: ColumnDef<IProject>[] = [
    {
        accessorKey: "title",
        header: "Title",
        size: 150,
    },
    {
        accessorKey: "description",
        header: "Description",
        cell: (info) => info.getValue(),
        size: 300,
    },
    {
        accessorKey: "createdAt",
        header: "Created On",
        size: 150,
    },
    {
        id: "actions",
        header: "Actions",
        cell: ({ row }) => {
            const { _id } = row.original

            // Delete blog
            const handleDeleteBlog = async () => {
                const result = await Swal.fire({
                    title: "Are you sure woy want to delete this blog?",
                    text: "You won't be able to revert this!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#ff5e14",
                    cancelButtonColor: "#02245b",
                    confirmButtonText: "Yes, delete it!"
                })

                if (result.isConfirmed) {
                    await deleteBlog(_id)
                    Swal.fire({
                        title: "Deleted!",
                        text: "Blog has been deleted.",
                        icon: "success",
                        confirmButtonColor: "#02245b",
                    });
                }

            }

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0 rounded-none cursor-pointer hover:bg-primary">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="rounded-none">
                        <DropdownMenuItem><Link href={`/dashboard/projects/${_id}`}>View</Link></DropdownMenuItem>
                        <DropdownMenuItem><Link href={`/dashboard/all-blogs/${_id}`}>Edit</Link></DropdownMenuItem>
                        <DropdownMenuItem onClick={handleDeleteBlog}><span className="cursor-pointer">Delete</span></DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },
]