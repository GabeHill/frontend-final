/*modal stuff*/

// Get the modal
// let modal = document.getElementById("myModal")
let modal = document.getElementsByClassName("modal")[0] // Get the button that opens the modal
let btn = document.getElementsByClassName("modal-button")[0] // Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0] // When the user clicks on the button, open the modal

btn.onclick = function () {
  modal.style.display = "block"
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none"
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none"
  }
}

/*end modal stuff*/

/*slideshow stuffffffff*/
let slideIndex = 1

// next/prev control
showSlides(slideIndex)

function plusSlides(n) {
  showSlides(slideIndex += n)
}

// dot button control
function currentSlide(n) {
  showSlides(slideIndex = n)
}

function showSlides(n) {
  let slides = document.getElementsByClassName("slide")
  let dots = document.getElementsByClassName("dot")
  if (n > slides.length)
    slideIndex = 1


  if (n < 1)
    slideIndex = slides.length


  for (let i = 0; i < slides.length; i++) slides[i].style.display = "none"

  for (let i = 0; i < dots.length; i++)
    dots[i].className = dots[i].className.replace(" active", "")


  slides[slideIndex - 1].style.display = "block"
  dots[slideIndex - 1].className += " active"
}

/*end slideshow*/
