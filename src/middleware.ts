import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const middleware = async (request: Request) => {

    const token = (await cookies()).get("accessToken")?.value
    if (!token) {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    return NextResponse.next();
}

export const config = {

    matcher: ['/dashboard/details', '/dashboard/all-projects', '/dashboard/all-blogs',],
};