const toggler = document.querySelector(".nav__toggler");
const navbar = document.querySelector(".nav");
toggler.addEventListener("click", (e) => {
    console.log("Clicked!");
    navbar.classList.toggle("nav__expanded");
});

