export async function loadBags(){
  try{
    const response = await fetch('data/bags.json');
    const data = await response.json();
    return data;
  } catch(error){
    console.error("Error loading data", error);
    return [];
  }
}

export function displayBags(bags){
  const container = document.querySelector('#bag-list');
  bags.forEach(bag => {
    const card = `
      <div class="card">
        <img src="${bag.image}" alt="${bag.name}" loading="lazy" width="300" height="200">
        <h3>${bag.name}</h3>
        <p>Color: ${bag.color}</p>
        <p>Material: ${bag.material}</p>
        <p>Price: R${bag.price}</p>
        <button data-id="${bag.id}" class="view-btn">View Details</button>
        <button data-id="${bag.id}" class="wish-btn">Add to Wishlist</button>
      </div>
    `;
    container.innerHTML += card;
  });
  const cheapBags = bags.filter(b => b.price < 300);
  console.log(cheapBags);
}