
import { loadBags, displayBags } from './products.js';
import { setDates } from './date.js';
setDates();
const menuBtn = document.querySelector('#menu');
const nav = document.querySelector('nav');
if(menuBtn){ menuBtn.addEventListener('click', ()=> nav.classList.toggle('open')); }
const bagData = await loadBags();
displayBags(bagData);
const modal = document.querySelector('#bag-modal');
const modalContent = document.querySelector('#modal-content');
document.addEventListener('click', (e)=>{
  if(e.target.classList.contains('view-btn')){
    const bag = bagData.find(b => b.id == e.target.dataset.id);
    modalContent.innerHTML = `<h2>${bag.name}</h2><img src="${bag.image}" alt="${bag.name}" width="300" height="200"><p>${bag.desc}</p><p>R${bag.price} - ${bag.material}</p>`;
    modal.showModal();
  }
  if(e.target.classList.contains('wish-btn')){
    let list = JSON.parse(localStorage.getItem('wishlist')) || [];
    list.push(e.target.dataset.id);
    localStorage.setItem('wishlist', JSON.stringify(list));
    document.querySelector('#wish-count').textContent = list.length;
    alert('Added! Wishlist total: '+list.length);
  }
});
document.querySelector('#close-modal')?.addEventListener('click', ()=> modal.close());
const saved = JSON.parse(localStorage.getItem('wishlist')) || [];
const countSpan = document.querySelector('#wish-count');
if(countSpan) countSpan.textContent = saved.length;
document.querySelector('#filter-cheap')?.addEventListener('click', ()=>{
  const cheap = bagData.filter(b => b.price < 300);
  displayBags(cheap);
});
document.querySelector('#filter-all')?.addEventListener('click', ()=> displayBags(bagData));
document.querySelector('#sort-price')?.addEventListener('click', ()=>{
  const sorted = [...bagData].sort((a,b)=> a.price - b.price);
  displayBags(sorted);
});