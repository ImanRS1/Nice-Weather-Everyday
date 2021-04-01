import React, { useState } from "react";
import { fetchSearch } from "../actions/locationAction";
import { useDispatch } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState("");

  const submitSearch = (e) => {
    e.preventDefault();
    dispatch(fetchSearch(textInput));
    setTextInput("");
  };

  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };

  return (
    <div>
      <h1>Nice Weather Everyday</h1>
      <form className="search">
        <input
          type="text"
          placeholder="Enter a location..."
          value={textInput}
          onChange={inputHandler}
        />
        <button onClick={submitSearch} type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default Header;
