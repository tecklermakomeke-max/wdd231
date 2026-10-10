export async function loadBags(){
  try{
    const url = new URL('../data/bags.json', import.meta.url);
    console.log("Trying to load:", url.href);
    const response = await fetch(url);
    console.log("Response status:", response.status);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    console.log("Loaded", data.length, "bags");
    return data;
  } catch(error){
    console.error("FAILED TO LOAD BAGS:", error);
    alert("Failed to load bags.json - check F12 Console");
    return [];
  }
}

export function displayBags(bags){
  const container = document.querySelector('#bag-list');
  if (!container) return;
  container.innerHTML = "";
  if (bags.length === 0) {
    container.innerHTML = "<p style='color:red'>No bags found. Open F12 Console to see error. Make sure final/data/bags.json exists.</p>";
    return;
  }
  bags.forEach(bag => {
    container.innerHTML += `
      <div class="card">
        <img src="${bag.image}" alt="${bag.name}" loading="lazy" width="300" height="300">
        <h3>${bag.name}</h3>
        <p>R${bag.price} - ${bag.color}</p>
        <p>${bag.material}</p>
        <button data-id="${bag.id}" class="view-btn">View Details</button>
        <button data-id="${bag.id}" class="wish-btn">Add to Wishlist</button>
      </div>`;
  });
}