export const dynamic = 'force-static'
 
export async function GET() {
//   const res = await fetch('https://data.mongodb-api.com/...', {
//     headers: {
//       'Content-Type': 'application/json',
//       'API-Key': process.env.DATA_API_KEY,
//     },
//   })
//   const data = await res.json()
  const data = {
    message : "successful",
    status : 200
  }
 
  return Response.json({ data })
}


 
export async function POST(req) {
   
    const postedData = await  req.json()
     
      return Response.json({ postedData })
    }
    
