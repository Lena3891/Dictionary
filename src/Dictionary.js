import React, {useState} from "react";
import "./Dictionary.css";
import axios from "axios";

export default function Dictionary() {
    let [keyword, setKeyword]= useState("");

    function handleResponse(response) {
      console.log(response.data); 
    }

    function search(event) {
        event.preventDefault();
     

       let apiKey = "8f89013d30bfc04f0f041a1bdo2t3fe7";
       let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word={word}&key={key}`;
       axios.get(apiUrl).then(handleResponse);
    }
   

    function handleKeywordChange(event) {
      setKeyword(event.target.value);
    }

    return (
    <div className="Dictionary">
    <form onSubmit={search}>
       <input type="search" onChange={handleKeywordChange}/>
    </form>
    </div>
   );
}