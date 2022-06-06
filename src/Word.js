import React from "react";
import Phonetics from "./Phonetics";

export default function Word(props) {
  return (
    <div>
      <h2 className="text=capitalize">{props.results.word}</h2>
      <Phonetics phonetics={props.results.phonetics} />
    </div>
  );
}
