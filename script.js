"use strict";

// Declaration:

// Declare Links
const homeLink = document.getElementById("homeLink");
const aboutLink = document.getElementById("aboutLink");
const webLink = document.getElementById("webLink");

// Declare 'Projects' Button
const projectLink = document.getElementById("btnToProject");

// Declare Sections
const aboutSection = document.querySelector(".about_section");
const webSection = document.querySelector(".web_development_section");

// Declare Logo
const logo = document.getElementById("logo");

// Declare Lior Copyright
const liorCopy = document.getElementById("lior_copy");

// Declare Toggle Button
const toggleButton = document.querySelector(".toggle-button");
const navbarLinks = document.querySelector(".header_links");
const actualLinks = document.querySelectorAll(".header_link_item");

// Toggle navbar visibility on button click
toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

// Close the navbar when a link is clicked
actualLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navbarLinks.classList.remove("active");
  });
});

// Scroll to the top of the page when the logo is clicked
logo.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Scroll to the top of the page when the copyright is clicked
liorCopy.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Scroll to the respective sections
homeLink.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

aboutLink.addEventListener("click", (e) => {
  e.preventDefault();
  aboutSection.scrollIntoView({ behavior: "smooth" });
});

webLink.addEventListener("click", (e) => {
  e.preventDefault();
  webSection.scrollIntoView({ behavior: "smooth" });
});

// Scroll to the 'Projects' section
projectLink.addEventListener("click", (e) => {
  e.preventDefault();
  webSection.scrollIntoView({ behavior: "smooth" });
});
