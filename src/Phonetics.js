import React from "react";

export default function Phonetics(props) {
  console.log(props.phonetics);
  return (
    <div>
      <a href={props.phonetics[0].audio}>listen</a>
      <br />
      {props.phonetics[0].text}
    </div>
  );
}
