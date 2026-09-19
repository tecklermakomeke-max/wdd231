const myKey = "f4122b3567595496c07d20bd63b27110"; 
const lat = -25.86;
const lon = 28.18;

const todayUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${myKey}`;
const nextDaysUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${myKey}`;

async function showWeather() {
  try {
    const res1 = await fetch(todayUrl);
    if (!res1.ok) throw new Error("key not ready");
    const data1 = await res1.json();
    document.querySelector('#current-temp').textContent = `${data1.main.temp}°C`;
    document.querySelector('#weather-desc').textContent = data1.weather[0].description;

    const res2 = await fetch(nextDaysUrl);
    const data2 = await res2.json();
    let html = "";
    for(let i=0; i<3; i++){
      let oneDay = data2.list[i*8];
      let date = new Date(oneDay.dt_txt).toLocaleDateString();
      html += `<p>${date} - ${oneDay.main.temp}°C</p>`;
    }
    document.querySelector('#forecast').innerHTML = html;
  } catch (e) {
    document.querySelector('#current-temp').textContent = "Key activating (2hrs)";
    document.querySelector('#weather-desc').textContent = "Please wait...";
    document.querySelector('#forecast').innerHTML = "";
  }
}
showWeather();