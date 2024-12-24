import { useEffect, useState } from "react";
import axios from "axios";
import NewsCard from "./NewsCard"; // Import NewsCard

const SearchResults = ({ query }) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (query) {
      const fetchResults = async () => {
        setLoading(true);
        const options = {
          method: 'GET',
          url: 'https://news-api14.p.rapidapi.com/v2/search/articles',
          params: {
            query: query,
            language: 'en',
            page: '1'
          },
          headers: {
            'x-rapidapi-key': '723ce1b205mshd1a22dd217b3f06p12d3e8jsn0c8cddd020ef',
            'x-rapidapi-host': 'news-api14.p.rapidapi.com'
          }
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
    <div className="mt-4">
      {loading && <p>Loading results for: <strong>{query}</strong></p>}
      {!loading && results.length === 0 && <p >No results found for: <strong>{query}</strong></p>}

      {!loading && results.length > 0 && (
        <div>
          <h2 >Results for: <strong>{query}</strong></h2>
          <ul >
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
