import React from "react";
import Phonetics from "./Phonetics";
import "./Words.css";

export default function Word(props) {
  if (!props.results) {
    return <div></div>;
  } else {
    return (
      <div>
        <h2 className="text-capitalize word">{props.results.word}</h2>
        <Phonetics phonetics={props.results.phonetics} />
      </div>
    );
  }
}
