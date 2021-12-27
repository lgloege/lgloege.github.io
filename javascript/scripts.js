/* 
this was used for original hamburger menu 
https://www.youtube.com/watch?v=dIyVTjJAkLw 
*/
const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
});


/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function open_links() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  $('.hamburger').on('click', function () {
    $('.menu').addClass('open');
  });
  
  $( '.menu a' ).on("click", function(){
    $('.topnav #myLinks').style.display("none");
  });

  