// get user data
export const getUser = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/me`, {
        credentials: "include",
    })
    const data = await res.json()
    return data
}

// log-out user
export const logoutUser = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/logout`, {
        method: "POST",
        credentials: "include",
    })
    const data = await res.json()
    return data
}