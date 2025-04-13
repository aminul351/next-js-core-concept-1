"use client"

export default function FormComponents() {

    const handleSubmit = async (e) => {
        const form = e.target;
        const title = form.title.value;
        const description = form.description.value;
        const payload = { title, description }

        const res = fetch("http://localhost:3000/api/items", {
            method: "POST",
            body: JSON.stringify(payload),
            headers: {
                "Content-Type": "application/json"
            }
        })
        const result = (await res).json()
        console.log(result);
    }

    return (
        <div className="m-6 p-6 bg-gray-900">
            <form action="" onSubmit={handleSubmit} className="space-y-2">
                <input className="border px-4 py-2" type="text" name="title" placeholder="Topic Name" id="" /> <br />
                <input className="border px-4 py-2" type="text" name="description" placeholder="Topic description" id="" /> <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
