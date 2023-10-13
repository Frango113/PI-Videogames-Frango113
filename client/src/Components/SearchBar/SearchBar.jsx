import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import getVgbyName from "../../Redux/Actions/";
import style from "./SearchBar.module.css";

const SearchBar = () => {
  const imageSearch =
    "https://cdn-icons-png.flaticon.com/128/10470/10470773.png";

  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const auxFunction = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };
  const handleSubmit = () => {
    dispatch(searchName(search));
    setSearch("");
  };

  return (
    <div className={style.inputCont}>
      <div className={style.inputCont2}>
        <input
          className={style.inputSearch}
          type="text"
          name="search"
          placeholder="search by name..."
          onChange={handleChange}
          onKeyDown={(e) => auxFunction(e)}
        />
        <button onClick={handleSubmit} className={style.btnSearch}>
          <img src={imageSearch} className={style.image.Lupa} alt="search" />
        </button>
      </div>
    </div>
  );
};
