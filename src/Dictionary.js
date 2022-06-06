import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import Word from "./Word";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState("");
  let [photos, setPhotos] = useState("");

  function handleDictionaryResponse(response) {
    console.log(response);
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search(event) {
    event.preventDefault();
    alert(`searching for ${keyword}`);

    let word = `${keyword}`;
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

    axios.get(apiUrl).then(handleDictionaryResponse);

    let pexelApiKey =
      "563492ad6f917000010000018d00173e8d184b77be4a38cdfd58647f";
    let pexelApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    axios
      .get(pexelApiUrl, { headers: { Authorization: `Bearer ${pexelApiKey}` } })
      .then(handlePexelsResponse);
  }

  function keyWordChange(event) {
    event.preventDefault();
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary row">
      <form onSubmit={search}>
        <input type="search" autoFocus={true} onChange={keyWordChange} />
        <input type="submit" />
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
}
