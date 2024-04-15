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
      // console.log(data)
      return data?.hits;
    } catch (error) {
      console.error('Error fetching recipes:', error);
      return null; 
    }
  }

  export async function fetchRecipe (id){
    const url = `https://api.edamam.com/search?r=http://www.edamam.com/ontologies/edamam.owl%23&app_id=${id}&app_key=${key}`;
   
    try {
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error('Failed to fetch recipes');
      }
  
      const data = await response.json();
 
      return data[0];
      
    } catch (error) {
      console.error('Error fetching recipes:', error);
      return null; 
    }
  }