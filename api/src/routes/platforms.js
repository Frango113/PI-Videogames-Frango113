const express = require("express");
const axios = require("axios");
const router = express.Router();

//?shuffles thru all the platforms

router.get("/", async (req, res) => {
  try {
    const apiresult = await axios.get; //!insert the api  when i have it MUST DO //!
    const apivgplat = apiresult.data.results.map((p) => p.name);
  } catch (error) {
    console.error("Error al obtener las plataformas de videojuegos");
  }
});
