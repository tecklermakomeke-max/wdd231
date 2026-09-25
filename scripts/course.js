// set up current year and last modified date
const yearSpan = document.getElementById("currentYear");
if (yearSpan) yearSpan.textContent = new Date().getFullYear();

const modSpan = document.getElementById("lastModified");
if (modSpan) modSpan.textContent = document.lastModified;

const courses = [
  {
    subject: 'CSE',
    number: 110,
    title: 'Intro to Programming',
    credits: 2,
    certificate: 'Web and Computer Programming',
    description: 'This course will introduce students to programming.',
    technology: ['JavaScript', 'HTML', 'CSS'],
    completed: true
  },
  {
    subject: 'WDD',
    number: 130,
    title: 'Web Fundamentals',
    credits: 2,
    certificate: 'Web and Computer Programming',
    description: 'This course introduces students to the World Wide Web.',
    technology: ['HTML', 'CSS'],
    completed: true
  },
  {
    subject: 'CSE',
    number: 111,
    title: 'Programming with Functions',
    credits: 2,
    certificate: 'Web and Computer Programming',
    description: 'Become more organized and efficient with functions.',
    technology: ['Python'],
    completed: true
  },
  {
    subject: 'CSE',
    number: 210,
    title: 'Programming with Classes',
    credits: 2,
    certificate: 'Web and Computer Programming',
    description: 'Introduction to classes and objects.',
    technology: ['C#'],
    completed: false
  },
  {
    subject: 'WDD',
    number: 131,
    title: 'Dynamic Web Fundamentals',
    credits: 2,
    certificate: 'Web and Computer Programming',
    description: 'Build dynamic websites with JavaScript.',
    technology: ['JavaScript', 'HTML', 'CSS'],
    completed: true
  },
  {
    subject: 'WDD',
    number: 231,
    title: 'Frontend Web Development I',
    credits: 2,
    certificate: 'Web and Computer Programming',
    description: 'Focus on user experience and accessibility.',
    technology: ['HTML', 'CSS', 'JavaScript'],
    completed: false
  }
];

const container = document.getElementById('course-cards');
const courseDetails = document.querySelector("#course-details");
const totalCreditsSpan = document.getElementById('totalCredits');

function display(list) {
  if (!container) return;
  container.innerHTML = '';
  list.forEach(c => {
    const div = document.createElement('div');
    div.classList.add('course');
    if (c.completed) div.classList.add('completed');
    div.textContent = `${c.subject} ${c.number}`;
    div.addEventListener('click', () => {
      displayCourseDetails(c);
    });
    container.appendChild(div);
  });
  if (totalCreditsSpan) {
    totalCreditsSpan.textContent = list.reduce((s, c) => s + c.credits, 0);
  }
}

function displayCourseDetails(course) {
  courseDetails.innerHTML = `
    <button id="closeModal">❌</button>
    <h2>${course.subject} ${course.number}</h2>
    <h3>${course.title}</h3>
    <p><strong>Credits:</strong> ${course.credits}</p>
    <p><strong>Certificate:</strong> ${course.certificate}</p>
    <p>${course.description}</p>
    <p><strong>Technologies:</strong> ${course.technology.join(', ')}</p>
  `;
  courseDetails.showModal();

  document.querySelector("#closeModal").addEventListener("click", () => {
    courseDetails.close();
  });
}

if (courseDetails) {
  courseDetails.addEventListener("click", (e) => {
    if (e.target === courseDetails) {
      courseDetails.close();
    }
  });
}

display(courses);

document.getElementById('all')?.addEventListener('click', () => display(courses));
document.getElementById('cse')?.addEventListener('click', () => display(courses.filter(c => c.subject === 'CSE')));
document.getElementById('wdd')?.addEventListener('click', () => display(courses.filter(c => c.subject === 'WDD')));