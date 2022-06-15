import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import Word from "./Word";
import "./Dictionary.css";

export default function Dictionary(props) {
  console.log(props);
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);

  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
    console.log(setResults);
  }
  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
    console.log(setPhotos);
  }

  function keyWordChange(event) {
    event.preventDefault();
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;

    axios.get(apiUrl).then(handleDictionaryResponse);

    let pexelApiKey =
      "563492ad6f917000010000018d00173e8d184b77be4a38cdfd58647f";
    let pexelApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    axios
      .get(pexelApiUrl, { headers: { Authorization: `Bearer ${pexelApiKey}` } })
      .then(handlePexelsResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  if (loaded) {
    return (
      <div className="Dictionary row">
        <form className="searchForm" onSubmit={handleSubmit}>
          <input
            className="searchInput text-capitalize"
            type="search"
            autoFocus={true}
            onChange={keyWordChange}
            placeholder={keyword}
          />
          <input className="submitButton " type="submit" value="🔎" />
        </form>
        <div className="col">
          <Word results={results} />
        </div>
        <div className="col">
          <Photos photos={photos} />
        </div>

        <Results results={results} />
      </div>
    );
  } else {
    load();
    return "loading";
  }
}
