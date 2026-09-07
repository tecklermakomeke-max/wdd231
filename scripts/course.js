// set up current year and last modified date
document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;
const courses=[
 {subject:'CSE',number:110,title:'Intro to Programming',credits:2,completed:true},
 {subject:'WDD',number:130,title:'Web Fundamentals',credits:2,completed:true},
 {subject:'CSE',number:111,title:'Programming with Functions',credits:2,completed:true},
 {subject:'CSE',number:210,title:'Programming with Classes',credits:2,completed:false},
 {subject:'WDD',number:131,title:'Dynamic Web Fundamentals',credits:2,completed:true},
 {subject:'WDD',number:231,title:'Frontend  Web Development I',credits:2,completed:false}
];
const container=document.getElementById('course-cards');
const totalCreditsSpan=document.getElementById('totalCredits');
function display(list){
 container.innerHTML='';
 list.forEach(c=>{
  const div=document.createElement('div');
  div.classList.add('course');
  if(c.completed) div.classList.add('completed');
  div.textContent=`${c.subject} ${c.number}`;
  container.appendChild(div);
 });
 totalCreditsSpan.textContent=list.reduce((s,c)=>s+c.credits,0);
}
display(courses);
document.getElementById('all').addEventListener('click',()=>display(courses));
document.getElementById('cse').addEventListener('click',()=>display(courses.filter(c=>c.subject==='CSE')));
document.getElementById('wdd').addEventListener('click',()=>display(courses.filter(c=>c.subject==='WDD')));