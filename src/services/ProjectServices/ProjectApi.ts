"use server"

import { revalidateTag } from "next/cache"
import { cookies } from "next/headers"

// get all projects
export const getProjects = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/project/projects`, { next: { tags: ["PROJECTS"] } })
    const data = await res.json()
    return data
}

// delete project
export const deleteProject = async (id: string) => {
    const token = (await cookies()).get("accessToken")?.value
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/project/${id}`, {
        method: "DELETE",
        headers: { Authorization: `${token}` }
    })
    const data = await res.json()
    if (data.success) {
        revalidateTag("PRODUCTS")
    }
    return data
}

