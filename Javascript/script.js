//onclick function
function subscribeBtn() {
  var subscribed = document.getElementById("sub")

  document.getElementById("myInput").style.display = "none"

  document.getElementById("thankYouMsg").style.display = "block";

  subscribed.remove();
}


//Scroll-to-top functions
const scrollToTop = document.querySelector('.scrollBtn');

scrollToTop.addEventListener("click", function () {
  document.body.scrollTop = 0; //Safari
  document.documentElement.scrollTop = 0;
})

document.addEventListener("scroll", function (e) {
  if (document.documentElement.scrollTop > 200 || document.body.scrollTop > 200) {
    scrollToTop.style.display = "block"
  } else {
    scrollToTop.style.display = "none"
  }
})


let loader = document.getElementById("preload-container");

window.addEventListener("load", function () {
  console.log("page fully loaded")
  loader.style.display = "none";

})

