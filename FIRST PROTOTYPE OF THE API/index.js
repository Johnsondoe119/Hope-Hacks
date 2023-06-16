const axios = require('axios');

const fetchData = async () => {
  const options = {
    method: 'GET',
    url: 'https://edamam-food-and-grocery-database.p.rapidapi.com/api/food-database/v2/parser',
    params: {
      'nutrition-type': 'cooking',
      'category[0]': 'generic-foods',
      'health[0]': 'alcohol-free'
    },
    headers: {
      'X-RapidAPI-Key': 'b8784b93c6mshe3a69f0a5cf1ec7p1191f4jsn1507d3048a9f',
      'X-RapidAPI-Host': 'edamam-food-and-grocery-database.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

fetchData();
