document.addEventListener("DOMContentLoaded", () => {
	"use strict";

	const form = document.querySelector("form");
	const pass = form.querySelector(".input-password");
	const pass2 = form.querySelector(".input-password2");
	const register = form.querySelector(".app-btn");

	let isValidate = true;

	const regExpName = /^([a-zа-яё]+[\s]{0,1}[a-zа-яё]+[\s]{0,1}[a-zа-яё]+)$/gi;
	const regExpEmail =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	const regExpPass =
		/(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/g;
	const regExpPhone =
		/^(\+7|7|8)?[\s\-]?\(?[0-9]{3}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;

	const submit = () => {
		alert("Добро пожаловать!");
	};

	const yourEmail = document.querySelector(".input-email");
	const yourPass = document.querySelector(".input-password");

	/*register.addEventListener("click", () => {
      localStorage.setItem("email", yourEmail.value);
      localStorage.setItem("passw", yourPass.value);
    });*/

	const validateElem = (elem) => {
		if (elem.name === "name") {
			if (!regExpName.test(elem.value) && elem.value != "") {
				elem.nextElementSibling.textContent =
					"Введите корректное имя пользователя!";
				isValidate = false;
			} else {
				elem.nextElementSibling.textContent = "";
				// isValidate = true;
			}
		}
		if (elem.name === "email") {
			if (!regExpEmail.test(elem.value) && elem.value != "") {
				elem.nextElementSibling.textContent =
					"Введите корректный email!";
				isValidate = false;
			} else {
				elem.nextElementSibling.textContent = "";
				//   isValidate = true;
			}
		}

		if (elem.name === "phone") {
			if (!regExpPhone.test(elem.value) && elem.value != "") {
				elem.nextElementSibling.textContent =
					"Введите телефон в формате +70000000000";
				isValidate = false;
			} else {
				elem.nextElementSibling.textContent = "";
				//  isValidate = true;
			}
		}

		if (elem.name === "password") {
			if (!regExpPass.test(elem.value) && elem.value != "") {
				elem.nextElementSibling.textContent =
					"Введите корректный пароль!";
				alert(
					"Внимание! Пароль должен содержать не менее 8 символов: заглавные и строчные латинские буквы, цифры и спецсимволы(!@#$&*)"
				);
			} else {
				elem.nextElementSibling.textContent = "";
			}
		}
		if (elem.name === "password") {
			if (pass.value != pass2.value && pass2.value != "") {
				pass.nextElementSibling.textContent = "Пароли не совпадают!";
				pass2.nextElementSibling.textContent = "Пароли не совпадают!";
			} else {
				pass.nextElementSibling.textContent = "";
				pass2.nextElementSibling.textContent = "";
			}

			if (!regExpPass.test(elem.value) && elem.value != "") {
				elem.nextElementSibling.textContent =
					"Введите корректный пароль!";
			} else {
				elem.nextElementSibling.textContent = "";
			}
		}

		if (elem.name === "password2") {
			if (pass.value != pass2.value && pass2.value != "") {
				pass.nextElementSibling.textContent = "Пароли не совпадают!";
				pass2.nextElementSibling.textContent = "Пароли не совпадают!";
			} else {
				pass.nextElementSibling.textContent = "";
				pass2.nextElementSibling.textContent = "";
			}
		}
	};

	for (let elem of form.elements) {
		if (elem.tagName != "BUTTON" && elem.tagName != "SELECT") {
			elem.addEventListener("blur", () => {
				validateElem(elem);
			});
		}
	}

	register.addEventListener("click", function (event) {
		event.preventDefault();

		for (let elem of form.elements) {
			if (elem.tagName != "BUTTON" && elem.tagName != "SELECT") {
				if (elem.value === "") {
					elem.nextElementSibling.textContent =
						"Данное поле не заполнено!";
					isValidate = false;
				} else {
					elem.nextElementSibling.textContent = "";
					isValidate = true;
				}
			}
		}

		if (isValidate) {
			if (localStorage.getItem(yourEmail.value, yourPass.value)) {
				alert("Данный пользователь уже зарегистрирован");
				form.reset();
				window.location.href = "/regForm/index.html";
				return (isValidate = false);
			} else {
				localStorage.setItem(yourEmail.value, yourPass.value);
			}
			submit();
			form.reset();
			window.location.href = "../index.html";
		} else {
			alert("Заполните все поля формы");
		}
	});
});
