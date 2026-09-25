// set up current year and last modified date
document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;
// Get the query string ?first=John&last=Doe...
const myInfo = new URLSearchParams(window.location.search);

// Display on page
document.querySelector('#results').innerHTML = `
<p>First Name: ${myInfo.get('first')}</p>
<p>Last Name: ${myInfo.get('last')}</p>
<p>Phone: ${myInfo.get('phone')}</p>
<p>Email: ${myInfo.get('email')}</p>
<p>Service: ${myInfo.get('service')}</p>
<p>Date: ${myInfo.get('date')}</p>
<p>Vehicles: ${myInfo.get('vehicles')}</p>
<p>Instructions: ${myInfo.get('instructions')}</p>
`;

// Log for debugging - this is the toString() method from lesson
console.log(myInfo.toString());