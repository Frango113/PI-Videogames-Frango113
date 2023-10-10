//import { getVideogames } from "../../redux/Actions/getvgames";
import sortvgames from "../../redux/Actions/sortvgame";
import { Link } from "react-router-dom";
import { getVgames } from "../../redux/Actions/getvgames";
import styles from "./landing.module.css";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function LandingPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVgames());
  }, [dispatch]);
  function handleSortvideogames(e) {
    dispatch(sortvgames("asc"));
  }
  return (
    <div className={styles.lpcontainer}>
      <Link to="../Home/Home.jsx">
        <button className={styles.but} onClick={handleSortvideogames}>
          START App
        </button>
      </Link>
    </div>
  );
}
