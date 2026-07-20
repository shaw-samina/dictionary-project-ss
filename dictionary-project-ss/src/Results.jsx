import React from "react";
import Synonyms from "./Synonyms";
import Photos from "./Photos";

export default function Results(props) {
  console.log(props.results.meanings);
  if (!props.results || !props.results.meanings) {
    return null;
  }

  return (
    <div className="Results">
      <section>
        <h2>{props.results.word}</h2>
        <h5>phonetic: {props.results.phonetic}</h5>
      </section>
      <section>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <section>
                <h4 className="fs-5">{meaning.partOfSpeech}</h4>
                <h4>
                  <strong>Definition: </strong>
                  {meaning.definition}
                </h4>
                {meaning.example && (
                  <h4 className="fs-6 fw-light">
                    <em> "{meaning.example}"</em>
                  </h4>
                )}

                <Synonyms synonyms={meaning.synonyms} />
              </section>
            </div>
          );
        })}
      </section>
    </div>
  );
}
