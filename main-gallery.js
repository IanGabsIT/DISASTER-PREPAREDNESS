document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.getElementById("disaster-carousel");

  const disasters = [
    { name: "Fire", img: "img/fire.jpg", back: "A structure fire is a fire involving the structural components of various types of residential, commercial or industrial buildings, such as barn fires.", link: "fire.html" },
    { name: "Earthquake", img: "img/earthquake.jpg", back: "An earthquake, also called a quake, tremor, or temblor, is the shaking of the Earth's surface resulting from a sudden release of energy in the lithosphere that creates seismic waves.", link: "earthquake.html" },
    { name: "Flood", img: "img/flood.jpg", back: "A flood is an overflow of water (or rarely other fluids) that submerges land that is usually dry.", link: "flood.html" },
    { name: "Typhoon", img: "img/typhoon.jpg", back: "A typhoon is a tropical cyclone that develops between 180° and 100°E in the Northern Hemisphere and which produces sustained hurricane-force winds of at least 119 km/h (74 mph)", link: "typhoon.html" },
    { name: "Landslide", img: "img/landslide.jpg", back: "Landslides are several forms of mass wasting that may include a wide range of ground movements, such as rockfalls, mudflows, shallow or deep-seated slope failures and debris flows.", link: "landslide.html" },
    { name: "Volcanic Eruption", img: "img/volcanic-eruption.jpg", back: "A volcanic eruption occurs when material is expelled from a volcanic vent or fissure. Several types of volcanic eruptions have been distinguished by volcanologists. ", link: "volcanic-eruption.html" },
    { name: "Tsunami", img: "img/tsunami.jpg", back: "A tsunami is a series of waves in a water body caused by the displacement of a large volume of water, generally in an ocean or a large lake.", link: "tsunami.html" }
  ];

  disasters.forEach(disaster => {
    const card = document.createElement("div");
    card.className = "flip-card";

    card.innerHTML = `
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <img src="${disaster.img}" alt="${disaster.name}">
          <p>${disaster.name}</p>
        </div>

        <div class="flip-card-back">
          <p>${disaster.back}</p>
        </div>
      </div>
    `;

    card.addEventListener("click", () => {
      card.classList.toggle("flipped");
    });

    carousel.appendChild(card);
  });
});
