import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import "./Catalog.css";

function CatalogItem({ id, image, price, name, actual }) {
  return (
    <Link to={`/item/${id}`}>
      <div className="catalog-item">
        <img src={image} alt={name} />
        <div className="catalog-item-info">
          <div className="catalog-item-info-name">{name}</div>
          <div className="catalog-item-prices">
            {actual && <span className="catalog-item-price">${actual}</span>}
            <span className="catalog-item-info-price">${price}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function Catalog({ type }) {
  const [menu, setMenu] = React.useState(0);
  const [search, setSearch] = React.useState(0);

  React.useEffect(() => {
    setMenu(0);
  }, [type]);

  const data = [
    {
      id: 1,
      name: "WAISTCOAT WITH CONTRAST PIPING",
      price: "24",
    },
    {
      id: 2,
      name: "ANIMAL PRINT OVERSIZED JACKET",
      price: "24",
    },
    {
      id: 3,
      name: "FAUX SUEDE ANIMAL PRINT JACKET",
      actual: "52",
      price: "26",
    },
    {
      id: 4,
      name: "KNITTED SWEATER WITH KNOT",
      price: "14",
    },
    {
      id: 5,
      name: "JEANS ZW PREMIUM NEW CHINO",
      price: "20",
    },
    {
      id: 6,
      name: "OVERSHIRT WITH POCKETS",
      price: "32",
    },
    {
      id: 7,
      name: "FROCK COAT WITH ZIPS",
      price: "42",
    },
    {
      id: 8,
      name: "TEXTURED SWEATER WITH THREAD",

      price: "16",
    },
    {
      id: 9,
      name: "LACE-TRIMMED SATIN JUMPSUIT",
      actual: "52",
      price: "26",
    },
  ];
  return (
    <div className={`catalog ${menu && "hidden"} ${search && "hidden"}`}>
      <Header
        menu={menu}
        setMenu={setMenu}
        search={search}
        setSearch={setSearch}
        type="transparent"
        page="catalog"
      />
      <Menu menu={menu} />
      <SearchBar search={search} page="catalog" />

      <div className="catalog-body">
        <div className="catalog-products">
          {data.map((item, i) => {
            return (
              <CatalogItem
                key={i}
                image={`/women${item.id}.png`}
                price={item.price}
                name={item.name}
                actual={item.actual}
                id={item.id}
              />
            );
          })}
        </div>
        <div className="catalog-controls">
          <ul className="categories">
            <li className={type === "woman" && "active-category"}>
              <Link to="/catalog/woman">Woman</Link>
            </li>
            <li className={type === "men" && "active-category"}>
              <Link to="/catalog/men">Man</Link>
            </li>
            <li className={type === "kids" && "active-category"}>
              <Link to="/catalog/kids">Kids</Link>
            </li>
            <li className={type === "sales" && "active-category"}>
              <Link to="/catalog/sales">Sales</Link>
            </li>
          </ul>
          <div className="list-seperator"></div>
          <ul className="filters">
            <li>Size</li>
            <li>Colour</li>
            <li>Additional</li>
            <li>Price</li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}
