const fetchData = async (searchTerm, totalNutrients) => {
    const options = {
      method: 'GET',
      url: 'https://edamam-food-and-grocery-database.p.rapidapi.com/api/food-database/v2/parser',
      params: {
        'nutrition-type': 'cooking',
        'category[0]': 'generic-foods',
        'health[0]': 'alcohol-free',
        'sugar': totalNutrients.SUGAR.added,
        ingr: searchTerm // Pass the search term as 'ingr' parameter
      },
      headers: {
        'X-RapidAPI-Key': 'b8784b93c6mshe3a69f0a5cf1ec7p1191f4jsn1507d3048a9f',
        'X-RapidAPI-Host': 'edamam-food-and-grocery-database.p.rapidapi.com'
      }
    };
  
    try {
      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  };
  
  const searchFood = async () => {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value;
  
    // Example: Retrieve or calculate the totalNutrients value
    const totalNutrients = {
      SUGAR: {
        added: 10,
      }
    };
  
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = 'Loading...';
  
    const data = await fetchData(searchTerm, totalNutrients);
  
    if (data) {
      // Handle the received data and display the results
      resultsDiv.innerHTML = JSON.stringify(data, null, 2);
    } else {
      resultsDiv.innerHTML = 'An error occurred while fetching the data.';
    }
  };
  