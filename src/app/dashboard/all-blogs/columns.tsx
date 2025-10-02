"use client"

import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { deleteProject, getProjects } from "@/services/ProjectServices/ProjectApi"
import Link from "next/link"
import { deleteBlog } from "@/services/BlogServices/BlogApi"

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
    },
    {
        accessorKey: "description",
        header: "Description",
    },
    {
        accessorKey: "createdAt",
        header: "Created On",
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const { _id } = row.original
            // console.log("project", project);



            // Delete project
            const handleDeleteBlog = async () => {
                await deleteBlog(_id)
            }

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem><Link href={`/dashboard/projects/${_id}`}>View</Link></DropdownMenuItem>
                        <DropdownMenuItem><Link href={`/dashboard/all-blogs/${_id}`}>Edit</Link></DropdownMenuItem>
                        <DropdownMenuItem onClick={handleDeleteBlog}>Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },
]