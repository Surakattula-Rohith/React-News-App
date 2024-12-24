import React from "react";
import TrendingNews from "./TrendingNews";
import SearchBar from "./SearchBar";
import RandomNews from "./RandomNews";
import { Routes, Route, Link, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <nav>
        <Link
          to="trending"
          
        >
          Trending
        </Link>

        <Link to="search" >
          Search
        </Link>

        <Link
          to="random"
        >
          Random News
        </Link>
      </nav>
      <div ></div>
      <Outlet />
    </div>
  );
};

export default Home;
