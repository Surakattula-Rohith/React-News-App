import React, { useState } from "react";
import TrendingResults from "./TrendingResults"; // Importing the TrendingResults component

const topics = ["Business", "Entertainment", "General", "Lifestyle", "Politics", "Science", "Sports", "Technology", "World"];

const TrendingNews = () => {
  const [selectedTopic, setSelectedTopic] = useState("General");

  const handleTopicClick = (topic) => {
    setSelectedTopic(topic); 
  };

  return (
    <div >
      <h1 >Trending Topics</h1>
      <div>
        {topics.map((topic, index) => (
          <button
            key={index}
             onClick={() => handleTopicClick(topic)}
          >
            {topic}
          </button>
        ))}
      </div>

      <TrendingResults topic={selectedTopic} />
    </div>
  );
};

export default TrendingNews;
