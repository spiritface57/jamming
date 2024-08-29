import React, { useEffect, useState } from "react";
import "./SearchResults.css";
import Tracklist from "../Tracklist/Tracklist";
import { tracks } from "../../data/tracks";

function SearchResults() {
  const [searchResults, setSearchResults] = useState(null);
  useEffect(() => {
    setSearchResults(tracks);
  }, []);

  //   console.log('tracks',tracks,searchResults);
  return (
    <div className="SearchResults">
      <h2>Results</h2>
      <Tracklist tracks={searchResults} />
    </div>
  );
}

export default SearchResults;
