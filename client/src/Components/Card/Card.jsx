import React from "react";

function Card({ game }) {
  const { id, name, image, rating } = game;
  //tba
  function navigateHandler() {
    navigateHandler(`/detail/${id}`);
  }
}

//!TBC
