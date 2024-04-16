import React, {useState, useEffect} from 'react'
import Loading from './Loading'
import Searchbar from './Searchbar'
import {BiSearchAlt2} from "react-icons/bi"
import RecipeCard from './RecipeCard'
import {fetchRecipes} from '../utilities'
import Button from './Button'

function Recipes() {

  const [recipes, setRecipes] = useState([])
  const [query, setQuery] = useState("omelette")
  const [limit, setLimit] = useState(24)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  const fetchRecipe = async () => {
        try {
            const data = await fetchRecipes({ query, limit })

            setRecipes(data)

            setLoading(false)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
   }


   useEffect(() => {
        setLoading(true)
        fetchRecipe()

   }, [])
  
   const handleSearchedRecipe = async (e) => {
        e.preventDefault()
        fetchRecipe()
   }
   if(loading){
        return(
            <Loading />
        )
   }

  return (
    <div className="w-full">
        <div className="w-full flex items-center justify-center pt-10 pb-5 px-0 md:px-10">
            <form className="w-full lg:w-2/4" onSubmit={handleSearchedRecipe}>
                <Searchbar placeholder="eg. Chicken, Cheese, Cake"
                handleInputChange={handleChange}
                rightIcon={
                    <BiSearchAlt2 className="text-gray-600" onClick={handleSearchedRecipe}/>
                }
                />
            </form>
        </div>
        {
            recipes?.length > 0 ? (
                <>
                    <div className="w-full flex flex-wrap gap-10 px-0 lg:px-10 py-10">
                    {
                                recipes?.map((item, index) => (
                                    <RecipeCard 
                                    recipe={item} key={index} />))
                            }
                    </div>

                    <div className="w-full flex items-center justify-center py-10">
                    <p className="bg-transparent text-white px-3 py-1 text-md">Uncover more recipes using the Search Bar.</p>

                    </div>
                </>
            ) : <div className="text-white w-full items-center justify-center py-10">
                    <p className="text-center">No Recipe Found</p>
                </div>
        }
    </div>
  )
}

export default Recipes