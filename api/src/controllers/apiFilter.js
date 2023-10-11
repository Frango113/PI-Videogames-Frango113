const apiFilter = (array) => {
  const clear = array.map((el) => {
    if (!el.name) {
      return;
    }

    const platformsArray = el.platforms;
    const platArray = platformsArray
      ? platformsArray.map((x) => x.platform.name)
      : [];

    const apiGenres = el.genres
      ? el.genres.map((x) => {
          return { name: x.name };
        })
      : [{ name: "no genres" }];

    const imagen =
      "https://atrilco.com/wp-content/uploads/2017/11/ef3-placeholder-image.jpg";

    return {
      id: el.id ? el.id : "undefined ID",
      name: el.name ? el.name : "undefined NAME",
      image: el.background_image ? el.background_image : imagen,
      description: el.description ? el.description : "undefined DESCRIPTION",
      released: el.released ? el.released : "undefined RELEASED",
      rating: el.rating ? el.rating : "undefined RATING",
      platforms: platArray,
      genres: apiGenres,
    };
  });
  return clear;
};

module.exports = { apiFilter };
