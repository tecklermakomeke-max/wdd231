import { discoverItems } from "../data/discover.mjs";

const container = document.getElementById("discover-cards");
const visitMessage = document.getElementById("visit-message");

// 9. Build 8 cards from JSON array
discoverItems.forEach((item, index) => {
  const card = document.createElement("section");
  card.classList.add("discover-card");
  card.style.gridArea = `card${index + 1}`;
  
  card.innerHTML = `
    <h2>${item.title}</h2>
    <figure>
      <img src="${item.image}" alt="${item.alt}" loading="lazy" width="300" height="200">
    </figure>
    <address>${item.address}</address>
    <p>${item.description}</p>
    <button>Learn More</button>
  `;
  
  container.appendChild(card);
});

// 11. localStorage - last visit message
const lastVisit = localStorage.getItem("lastVisit");
const now = Date.now();

if (!lastVisit) {
  visitMessage.textContent = "Welcome! Let us know if you have any questions.";
} else {
  const diff = now - Number(lastVisit);
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  
  if (diff < 24 * 60 * 60 * 1000) {
    visitMessage.textContent = "Back so soon! Awesome!";
  } else {
    visitMessage.textContent = `You last visited ${days} ${days === 1 ? "day" : "days"} ago.`;
  }
}

localStorage.setItem("lastVisit", now.toString());

// Footer dates (if navigation.js doesn't do it)
const yearSpan = document.getElementById("currentYear");
if (yearSpan) yearSpan.textContent = new Date().getFullYear();

const lastMod = document.getElementById("lastModified");
if (lastMod) lastMod.textContent = `Last Modified: ${document.lastModified}`;