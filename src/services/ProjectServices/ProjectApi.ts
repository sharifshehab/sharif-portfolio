/* eslint-disable @typescript-eslint/no-explicit-any */
"use server"
import { revalidateTag } from "next/cache"
import { cookies } from "next/headers"


// get all projects
export const getProjects = async (limit?: number) => {
    const url = limit ? `${process.env.NEXT_PUBLIC_API_URL}/project/projects?limit=${limit}` : `${process.env.NEXT_PUBLIC_API_URL}/project/projects`


    const res = await fetch(url, { next: { tags: ["PROJECTS"] } })

    if (!res.ok) {
        throw new Error("Failed to fetch project data")
    }

    const data = await res.json()
    return data
}

// add project
export const addProject = async (formData: any) => {
    try {
        const token = (await cookies()).get("accessToken")?.value
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/project/projects`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`
            },
            body: formData,
        })
        const data = await res.json()
        if (data.success) {
            revalidateTag("PROJECTS")
        }
        return data
    } catch (error) {
        console.log(error);
    }
}

// update project
export const updateProject = async (id: string, formData: any) => {
    try {
        const token = (await cookies()).get("accessToken")?.value
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/project/${id}`, {
            method: "PATCH",
            headers: {
                Authorization: `Bearer ${token}`
            },
            body: formData,

        })
        const data = await res.json()
        if (data?.success) {
            revalidateTag("PROJECTS")
        }
        return data
    } catch (error) {
        console.log(error);
    }
}


// delete project
export const deleteProject = async (id: string) => {
    const token = (await cookies()).get("accessToken")?.value
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/project/${id}`, {
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${token}`
        },
    })
    const data = await res.json()
    if (data.success) {
        revalidateTag("PROJECTS")
    }
    return data
}
