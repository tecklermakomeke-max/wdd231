async function showBestMembers() {
  const res = await fetch('data/members.json');
  const allMembers = await res.json();

  // keep only gold and silver
  const goodMembers = allMembers.filter(m => m.membership === "Gold" || m.membership === "Silver" || m.membership === 2 || m.membership === 3);

  // mix them randomly
  goodMembers.sort(() => 0.5 - Math.random());

  // take only 2 or 3
  const topMembers = goodMembers.slice(0,3);

  const box = document.querySelector('#best-members');
  topMembers.forEach(m => {
    box.innerHTML += `
      <div class="member-card">
        <h3>${m.name}</h3>
        <img src="images/${m.image}" alt="${m.name}">
        <p>${m.address}</p>
        <p>${m.phone}</p>
        <a href="${m.website}">Visit</a>
      </div>`;
  });
}