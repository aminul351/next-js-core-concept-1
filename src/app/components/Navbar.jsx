import Link from 'next/link'
import React from 'react'

export default function Navbar() {
    return (
        <div>
            <ul className="flex justify-center space-x-4 my-4">
                <Link href="/"><li>Home</li></Link>
                <Link href="/about"><li>About</li></Link>
                <Link href="/services"><li>Services</li></Link>
            </ul>
        </div>
    )
}
