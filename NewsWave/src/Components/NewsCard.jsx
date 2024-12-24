const NewsCard = ({ result }) => {
  return (
    <li className="bg-white rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-300 overflow-hidden max-w-sm mx-auto">
      <a
        href={result.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block group"
      >
        {result.thumbnail && (
          <div className="overflow-hidden">
            <img
              src={result.thumbnail}
              alt={result.title}
              className="w-full h-48 object-cover group-hover:scale-105 transform transition-transform duration-300"
            />
          </div>
        )}
        <div className="p-4 space-y-2">
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
            {result.title}
          </h3>
          <p className="text-sm text-gray-500">
            {new Date(result.date).toLocaleDateString()}
          </p>
          <p className="text-gray-700 line-clamp-3 group-hover:text-gray-800 transition-colors duration-300">
            {result.excerpt}
          </p>
        </div>
      </a>
    </li>
  );
};

export default NewsCard;
