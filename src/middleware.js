/* 
_____ basic middleware ______
import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {
  return NextResponse.redirect(new URL('/', request.url))
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/about',
}

*/


import { NextResponse } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request) {

    let cookie = request.cookies.get('nextjs')
    console.log(cookie)

    const dummyUserData = {
        role: 'admin',
        // role : 'user',
        email: 'test@gmail.com'
    }

    let isServicePage = request.nextUrl.pathname.startsWith('/services')
    let isAdmin = dummyUserData.role == "admin"

    if (isServicePage && !isAdmin) {
        return NextResponse.rewrite(new URL('/', request.url))
    }

    return NextResponse.next()
}

/*

ekhane bepar ta hocce middleware use kore amra admin user check kore, amra take specipic route e jaite dibo kina?

redirect =>  url and ui change 
rewrite => url change X just ui

*/