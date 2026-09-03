const courses=[
 {subject:'CSE',number:110,title:'Intro to Programming',credits:2,completed:true},
 {subject:'WDD',number:130,title:'Web Fundamentals',credits:2,completed:true},
 {subject:'CSE',number:111,title:'Programming with Functions',credits:2,completed:true},
 {subject:'CSE',number:210,title:'Programming with Classes',credits:2,completed:false},
 {subject:'WDD',number:131,title:'Dynamic Web Fundamentals',credits:2,completed:false},
 {subject:'WDD',number:231,title:'Frontend Development I',credits:2,completed:false}
];
const container=document.getElementById('course-cards');
const totalCreditsSpan=document.getElementById('totalCredits');
const totalCoursesP=document.getElementById('totalCourses');
function display(list){
 container.innerHTML='';
 list.forEach(c=>{
  const div=document.createElement('div');
  div.classList.add('course');
  if(c.completed) div.classList.add('completed');
  div.textContent=`${c.subject} ${c.number}`;
  container.appendChild(div);
 });
 const total=list.reduce((sum,c)=>sum+c.credits,0);
 totalCreditsSpan.textContent=total;
 totalCoursesP.textContent=`The total number of courses listed below is ${list.length}`;
}
function setActive(btn){
 document.querySelectorAll('.filter-buttons button').forEach(b=>b.classList.remove('active-filter'));
 btn.classList.add('active-filter');
}
display(courses);
document.getElementById('all').addEventListener('click',()=>{display(courses);setActive(document.getElementById('all'));});
document.getElementById('cse').addEventListener('click',()=>{display(courses.filter(c=>c.subject==='CSE'));setActive(document.getElementById('cse'));});
document.getElementById('wdd').addEventListener('click',()=>{display(courses.filter(c=>c.subject==='WDD'));setActive(document.getElementById('wdd'));});