import clockImg from "/images/analog-clock.png";
import todoImg from "/images/focus-forge.png";
import weatherImg from "/images/breeze.png";

const projects = [
	{
		id: "analog-clock",
		name: "Analog Clock",
		title: "Classical Analog Clock",
		description:
			"A visually creative analog clock focused on smooth animations and clean design with classic background and a bold clock picture in the middle.",
		thumbnail: clockImg,

		features: [
			"Custom clock design",
			"Smooth hand animations",
			"Responsive layout",
			"Minimal UI",
		],

		techStack: ["HTML", "CSS", "JavaScript"],

		links: {
			github: "https://github.com/pixedit-dev/Analog-Clock",
			demo: "https://analog-clock-gamma-roan.vercel.app/",
		},

		details: {
			overview:
				"This project explores creative UI design by reimagining a traditional analog clock using modern front-end techniques.",
			challenges:
				"Handling rotation math and keeping animations smooth across different screen sizes.",
			conclusion:
				"The project helped reinforce animation timing, transforms, and layout precision.",
		},
	},

	{
		id: "todo-list-app",
		name: "FocusForge",
		title: "To-Do List with Countdown",
		description:
			"A task management app where each task includes its own countdown timer.",
		thumbnail: todoImg,

		features: [
			"Create, Edit, Delete, and organize each task",
			"Countdown timer per task",
			"Responsive UI",
			"User-friendly layout",
			"Real-time clock",
			"Local Storage Support",
		],

		techStack: {
			Frontend: ["JavaScript", "React", "CSS", "Context API"],
			Icons: "React-Icons",
			storage: "Local Storage",
			deployment: "Vercel",
			version_control: "Git + GitHub",
		},

		links: {
			github: "https://github.com/pixedit-dev/FocusForge",
			demo: "https://focusforge-pb5ikggk1-pixedit-1760s-projects.vercel.app",
		},

		details: {
			overview:
				"This app focuses on time awareness by combining task management with countdown timers.",
			challenges:
				"Managing multiple timers and keeping state updates efficient.",
			conclusion:
				"Improved understanding of state management and time-based logic.",
		},
	},

	{
		id: "weather-app",
		name: "Breeze",
		title: "Weather app powered by OpenWeatherMap",
		description:
			"A clean weather app with temperature unit toggle and dark/light mode.",
		thumbnail: weatherImg,

		features: [
			"Real-time weather updates",
			"5-day forecast with detailed daily breakdown",
			"48-hour hourly forecast",
			"Celsius / Fahrenheit toggle",
			"Dark and light themes",
			"Responsive UI",
		],

		techStack: {
			Frontend: ["JavaScript", "CSS", "React", "Context API", "useReducer"],
			Bundler: "Vite",
			API: "OpenWeatherMap",
			deployment: "Vercel",
			version_control: "Git + GitHub",
		},

		links: {
			github: "https://github.com/pixedit-dev/breeze",
			demo: "https://breeze-36wzbxwy0-pixedit-1760s-projects.vercel.app",
		},

		details: {
			overview:
				"A weather application designed with usability and clarity in mind.",
			challenges:
				"Handling API data and synchronizing theme and unit preferences.",
			conclusion:
				"Strengthened skills & decision-making in API integration and state management.",
		},
	},
];

export default projects;
