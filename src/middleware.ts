// import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export const middleware = async (request: NextRequest) => {

    const token = request.cookies.get('accessToken')
    if (!token) {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    return NextResponse.next();
}

export const config = {

    matcher: ['/dashboard/details', '/dashboard/all-projects', '/dashboard/all-blogs',],
};