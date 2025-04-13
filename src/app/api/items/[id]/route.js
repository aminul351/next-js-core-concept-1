import dbConnect from "@/app/lib/dbConnect";
import { ObjectId } from "mongodb";


// single specific  data 
export async function GET(req, { params }) {

    const id = await params;
    const singleData = await dbConnect("topics").findOne({ _id: new ObjectId(id) })
    return Response.json(singleData)
}


// delete 
export async function DELETE(req, {params}) {

    const id = await params;
    console.log(id);

    const deletedData = await dbConnect("topics").deleteOne({ _id: new ObjectId(id) })

    return Response.json(deletedData)
}



// update 
export async function PATCH(req, { params }) {

    const id = await params;
    const postedData = await req.json()
    const filter = { _id: new ObjectId(id) }
    const updatedResponse = await dbConnect("topics").updateOne(filter,
        {
          $set : {...postedData}
        },

        { upsert : true }
    )

    return Response.json(updatedResponse)
}
