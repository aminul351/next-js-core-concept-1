const getPostDetails = async(post_id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${post_id}`)
    const data = await res.json();
    return data;
}

export default async function PostDetails({params}) {

    const id = await params.id;
    // console.log(post,"hi");
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
