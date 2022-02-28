import React from "react";
import Header from "../components/Header";
import Menu from "../components/Menu";
import "./Item.css";
import SearchBar from "../components/SearchBar";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function MatchItem({ name, image, price }) {
  return (
    <div className="match-item">
      <img src={image} alt={name} />
      <div className="match-item-info">
        <div className="match-item-info-name">{name}</div>
        <div className="match-item-prices">
          <span className="match-item-info-price">{price}</span>
        </div>
      </div>
    </div>
  );
}

function SimilarItem({ name, image, price }) {
  return (
    <div className="match-item similar-item">
      <img src={image} alt={name} />
      <div className="match-item-info">
        <div className="match-item-info-name">{name}</div>
        <div className="match-item-prices">
          <span className="match-item-info-price">{price}</span>
        </div>
      </div>
    </div>
  );
}

function Item() {
  const [menu, setMenu] = React.useState(0);
  const [search, setSearch] = React.useState(0);
  const [preview, setPreview] = React.useState("/preview.png");
  return (
    <div className={`item ${menu && "hidden"} ${search && "hidden"}`}>
      <Header
        menu={menu}
        setMenu={setMenu}
        search={search}
        setSearch={setSearch}
        type="transparent"
        page="item"
      />
      <Menu menu={menu} />
      <SearchBar search={search} page="item" />
      <div className="item-body">
        <div className="item-body-left">
          <div className="item-preview">
            <img src={preview} alt="" />
            <div className="preview-thumbs">
              <img
                src="/thumb1.png"
                alt=""
                onClick={() => setPreview("/thumb1.png")}
                onBlur={() => setPreview("/preview.png")}
                tabIndex="1"
              />
              <img
                src="/thumb2.png"
                alt=""
                onClick={() => setPreview("/thumb2.png")}
                onBlur={() => setPreview("/preview.png")}
                tabIndex="1"
              />
              <img
                src="/thumb3.png"
                alt=""
                onClick={() => setPreview("/thumb3.png")}
                onBlur={() => setPreview("/preview.png")}
                tabIndex="1"
              />
              <img
                src="/thumb4.png"
                alt=""
                onClick={() => setPreview("/thumb4.png")}
                onBlur={() => setPreview("/preview.png")}
                tabIndex="1"
              />
            </div>
          </div>
        </div>
        <div className="item-meta-controls">
          <div className="item-breadcump">
            <span>
              <Link to="/">Main Page</Link>/
              <Link to="/catalog/woman">Catalog</Link>/
              <Link to="/">Coat &amp; Jackets </Link>
            </span>
          </div>
          <h2 className="item-name">WAISTCOAT WITH CONTRAST PIPING</h2>
          <h4 className="item-price">$24</h4>
          <div className="product-description-summary">
            <div className="product-description">
              <div className="description-heading">Description</div>
              <p>
                Round neck waistcoat featuring front welt pockets, contrast
                trims, a pleat in the back and metal appliqué fastening in the
                front.
              </p>
            </div>
            <div className="product-summary">
              <div className="summary-heading">Summary</div>
              <p>
                Color: Navy Blue Height of model: 177 cm. / 5′ 9″
                <span className="item-id">2388/749</span>
              </p>
            </div>
          </div>
          <div className="item-cart-control">
            <label className="custom-size-selector" htmlFor="size">
              <select name="size" id="size">
                <option value="" disabled selected>
                  Choose Size
                </option>
                <option value="xs">XS</option>
                <option value="s">S</option>
                <option value="m">M</option>
                <option value="l">L</option>
                <option value="xl">XL</option>
                <option value="xxl">XXL</option>
              </select>
            </label>
            <button className="add_to_cart_btn">
              <span>Add to cart</span>
              <div className="btn-icon">
                <img src="/add.svg" alt="" />
              </div>
            </button>
          </div>

          <div className="item-seperator"></div>
          <div className="item-matches">
            <div className="matches-header">
              <h4>Match With</h4>
            </div>
            <div className="matches">
              <MatchItem
                name="WAISTCOAT WITH CONTRAST PIPING"
                image="/match1.png"
                price="$24"
              />
              <MatchItem
                name="WAISTCOAT WITH CONTRAST PIPING"
                image="/match2.png"
                price="$24"
              />
              <MatchItem
                name="WAISTCOAT WITH CONTRAST PIPING"
                image="/match3.png"
                price="$24"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="similar-items-body">
        <h3 className="similar-body-heading">Similar Items</h3>
        <div className="similar-items">
          <SimilarItem
            name="KNIT Waistcoat with vents"
            image="/similar1.png"
            price="$34"
          />
          <SimilarItem
            name="Waistcoat with vents"
            image="/similar2.png"
            price="$52"
          />
          <SimilarItem
            name="Waistcoat with pockets"
            image="/similar3.png"
            price="$48"
          />
          <SimilarItem
            name="TEXTURED WAISTCOAT WITH COLLAR"
            image="/similar4.png"
            price="$29"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Item;
