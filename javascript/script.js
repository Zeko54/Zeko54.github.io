let MainImg = document.getElementById("MainImg");
let smallimg = document.getElementsByClassName("small-Img");

smallimg[0].onclick = function () {
  MainImg.src = smallimg[0].src;
};
smallimg[1].onclick = function () {
  MainImg.src = smallimg[1].src;
};
smallimg[2].onclick = function () {
  MainImg.src = smallimg[2].src;
};
smallimg[3].onclick = function () {
  MainImg.src = smallimg[3].src;
};

const bar = document.getElementById("bar");
const navItems = document.getElementsByClassName("nav-items");

if (bar) {
  bar.addEventListener("click", () => {
    navItems.classList.toggle("active");
  });
}
