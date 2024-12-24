import { useEffect, useState } from "react";
import axios from "axios";
import NewsCard from "./NewsCard"; // Import NewsCard

const SearchResults = ({ query }) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [firstLoad, setFirstLoad] = useState(true); // Track if it's the first load

  useEffect(() => {
    if (query) {
      const fetchResults = async () => {
        setLoading(true);
        setFirstLoad(false); // Set first load to false after the first request
        const options = {
          method: 'GET',
          url: 'https://news-api14.p.rapidapi.com/v2/search/articles',
          params: {
            query: query,
            language: 'en',
            page: '1',
          },
          headers: {
            'x-rapidapi-key': '723ce1b205mshd1a22dd217b3f06p12d3e8jsn0c8cddd020ef',
            'x-rapidapi-host': 'news-api14.p.rapidapi.com',
          },
        };

        try {
          const response = await axios.request(options);
          setResults(response.data.data);
        } catch (error) {
          console.error('Error fetching search results:', error);
        } finally {
          setLoading(false);
        }
      };

      fetchResults();
    }
  }, [query]);

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg transition-all duration-300">
     
      {loading && (
        <p className="text-blue-500 font-medium">
          Loading results for: <span className="font-bold">{query}</span>
        </p>
      )}

      {!loading && results.length === 0 && !firstLoad && (
        <p className="text-gray-500 font-medium">
          No results found for: <span className="font-bold">{query}</span>
        </p>
      )}

      {!loading && results.length > 0 && (
        <div>
          <h2 className="text-lg font-bold text-gray-800 mb-4">
            Results for: <span className="text-blue-600">{query}</span>
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {results.map((result, index) => (
              <NewsCard key={index} result={result} />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};


export default SearchResults;
