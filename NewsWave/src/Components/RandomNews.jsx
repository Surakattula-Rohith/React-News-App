import { useEffect, useState } from "react";
import axios from "axios";
import NewsCard from "./NewsCard"; // Import NewsCard

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
    <div >
      {loading && <p >Loading a random article...</p>}
      {!loading && article && (
        <div >
          <h2 >Random Article</h2>
          <div>
            <ul>
              <NewsCard result={article} c/>
            </ul>
          </div>
        </div>
      )}
      {!loading && !article && <p >No article found.</p>}
    </div>
  );
};

export default RandomNews;
