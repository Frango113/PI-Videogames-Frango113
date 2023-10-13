import React from "react";
import stlye from "./Card.module.css";
import { NavLink } from "react-router-dom";

const Card = (props) => {
  return (
    <div className={style.cardContainer}>
      <img
        className={style.image}
        src={props.image}
        alt={`image of ${props.name}`}
      />
      <h3 className={style.name}>props.name</h3>
      <h6 className={stlye.genres}>{props.genres}</h6>
      <NavLink to={`/detail/${props.id}`}>
        <button className={style.btn}>About</button>
      </NavLink>
    </div>
  );
};
export default Card;
