import React, { useState } from "react";
import Results from "./Results";
import axios from "axios";
import Photos from "./Photos";

import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyWord] = useState("");
  let [results, setResults] = useState({});
  let [photos, setPhotos] = useState(null);

  function search(event) {
    event.preventDefault();
    let apiKey = "f0a4tbb1fc986b4d534ccb04b8291ao0";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    let imageApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${apiKey}`;
    axios.get(imageApiUrl).then(handleImageResponse);
  }

  function handleResponse(response) {
    setResults(response.data);
  }

  function handleImageResponse(response) {
    setPhotos(response.data.photos);
  }

  function updateNewWord(event) {
    setKeyWord(event.target.value);
  }

  return (
    <div className="Dictionary">
      <section>
        <h2>Word Search</h2>
        <form onSubmit={search}>
          <input
            type="search"
            className="search-box"
            onChange={updateNewWord}
          />
          <button>Search</button>
        </form>
      </section>
      <Results results={results} />
      <Photos photos={photos} />
    </div>
  );
}
