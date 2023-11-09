'use strict';




// Declaration:

// Declare Links
const aboutLink = document.getElementById("aboutLink");
const webLink = document.getElementById("webLink");
const gameLink = document.getElementById("gameLink");

// Declare 'Projects' Button.
const projectLink = document.getElementById("btnToProject");


// Declare Sections
const aboutSection = document.querySelector('.about_section');
const webSection = document.querySelector('.web_development_section');
const gameSection = document.querySelector('.game_development_section');

// Declare Logo
const logo = document.getElementById('logo');

// Declare Toggle Button
const toggleButton = document.querySelector(".toggle-button");
const navbarLinks = document.querySelector('.header_links');
const actualLinks = document.querySelectorAll('.header_link_item');

toggleButton.addEventListener('click' , () =>
navbarLinks.classList.toggle('active'));



actualLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbarLinks.classList.remove('active');
    });
});




// Click the logo to scroll to the top of the page
logo.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' 
  });
});


// scrollIntoView -> Scroll the element before the dot into the visible area of the browser window:
const scrollToAboutSection = aboutLink.addEventListener('click' , function(e)
{
    e.preventDefault();
    aboutSection.scrollIntoView( {behavior: 'smooth' } );
})

const scrollToWebSection = webLink.addEventListener('click' , function(e)
{
    e.preventDefault();
    webSection.scrollIntoView( {behavior: 'smooth' } );
})

const scrollToGameSection = gameLink.addEventListener('click' , function(e)
{
    e.preventDefault();
    gameSection.scrollIntoView( {behavior: 'smooth' } );
})



// Activate 'Projects' Button:
const goToProject = projectLink.addEventListener('click' , function(e)
{
    e.preventDefault();
    webSection.scrollIntoView( {behavior: 'smooth'} );
})



