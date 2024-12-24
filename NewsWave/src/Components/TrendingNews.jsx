import React, { useState } from "react";
import TrendingResults from "./TrendingResults"; // Importing the TrendingResults component

const topics = ["Business", "Entertainment", "General", "Lifestyle", "Politics", "Science", "Sports", "Technology", "World"];

const TrendingNews = () => {
  const [selectedTopic, setSelectedTopic] = useState("General");

  const handleTopicClick = (topic) => {
    setSelectedTopic(topic);
  };

  return (
    <div className="p-4 bg-gray-50 rounded-lg shadow-lg mt-8">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
        Trending Topics
      </h1>
      <div className="flex flex-wrap justify-center gap-6 mb-6">
        {topics.map((topic, index) => (
          <button
            key={index}
            onClick={() => handleTopicClick(topic)}
            className={`px-6 py-3 rounded-lg text-white font-semibold text-lg transition-all duration-300
              ${selectedTopic === topic ? 'bg-blue-600' : 'bg-gray-500 hover:bg-blue-500'} 
              focus:outline-none focus:ring-2 focus:ring-blue-500`}
          >
            {topic}
          </button>
        ))}
      </div>

      {/* Pass the selected topic to the TrendingResults component */}
      <TrendingResults topic={selectedTopic} />
    </div>
  );
};


export default TrendingNews;
