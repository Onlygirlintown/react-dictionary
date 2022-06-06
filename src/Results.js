import React from "react";
import Meaning from "./Meaning";

export default function Results(props) {
  console.log(props);
  if (props.results) {
    return (
      <div>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div className="row" key={index}>
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
