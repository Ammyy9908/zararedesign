import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Menu from "../components/Menu";
import SearchBar from "../components/SearchBar";
import "./Story.css";
function Story() {
  const [menu, setMenu] = React.useState(0);
  const [search, setSearch] = React.useState(0);
  return (
    <div className={`story ${menu && "hidden"} ${search && "hidden"}`}>
      <Header
        menu={menu}
        setMenu={setMenu}
        search={search}
        setSearch={setSearch}
        type="white"
        page="story"
      />
      <Menu menu={menu} />
      <SearchBar search={search} page="story" />
      <div className="story-body">
        <div className="story-hero">
          <img src="/story.png" alt="" className="story-hero-image" />
          <div className="story-hero-content">
            <div className="breadcump">
              <span>
                <Link to="/">Main Page</Link>/<Link to="/stories">Stories</Link>
              </span>
            </div>
            <h3>BEYOUND NATURE</h3>
          </div>
        </div>

        <div className="stories-mobile">
          <div className="story-one">
            <img src="/big-story.png" alt="" />
          </div>
          <div className="story-two">
            <img src="/story4.png" alt="" />
          </div>
          <div className="grouped-stories-mobile">
            <img src="/group1.png" alt="grouped-story" />
            <img src="/group2.png" alt="grouped-story" />
          </div>
          <div className="story-large1-mobile">
            <img src="/large1.png" alt="large-story" />
          </div>
          <div className="story-large2-mobile">
            <img src="/large2.png" alt="large-story" />
          </div>
        </div>
        <div className="story-image-big">
          <img src="/big-story.png" alt="" />
        </div>
        <div className="story-image-small">
          <img src="/story4.png" alt="" />
        </div>
        <div className="grouped-stories">
          <img src="/group1.png" alt="grouped-story" />
          <img src="/group2.png" alt="grouped-story" />
        </div>
        <div className="story-large1">
          <img src="/large1.png" alt="large-story" />
        </div>
        <div className="story-large2">
          <img src="/large2.png" alt="large-story" />
        </div>
      </div>
    </div>
  );
}

export default Story;
