const id = "82ea0b4e"
const key ="82c2cfcec7d47ecbabecae8247ddc582"

export async function fetchRecipes (filter){
    const { query, limit } = filter;

    const url = `https://api.edamam.com/search?q=${query}&app_id=${id}&app_key=${key}&from=0&to=${limit}`;
  
    try {
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error('Failed to fetch recipes');
      }
  
      const data = await response.json();
      console.log(data)
      return data?.hits;
    } catch (error) {
      console.error('Error fetching recipes:', error);
      return null; 
    }
  }


//   https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${apiKey}

// https://www.edamam.com/ontologies/edamam.owl#recipe_3386c47678694b3aa6301e53a7e829f1