import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";

export default function Results(props) {
  console.log(props);
  if (props.results) {
    return (
      <div>
        <h2 className="text=capitalize">{props.results.word}</h2>
        <Phonetics phonetics={props.results.phonetics} />
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}{" "}
      </div>
    );
  } else {
    return null;
  }
}
