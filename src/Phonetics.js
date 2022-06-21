import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  console.log(props.phonetics);
  const audioLink = props.phonetics[0].audio;
  const audioLinkTwo = props.phonetics[1].audio;

  if (audioLink.length > 0) {
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
  if (audioLinkTwo.length > 0) {
    return (
      <div className="phoneticsDiv">
        <a href={props.phonetics[1].audio} target="_blank" rel="noreferrer">
          listen 🗣️
        </a>
        <br />
        {props.phonetics[0].text}
      </div>
    );
  } else {
    return (
      <div className="phoneticsDiv">
        <a href={props.phonetics[2].audio} target="_blank" rel="noreferrer">
          listen 🗣️
        </a>
        <br />
        {props.phonetics[0].text}
      </div>
    );
  }
}
