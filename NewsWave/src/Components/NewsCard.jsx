const NewsCard = ({ result }) => {
  return (
    <li >
      <a href={result.url} target="_blank" rel="noopener noreferrer" >
        {result.thumbnail && (
          <img
            src={result.thumbnail}
            alt={result.title}
            
          />
        )}
        <div >
          <h3 >
            {result.title}
          </h3>
          <p >{new Date(result.date).toLocaleDateString()}</p>
          <p >{result.excerpt}</p>
        </div>
      </a>
    </li>
  );
};

export default NewsCard;
