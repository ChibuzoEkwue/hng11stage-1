const currentDayOfTheWeek = document.getElementById("dayOfTheWeek");

const currentUtcTime = document.getElementById("currentTime");

const image = document.querySelector("img");

const days = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
];

const date = new Date();

currentDayOfTheWeek.textContent = `${days[date.getDay()]}`;

currentUtcTime.textContent = `${date.getTime()}`;

image.addEventListener("load", (event) => {
	const { naturalWidth, naturalHeight } = image;
	console.log(naturalHeight, naturalWidth);
	image.style.height = `${naturalHeight}px`;
	image.style.width = `${naturalWidth}px`;
});
