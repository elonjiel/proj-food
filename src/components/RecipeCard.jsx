import React from 'react'
import {Link} from 'react-router-dom'

function RecipeCard({recipe}) {
  const { image, label, cuisineType, mealType, uri } = recipe?.recipe

  const id = uri?.split("#")[1]


  return (
    <Link to ={`/recipes/${id}`} className="w-full md:w-[245px]">
        <div className="bg-_gradient shadow w-full rounded-lg">
          <img src={image} alt={label} className="rounded-lg h-[200px] md:h-[150px] w-full" />

          <div className="p-3">
                    <p className="text-white font-semibold text-[24px]">{label}</p>

                    <div className="mt-2">
                        <span className="px-2 py-1 text-[13px] lowercase bg-stone-100/20 shadow-xl rounded-full mr-3 text-yellow-400">
                            {cuisineType}
                        </span>
                        <span className="px-2 py-1 text-[13px] lowercase bg-stone-100/20 shadow-xl rounded-full text-yellow-400">
                            {mealType}
                        </span>
                    </div>
                </div>
        </div>
    </Link>
  )
}

export default RecipeCard