
// config.js
export const Base_Url = (country, category, apikey, pageSize) => 
    `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apikey}&pageSize=${pageSize}`;
  