import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  let foundFirstAudio = false;
  const audioLinks = props.phonetics.map((phonetic, index) => {
    console.log(phonetic);
    if (phonetic.audio && foundFirstAudio == false) {
      foundFirstAudio = true;
      return (
        <div className="phoneticsDiv" key={index}>
          <a href={phonetic.audio} target="_blank" rel="noreferrer">
            listen 🗣️
          </a>
          <br />
          {phonetic.text}
        </div>
      );
    } else {
      // either there was no audio OR I already found the first one
      return null;
    }
  });
  return <div>{audioLinks.length > 0 ? audioLinks : null}</div>;
}
