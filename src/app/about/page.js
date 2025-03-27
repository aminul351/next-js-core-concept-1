"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React from 'react'

export default function AboutPage() {

    const isLoggedIn = false;
    const router = useRouter();
    const handleNavigate = () => {
        if (isLoggedIn) {
            router.push("/about/address")
        }
        else{
            router.push("/")
        }
    }


    return (
        <div>
            <h1>AboutPage</h1>
            <p className='text-blue-600'><Link href="/about/address">Address</Link></p>
            <button onClick={handleNavigate} className='btn-primary px-3 py-2 bg-blue-600 my-3'>Address</button>
        </div>
    )
}
