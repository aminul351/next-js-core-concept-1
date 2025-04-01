
"use client"
import Image from "next/image"
import { useEffect, useState } from "react"


export default function MealPage() {

    const [meals, setMeals] = useState([])
    const [search, setSearch] = useState("")

    useEffect(() => {

        const fetchMeals = async () => {

            try {
                const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
                const data = await res.json()
                setMeals(data?.meals || []);

            } catch (error) {
                console.log(error);
            }
        }

        fetchMeals();

    }, [search])

    console.log(meals);

    return (
        <div className="grid grid-cols-3 gap-6">

            <div className="flex justify-center items-center py-2 px-4">
                <input className="border " value={search} onChange={(e) => setSearch(e.target.value)}   name="" id="" />
            </div>

            {
                meals?.map(meal => <div key={meal?.idMeal} className="border m-4 p-4">
                    <Image src={meal?.strMealThumb} alt={meal?.strMeal} width={400} height={300} />
                    <h2 className="font-bold text-3xl">{meal?.strMeal}</h2>
                    <h2 className="text-xl">{meal?.strCategory}</h2>
                    <p>{meal?.strInstructions}</p>
                </div>)
            }

        </div>
    )
}
