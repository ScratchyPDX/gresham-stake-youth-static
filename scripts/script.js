const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const date = new Date();

// set footer dates
document.getElementById("today-date").textContent = `${weekday[date.getDay()]}, ${date.getDate()} ${month[date.getMonth()]} ${date.getFullYear()}`;

// toggle hamburger menu
function toggleMenu() {
  document.getElementById("primaryNav").classList.toggle("open");
  document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById("hamburgerBtn");
x.onclick = toggleMenu;

const downloadCalendarPdf = document.getElementById('download-calendar-pdf');

if(downloadCalendarPdf != null) {
  downloadCalendarPdf.addEventListener("click", () =>  {
    alert("You are about to download the calendar PDF");
  });
}
  