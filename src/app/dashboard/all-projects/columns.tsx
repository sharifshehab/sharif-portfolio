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
import EditProject from "@/components/modules/Projects/EditProject"
import { useState } from "react"
// import { revalidateTag } from "next/cache"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export interface IUpcomingFeatures {
    title: string;
    description: string;
}
export interface IProjectChallenges {
    title: string;
    description: string;
}

export interface IProject {
    _id: string;
    name: string;
    subTitle: string;
    description: string;
    thumbnail: string;
    technology: string[];
    features: string[];
    githubRepo: string;
    liveLink: string;
    upcomingFeatures?: IUpcomingFeatures[]
    projectChallenges?: IProjectChallenges[]
    createdAt: string;
    updatedAt: string;
}

export const columns: ColumnDef<IProject>[] = [
    {
        accessorKey: "name",
        header: "Name",
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

            const [open, setOpen] = useState(false);

            // Delete project
            const handleDeleteProject = async () => {
                await deleteProject(_id)
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
                        <DropdownMenuItem asChild>
                            <button onClick={() => setOpen(true)}>Edit</button>
                        </DropdownMenuItem>
                        <EditProject open={open} onOpenChange={setOpen} />
                        <DropdownMenuItem onClick={handleDeleteProject}>Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },
]