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
import { deleteProject } from "@/services/ProjectServices/ProjectApi"
import Link from "next/link"

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
    title: string;
    description: string;
    thumbnail: string;
    technologies: string[];
    features: string[];
    frontEndGithubRepo: string;
    backEndGithubRepo: string;
    liveLink: string;
    createdAt: string;
    updatedAt: string;
}

export const columns: ColumnDef<IProject>[] = [
    {
        accessorKey: "name",
        header: "Name",
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
                        <DropdownMenuItem><Link href={`/all-projects/${_id}`}>View</Link></DropdownMenuItem>
                        <DropdownMenuItem><Link href={`/dashboard/all-projects/${_id}`}>Edit</Link></DropdownMenuItem>
                        <DropdownMenuItem onClick={handleDeleteProject}><span className="cursor-pointer">Delete</span></DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },
]