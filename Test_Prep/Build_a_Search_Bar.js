/* Build a search bar: Develop a search bar component that
filters a list of items based on user input. Implement features like
autocomplete, case-insensitive search, and search highlighting. */

import React, { useState } from "react";
import "./SearchBar.css"; 

const itemsList = [
  "Apple",
  "Banana",
  "Orange",
  "Grapes",
  "Pineapple",
  "Mango",
  "Watermelon",
];

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredItems, setFilteredItems] = useState(itemsList);

  // Handle input change for search
  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    // Case-insensitive filter
    const filtered = itemsList.filter((item) =>
      item.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredItems(filtered);
  };

  // Function to highlight matching text
  const highlightText = (item) => {
    const index = item.toLowerCase().indexOf(searchTerm.toLowerCase());
    if (index === -1) return item; // No match, return full item

    // Split item into before, match, and after parts
    const beforeMatch = item.slice(0, index);
    const match = item.slice(index, index + searchTerm.length);
    const afterMatch = item.slice(index + searchTerm.length);

    // Wrap match in a <span> to highlight
    return (
      <>
        {beforeMatch}
        <span className="highlight">{match}</span>
        {afterMatch}
      </>
    );
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search items..."
        value={searchTerm}
        onChange={handleSearch}
        className="search-input"
      />
      {searchTerm && (
        <ul className="autocomplete-list">
          {filteredItems.length > 0 ? (
            filteredItems.map((item, index) => (
              <li key={index} className="autocomplete-item">
                {highlightText(item)}
              </li>
            ))
          ) : (
            <li className="no-results">No results found</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
