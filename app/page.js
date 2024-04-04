"use client";
import React from "react";
import Products from "./_components/products";
import SearchBar from "./_components/searchBar";
import gameData from "./gamesdata";
import { useState } from "react";
import useDebounce from "./_hooks/useDebounce";

export default function Landing() {
  const [gamesDateForVisual, setGamesDateForVisual] = useState([
    ...gameData.slice(),
  ]);
  const [isSorted, setIsSorted] = useState(true);
  const [searchItem, setSearchItem] = useState("");

  const debouncedSearch = useDebounce(searchItem, 500);

  // clone aray and filter it with searchItem, which will be set on every key stroke
  let sortedAndFilteredData = gamesDateForVisual
    .slice()
    .filter((item) =>
      item.name.toLowerCase().includes(debouncedSearch.toLowerCase())
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

  return (
    <div className="grow overflow-hidden">
      {/* <LandingContent />
      <Upcoming /> */}
      <SearchBar onChange={onChange} handleClick={handleClick} />
      <Products gameData={sortedAndFilteredData} />
    </div>
  );
}