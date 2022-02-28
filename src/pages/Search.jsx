import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import Menu from "../components/Menu";
import SearchBar from "../components/SearchBar";
import "./Search.css";

function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

function Item({ name, image, price }) {
  return (
    <div className="search-item">
      <img src={image} alt={name} />
      <div className="item-info">
        <div className="item-info-name">{name}</div>
        <div className="item-info-price">{price}</div>
      </div>
    </div>
  );
}

function Search({ root }) {
  let query = useQuery();
  const [menu, setMenu] = React.useState(0);
  const [search, setSearch] = React.useState(0);

  return (
    <div className={`search ${menu && "hidden"} ${search && "hidden"}`}>
      <Header
        menu={menu}
        setMenu={setMenu}
        search={search}
        setSearch={setSearch}
        type="transparent"
        page="search"
        root={root}
      />
      <Menu menu={menu} />
      <SearchBar search={search} page="search" />
      <div className="search-body">
        <div className="search-header">{query.get("q")}</div>
        <div className="search-seperator"></div>
        <div className="searched-items">
          <Item name="Item 1" image="/men1.png" price="$10.00" />
          <Item name="Item 2" image="/men2.png" price="$10.00" />
          <Item name="Item 3" image="/men3.png" price="$10.00" />
          <Item name="Item 4" image="/men4.png" price="$10.00" />
          <Item name="Item 4" image="/men5.png" price="$10.00" />
          <Item name="Item 4" image="/men6.png" price="$10.00" />
          <Item name="Item 4" image="/men7.png" price="$10.00" />
          <Item name="Item 4" image="/men8.png" price="$10.00" />
        </div>
      </div>
    </div>
  );
}

export default Search;
