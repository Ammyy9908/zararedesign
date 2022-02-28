import React from "react";
import Header from "../components/Header";
import Menu from "../components/Menu";
import SearchBar from "../components/SearchBar";
import "./Home.css";
function Home() {
  const [activeProduct, setActiveProduct] = React.useState(1);
  const [menu, setMenu] = React.useState(0);
  const [search, setSearch] = React.useState(0);

  const handleScroll = (e) => {
    const scroll = e.target.scrollLeft;
    if (scroll < 400) {
      setActiveProduct(1);
    }
    if (scroll >= 200 && scroll < 450) {
      setActiveProduct(2);
    }
    if (scroll >= 450 && scroll < 1200) {
      setActiveProduct(3);
    }
  };
  return (
    <div className="home">
      <div className="hero">
        <Header
          menu={menu}
          setMenu={setMenu}
          search={search}
          setSearch={setSearch}
          type="transparent"
          page="home"
        />
        <Menu menu={menu} />
        <SearchBar search={search} page="home" />
        <div className="hero-body">
          <div
            className="product-body"
            style={{ backgroundImage: `url(/hero_model${activeProduct}.png)` }}
          >
            <div className="product-slider" onScroll={handleScroll}>
              <div className="product-thumb">
                <img src="/product1.png" alt="" />
              </div>
              <div className="product-thumb">
                <img src="/product2.png" alt="" />
              </div>
              <div className="product-thumb">
                <img src="/product3.png" alt="" />
              </div>
            </div>
          </div>
          <div className="hero-model-background">
            <img src={`/hero_model${activeProduct}.png`} alt="" />
          </div>
        </div>
        <div className="hero-logo">
          <img src="/zara_logo.svg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Home;
