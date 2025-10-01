export const getProjects = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/project/projects`)
    const data = await res.json()
    return data
}