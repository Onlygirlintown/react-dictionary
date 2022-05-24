import React, { useState } from "react";
import axios from "axios";
import Definition from "./Definition";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [definition, setDefinition] = useState("");

  function handleResponse(response) {
    setDefinition(response.data[0].meanings[0].definitions[0].definition);
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
      <h2 className="text-capitalize">{keyword}</h2>
      <Definition definition={definition} />
    </div>
  );
}
