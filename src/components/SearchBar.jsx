import React from "react";
import "./SearchBar.css";
function SearchBar({ search, page }) {
  const [query, setQuery] = React.useState("");
  return (
    <div className={`searchbar ${search && "search-enable"}`}>
      <div className="search-wrapper">
        <form action={`/search/${page}/`}>
          <input
            type="text"
            placeholder="What are you looking for?"
            name="q"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoComplete="off"
          />
        </form>
      </div>
    </div>
  );
}

export default SearchBar;
