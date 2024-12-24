import { useState, useEffect } from 'react';
import axios from 'axios';
import NewsCard from './NewsCard'; // Assuming NewsCard is a separate component

const RandomNews = () => {
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchRandomArticle = async () => {
      setLoading(true);
      const options = {
        method: 'GET',
        url: 'https://news-api14.p.rapidapi.com/v2/article/random',
        params: {
          language: 'en',
          topic: 'General'
        },
        headers: {
          'x-rapidapi-key': '723ce1b205mshd1a22dd217b3f06p12d3e8jsn0c8cddd020ef',
          'x-rapidapi-host': 'news-api14.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        setArticle(response.data.data);
      } catch (error) {
        console.error('Error fetching random article:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRandomArticle();
  }, []);

  return (
    <div className="p-8 bg-gray-50 rounded-lg shadow-lg max-w-4xl mx-auto mt-8">
      {loading && (
        <p className="text-blue-500 font-medium text-lg text-center">
          Loading a random article...
        </p>
      )}
      {!loading && article && (
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
            Random Article
          </h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <ul>
              <NewsCard result={article} />
            </ul>
          </div>
        </div>
      )}
      {!loading && !article && (
        <p className="text-red-500 font-medium text-lg text-center">
          No article found.
        </p>
      )}
    </div>
  );
};

export default RandomNews;

