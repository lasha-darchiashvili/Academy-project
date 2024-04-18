"use client";
import React from "react";
import Products from "../_components/Products";
import SearchBar from "../_components/searchBar";
import { useState, useEffect } from "react";
import useDebounce from "../_hooks/useDebounce";
import LandingContent from "../_components/landingContent";

export default function Landing() {
  const [gamesDateForVisual, setGamesDateForVisual] = useState([]);
  const [isSorted, setIsSorted] = useState(true);
  const [searchItem, setSearchItem] = useState("");

  const debouncedSearch = useDebounce(searchItem, 500);

  //--------------------

  useEffect(() => {
    const fetchData = () => {
      fetch("https://dummyjson.com/products")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setGamesDateForVisual(data.products);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchData();
  }, []);

  //----------------------------------------------------------------

  // clone aray and filter it with searchItem, which will be set on every key stroke
  let sortedAndFilteredData = gamesDateForVisual
    .slice()
    .filter((item) =>
      item.title.toLowerCase().includes(debouncedSearch.toLowerCase())
    );

  // set serached item's name to searchItem state
  const onChange = (e) => {
    setSearchItem(e.target.value);
  };

  // if isSorted is true sort ascending if not sort descending
  const handleClick = (e) => {
    e.preventDefault();
    if (!isSorted) {
      sortedAndFilteredData = gamesDateForVisual.sort((a, b) =>
        a.id > b.id ? 1 : -1
      );
      setIsSorted(true);
    } else {
      sortedAndFilteredData = gamesDateForVisual.sort((a, b) =>
        a.id > b.id ? -1 : 1
      );
      setIsSorted(false);
    }
  };
  console.log("asdasdasd");

  return (
    <div className="grow overflow-hidden">
      {/* <LandingContent />
      <Upcoming /> */}
      <SearchBar onChange={onChange} handleClick={handleClick} />
      <Products gameData={sortedAndFilteredData} />
    </div>
  );
}
