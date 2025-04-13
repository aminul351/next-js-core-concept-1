import dbConnect from "@/app/lib/dbConnect"

export async function GET() {

  const data = await dbConnect("topics").find({}).toArray()
 
  return Response.json(data )
}


 
export async function POST(req) {
   
    const postedData = await  req.json()
    const result = await dbConnect("topics").insertOne(postedData)
     
      return Response.json(result)
    }
    
