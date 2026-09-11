 // set up current year and last modified date
document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;
const membersContainer=document.querySelector('#members');
const url='data/members.json';
async function getMembers(){
const response=await fetch(url);
const data=await response.json();
displayMembers(data);
}
function displayMembers(members){
membersContainer.innerHTML='';
members.forEach(member=>{
let card=document.createElement('section');
let img=document.createElement('img');
let name=document.createElement('h2');
let address=document.createElement('p');
let phone=document.createElement('p');
let website=document.createElement('a');
name.textContent=member.name;
address.textContent=member.address;
phone.textContent=member.phone;
website.textContent='Website';
website.href=member.website;
website.target='_blank';
img.src=member.image;
img.alt=member.name;
img.loading='lazy';
img.width=100;
img.height=100;
card.append(img,name,address,phone,website);
membersContainer.appendChild(card);
});
}
getMembers();
document.querySelector('#grid').addEventListener('click',()=>{membersContainer.classList.add('grid');membersContainer.classList.remove('list');});
document.querySelector('#list').addEventListener('click',()=>{membersContainer.classList.add('list');membersContainer.classList.remove('grid');});