"use strict";
import { timeConvertor } from "./utils.js";
const timer = document.querySelector(".main-time");
const menu = document.querySelector(".main-menu");
const startBtn = document.getElementById("startBtn");
let time = 1500;
let intervalID;

// ui functions
function handleStart() {
	const isActive = startBtn.classList.contains("active");
	startBtn.classList.toggle("active");
	startBtn.innerText = isActive ? "START" : "PAUSE";

	const value = timeConvertor(time);
	if (isActive) {
		clearInterval(intervalID);
	} else {
		intervalID = setInterval(() => {
			time--;
			timer.innerText = timeConvertor(time);
		}, 1000);
	}
}
