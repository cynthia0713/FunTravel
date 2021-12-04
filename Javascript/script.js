// AOS JS
AOS.init({
  duration: 800,
  delay: 400,
  mirror: true
});



function subscribeBtn() {
  var subscribed = document.getElementById("sub")

  document.getElementById("myInput").style.display = "none"

  document.getElementById("thankYouMsg").style.display = "block";

  subscribed.remove();
}

const scrollToTop = document.querySelector('.scrollBtn');

scrollToTop.addEventListener("click", function () {
  document.body.scrollTop = 0; //Safari
  document.documentElement.scrollTop = 0;
})

document.addEventListener("scroll", function (e) {
  if (document.documentElement.scrollTop > 300 || document.body.scrollTop > 300) {
    scrollToTop.style.display = "block"
  } else {
    scrollToTop.style.display = "none"
  }
})