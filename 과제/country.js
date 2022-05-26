const country = document.querySelector("#country-form");
const countryInput = country.querySelector(".country-input");
const countryList = document.querySelector(".country-list")

let countrys = [];

localStorage.setItem("countryname", country)