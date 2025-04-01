const getPostDetails = async(post_id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${post_id}`)
    const data = await res.json();
    return data;
}



export async function generateMetadata({ params }){
    // read route params
    const  id  = (await params).id;
   
    // fetch data
    const singlePost = await getPostDetails(id)
   
    return {
      title: singlePost.title,
    }
  }
export default async function PostDetails({params}) {
    
    const id = await params.id;
    const postDetails = await getPostDetails(id)
    console.log(postDetails);

    return (
        <div>
           <h1> PostDetails</h1>

           <h3>{postDetails.id}.{postDetails.title}</h3>
           <p>{postDetails.body}</p>

        </div>
    )
}
