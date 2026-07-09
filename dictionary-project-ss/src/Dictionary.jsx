import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyWord] = useState("");

  function search(event) {
    event.preventDefault();
    let apiKey = "f0a4tbb1fc986b4d534ccb04b8291ao0";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleResponse(response) {
    console.log(response.data.meanings[0]);
  }

  function updateNewWord(event) {
    setKeyWord(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" className="search-box" onChange={updateNewWord} />
        <button>Search</button>
      </form>
    </div>
  );
}
