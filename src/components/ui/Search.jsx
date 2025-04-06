import React from "react";
import { Search as SearchIcon } from "lucide-react";

function Search({ value, onChange }) {
  return (
    <div className="search-container">
      <input 
        type="text" 
        placeholder="Search" 
        value={value} 
        onChange={onChange}
      />
      <div className="search-icon-wrapper">
        <SearchIcon className="search-icon" size={20} />
      </div>
    </div>
  );
}

export default Search;
