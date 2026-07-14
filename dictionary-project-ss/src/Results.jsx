import React from "react";

export default function Results(props) {
  if (!props.results || !props.results.meanings) {
    return null;
  }

  return (
    <div className="Results">
      <h2>{props.results.word}</h2>

      {props.results.meanings.map(function (meaning, index) {
        return (
          <div key={index}>
            <h4>{meaning.definition}</h4>
            <h4>{meaning.example}</h4>
          </div>
        );
      })}
    </div>
  );
}
