"use client"
import { useParams } from "next/navigation"

export default function ServiceDetails() {

    const { id } = useParams()
    console.log(id);


    return (
        <div>
            <h1>ServiceDetails</h1>

            {/* <h2>Title : {singleData.name}</h2>
            <h2>Description : {singleData.description}</h2> */}

        </div>
    )
}
