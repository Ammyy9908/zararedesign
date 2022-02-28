import React from "react";
import { Link } from "react-router-dom";
// import Footer from "../components/Footer";
import Header from "../components/Header";
import Menu from "../components/Menu";
import SearchBar from "../components/SearchBar";
import "./Stories.css";

function Stories() {
  const [menu, setMenu] = React.useState(0);
  const [search, setSearch] = React.useState(0);
  return (
    <div className={`stories ${menu && "hidden"} ${search && "hidden"}`}>
      <div className="stories-upper">
        <Header
          menu={menu}
          setMenu={setMenu}
          search={search}
          setSearch={setSearch}
          type="transparent"
          page="stories"
        />
        <Menu menu={menu} />
        <SearchBar search={search} page="stories" />
        <div className="stories-body">
          <div className="stories-header">
            <div className="breadcump">
              <span>
                <Link to="/">Main Page</Link>/
              </span>
            </div>
            <h3>Stories</h3>
          </div>
          <div className="stories-wrapper">
            <div className="selected-stories">
              <div className="selected-item">
                <img src="/selected1.png" alt="" />
                <div className="selected-story-meta">
                  <span>BELLA</span>
                  <span>ROMA</span>
                </div>
              </div>
              <div className="selected-item">
                <img src="/selected2.png" alt="" />
                <div className="selected-story-meta">
                  <span>LUKA OVER</span>
                  <span>THE WHITE LIGHT</span>
                </div>
              </div>
              <div className="selected-item">
                <img src="/selected3.png" alt="" />
                <div className="selected-story-meta">
                  <span>DENIM</span>
                  <span>ON</span>
                  <span>DENIM</span>
                </div>
              </div>
            </div>
            <div className="stories-main">
              <Link to="/story/id">
                <div className="story-item item-first">
                  <div className="story-item-image">
                    <img src="/story1.png" alt="" />
                  </div>
                  <div className="story-item-first-meta">
                    <h2>HIGH VOLTAGE</h2>
                    <p>Spring-summer. Woman 2019.</p>
                  </div>
                </div>
              </Link>
              <div className="story-item item-second">
                <div className="story-item-image">
                  <img src="/story2.png" alt="" />
                </div>
                <div className="story-item-second-meta">
                  <h2>Tailering</h2>
                  <p>Spring-summer. Man. All time.</p>
                </div>
              </div>
              <div className="story-item item-third">
                <div className="story-item-image">
                  <img src="/story3.png" alt="" />
                </div>
                <div className="story-item-third-meta">
                  <h2>THE TOURIST</h2>
                  <p>Spring-summer. Woman 2019.</p>
                </div>
              </div>

              <Link to="/story/4">
                <div className="story-item item-fourth">
                  <div className="story-item-image">
                    <img src="/story4.png" alt="" />
                  </div>
                  <div className="story-item-fourth-meta">
                    <h2>BEYOND NATURE</h2>
                    <p>Spring-summer. TRF 2019.</p>
                  </div>
                </div>
              </Link>

              <div className="story-item item-fifth">
                <div className="story-item-image">
                  <img src="/story5.png" alt="" />
                </div>
                <div className="story-item-fifth-meta">
                  <h2>Traveler</h2>
                  <p>Spring-summer. Man 2019.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stories;
