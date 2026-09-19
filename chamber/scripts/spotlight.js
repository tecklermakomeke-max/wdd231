// set up current year and last modified date
document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;
async function showGoodMembers() {
  const response = await fetch('data/members.json');
  const allMembers = await response.json();

  const goodOnes = allMembers.filter(m => m.membership == 3 || m.membership == 2 || m.membership == "Gold" || m.membership == "Silver");
  
  goodOnes.sort(() => 0.5 - Math.random());
  const three = goodOnes.slice(0,3);

  const box = document.querySelector('#spotlight-container');
  box.innerHTML = "";

  three.forEach(member => {
    let imgPath = member.image;
    if (!imgPath.startsWith("images/") && !imgPath.startsWith("http")) {
      imgPath = `images/${imgPath}`;
    }

    box.innerHTML += `
      <div class="spotlight-card">
        <h3>${member.name}</h3>
        <img src="${imgPath}" alt="${member.name}" loading="lazy" width="120">
        <p>${member.address}</p>
        <p>${member.phone}</p>
        <a href="${member.website}" target="_blank">${member.website}</a>
        <p>Level: ${member.membership}</p>
      </div>`;
  });
}

showGoodMembers();