const parallax = document.getElementById("parallax");

window.addEventListener("scroll", function()
{
    let offset =window.pageYOffset;
    parallax.style.backgroundPositionY = offset * 0.007 + "px";
})

const parallax2 = document.getElementById("parallax2");

window.addEventListener("scroll", function()
{
    let offset =window.pageYOffset;
    parallax.style.backgroundPositionY = offset * 0.007 + "px";
})