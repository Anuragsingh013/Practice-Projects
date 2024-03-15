//selectors
let openMenu = document.querySelector(".openMenu");
let closeMenu = document.querySelector(".closeMenu");
let navlinks = document.querySelector(".navlinks");
let navbar = document.querySelector("nav");
let darkModeBtn = document.querySelector(".darkModeBtn");
let lightModeBtn = document.querySelector(".lightModeBtn");
let container = document.querySelector(".container");
let carousel = document.querySelector(".swiper");
let footer = document.querySelector("footer");
let heroSection=document.querySelector(".hero-section")
let btn=document.querySelector(".btn")
//logic for opening navlinks in small screen
openMenu.addEventListener("click", () => {
  navlinks.style.display = "block";
  openMenu.style.display = "none";
});

//logic for closing navlinks in small screen
closeMenu.addEventListener("click", () => {
  navlinks.style.display = "none";
  openMenu.style.display = "block";
  closeMenu.style.transition = ".4s";
});

// Initially added to change navbar bg when we move down
const scrollThreshold = window.innerHeight * 1; // 50% of the viewport height
window.addEventListener("scroll", () => {
  if (window.scrollY > scrollThreshold) {
  } else {
  }
});

// logic for loader
document.addEventListener("DOMContentLoaded", function () {
  // Hide the loader and show the content when the page is fully loaded
  document.querySelector(".loader-wrapper").style.display = "none";
  document.querySelector(".container").style.display = "block";
});

//applying different style with dark mdoe with different element
darkModeBtn.addEventListener("click", () => {
  container.style.backgroundColor = "#020817";
  container.style.color = "#FAFAFA";
  carousel.style.border = "2px solid #101624b5";
  carousel.style.boxShadow = "0px 1px 2px #ffffff79, 0px 2px 4px #ffffff79, 0px 4px 8px #ffffff79, 0px 8px 16px #ffffff79";
  navbar.style.backgroundColor = "#02081799";
  navbar.style.borderBottom="1px solid  #ffffff79"
  navbar.style.backdropFilter = "blur(100px)";
  heroSection.style.backgroundImage="url('./assets/bg2.jpg')";
  btn.style.backgroundColor="#020817"
  footer.style.borderTop = "1px solid #fff";
  footer.innerHTML = `
  <iframe webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen="true" scrolling="no" src="//forms.visme.co/formsPlayer/_embed/epr4depr-basic-contact-form?embedIframeId=1" title="Basic Contact Form" loading="lazy" class="vismeForms" style="border: none; max-width: 100vw; min-height: 525.252px; width: 100%; height: 100%;"></iframe>
  <script src="https://static-bundles.visme.co/forms/vismeforms-embed.js"></script>`;
});

lightModeBtn.addEventListener("click", () => {
  container.style.backgroundColor = "white";
  container.style.color = "black";
  carousel.style.border = "";
  navbar.style.backgroundColor = "";
  heroSection.style.backgroundImage="";
  btn.style.backgroundColor=""
  footer.innerHTML = `
  <iframe webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen="true" scrolling="no" src="//forms.visme.co/formsPlayer/_embed/pvmz60ko-contact-form?embedIframeId=1" title="Contact Form" loading="lazy" class="vismeForms" style="border: none; max-width: 100vw; min-height: 525.252px; width: 100%; height: 100%;"></iframe>
  <script src="https://static-bundles.visme.co/forms/vismeforms-embed.js"></script>`;
});
