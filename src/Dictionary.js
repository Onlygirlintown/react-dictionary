import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState("");

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    alert(`searching for ${keyword}`);

    let word = `${keyword}`;
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

    axios.get(apiUrl).then(handleResponse);
  }

  function keyWordChange(event) {
    event.preventDefault();
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" autoFocus={true} onChange={keyWordChange} />
        <input type="submit" />
      </form>
      <h2 className="text=capitalize">{keyword}</h2>
      <Results results={results} />
    </div>
  );
}
