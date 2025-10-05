/* eslint-disable @typescript-eslint/no-explicit-any */
"use server"
import { revalidateTag } from "next/cache"
import { cookies } from "next/headers"


// get details
export const getDetails = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/detail/details`, { next: { tags: ["DETAILS"] } })
    const data = await res.json()
    return data
}

// add details
export const addDetails = async (formData: any) => {
    try {
        const token = (await cookies()).get("accessToken")?.value
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/detail/details`, {
            method: "POST",
            headers: {
                Authorization: `${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
        const data = await res.json()
        if (data.success) {
            revalidateTag("DETAILS")
        }
        return data
    } catch (error) {
        console.log(error);
    }
}

// update details
export const updateDetails = async (id: string, formData: any) => {
    try {
        const token = (await cookies()).get("accessToken")?.value
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/detail/${id}`, {
            method: "PATCH",
            headers: {
                Authorization: `${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
        const data = await res.json()
        if (data?.success) {
            revalidateTag("DETAILS")
        }
        return data
    } catch (error) {
        console.log(error);
    }
}
