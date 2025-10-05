// get user data
export const getUser = async () => {
    const res = await fetch(`/api/v1/user/me`, {
        credentials: "include",
    })
    const data = await res.json()
    return data
}

// log-out user
export const logoutUser = async () => {
    const res = await fetch(`/api/v1/auth/logout`, {
        method: "POST",
        credentials: "include",
    })
    const data = await res.json()
    return data
}