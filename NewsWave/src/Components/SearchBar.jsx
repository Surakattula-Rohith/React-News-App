import SearchResults from "./SearchResults"; // Importing the SearchResults component
import { useState } from "react";
import { FaSearch } from "react-icons/fa"; // Ensure this import is included


const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [submittedQuery, setSubmittedQuery] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedQuery(search);
  };

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md">
      <form
        onSubmit={handleSubmit}
        className="flex items-center space-x-4 bg-white rounded-full shadow-sm p-2"
      >
        <input
          type="text"
          placeholder="Search..."
          onChange={handleSearch}
          value={search}
          className="flex-grow px-4 py-2 text-gray-700 bg-transparent focus:outline-none"
        />
        <button
          type="submit"
          className="p-2 bg-blue-500 rounded-full hover:bg-blue-600 transition duration-300 text-white"
        >
          <FaSearch />
        </button>
      </form>

      <div className="mt-6">
        <SearchResults query={submittedQuery} />
      </div>
    </div>
  );
};


export default SearchBar;
