import FormComponents from "./components/FormComponents";


export default async function TopicsPage() {

    const res = await fetch("http://localhost:3000/api/items")
    const topics = await res.json()
    console.log(topics);



    return (
        <div>
            <FormComponents />

            <div  className="grid grid-cols-3 gap-4" >
                {
                    topics?.map((topic) => {
                        return <div key={topic._id}>
                            <h3 className="text-2xl font-bold">{topic?.title}</h3>
                            <p>{topic?.description}</p>
                        </div>
                    })
                }
            </div>
        </div>
    )
}
