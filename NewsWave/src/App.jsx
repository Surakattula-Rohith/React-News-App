import "./App.css";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import PageNotFound from "./Components/PageNotFound";
import PersonalInfo from "./Components/PersonalInfo";
import Publishers from "./Components/Publishers";
import TrendingNews from './Components/TrendingNews';
import SearchBar from './Components/SearchBar';
import RandomNews from './Components/RandomNews';
import { Routes, Route, Link } from "react-router-dom";


function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="search" element={<SearchBar />} />
          <Route path="trending" element={<TrendingNews />} />
          <Route path="random" element={<RandomNews />} />
        </Route>
        <Route path="/publishers" element={<Publishers />} />
        <Route path="/personalinfo" element={<PersonalInfo />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
