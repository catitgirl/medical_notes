const open = document.getElementById("open");
const close = document.getElementById("close");
const sidebar = document.getElementById("sidebar");
const loginBtn = document.querySelector(".showcase-btn");
const newsBtn = document.querySelector(".articleBtn");
const loginEnterBtn = document.querySelector(".iw-modal-btn");
const modalWindow = document.querySelector(".iw-modal");

const userEmail = document.querySelector("#email");
const userPas = document.querySelector("#password");
const modalLoginBtn = document.querySelector("#log-btn");
const modalRegBtn = document.querySelector("#reg-btn");
const errorLogin = document.querySelector(".log-in_error");

const openSidebar = () => {
	sidebar.style.display = "block";
};

const closeSidebar = () => {
	sidebar.style.display = "none";
};

// Event listeners
open.addEventListener("click", openSidebar);
close.addEventListener("click", closeSidebar);

let slideIndex = 1;
showSlides(slideIndex);
function nextSlide() {
	showSlides((slideIndex += 1));
}
function previousSlide() {
	showSlides((slideIndex -= 1));
}
function currentSlide(n) {
	showSlides((slideIndex = n));
}
function showSlides(n) {
	let i;
	let slides = document.querySelectorAll(".testimonial");

	if (n > slides.length) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = slides.length;
	}

	for (let slide of slides) {
		slide.style.display = "none";
	}
	slides[slideIndex - 1].style.display = "block";
}

function storeData() {
	localStorage.setItem("email", userEmail.value);
	localStorage.setItem("passw", userPas.value);
}
function checkData() {
	let storedEmail = localStorage.getItem("email");
	let storedPass = localStorage.getItem("passw");

	if (userEmail.value == storedEmail && userPas.value == storedPass) {
		loginEnterBtn.textContent = "Выйти";
		modalWindow.style.display = "none";
	} else {
		errorLogin.style.display = "block";
	}
}

function userRegister() {
	window.location.href = "./regForm/index.html";
}

function logOut() {
	if (loginEnterBtn.innerHTML == "Выйти") {
		window.location.reload();
	}
}
modalRegBtn.addEventListener("click", userRegister);
modalLoginBtn.addEventListener("click", checkData);
loginEnterBtn.addEventListener("click", logOut);
