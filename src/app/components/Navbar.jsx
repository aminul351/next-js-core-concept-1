"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function Navbar() {

    const pathName = usePathname()
    console.log(pathName.includes("dashboard"));

    if(!pathName.includes("dashboard")){
        return (
            <div>
                <ul className="flex justify-center space-x-4 my-4">
                    <Link href="/"><li>Home</li></Link>
                    <Link href="/about"><li>About</li></Link>
                    <Link href="/services"><li>Services</li></Link>
                    <Link href="/posts"><li>Posts</li></Link>
                    <Link href="/meals"><li>Meals</li></Link>
                </ul>
            </div>
        )
    }

    else{
        return " "
    }


    
}
