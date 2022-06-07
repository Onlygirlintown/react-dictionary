import React from "react";
import Synonyms from "./Synonyms";
import "./meaning.css";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="meaningDiv">
      <h3>{props.meaning.partOfSpeech}:</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p className="definition">
              {definition.definition}
              <br />
              <em className="example">{definition.example}</em>
              <br />
              <Synonyms synonyms={props.meaning.synonyms} />
              <Synonyms synonyms={definition.synonyms} />
            </p>
          </div>
        );
      })}
    </div>
  );
}
