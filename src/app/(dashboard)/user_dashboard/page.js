import React from 'react'

export default function UserDashboardPage({children}) {
    return (
        <div className='grid grid-cols-12 h-screen'>

            <div className='bg-blue-300 col-span-3'>layout</div>
            <div className='bg-blue-100 col-span-9'>content</div>

        </div>
    )
}
