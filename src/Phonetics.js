import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  console.log(props.phonetics);
  return (
    <div className="phoneticsDiv">
      <a href={props.phonetics[0].audio} target="_blank" rel="noreferrer">
        listen 🗣️
      </a>
      <br />
      {props.phonetics[0].text}
    </div>
  );
}
