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
    <div >
      <form  onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search..."
          onChange={handleSearch}
          value={search}
          />
        <button
          type="submit" // Use button as a submit button
           >
          <FaSearch />
        </button>
      </form>

      <SearchResults query={submittedQuery} />
    </div>
  );
};

export default SearchBar;
