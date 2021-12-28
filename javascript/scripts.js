/* 
toggle hamburger icon by adding/removing an "open" class
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



/* 
Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon 
*/
function open_links() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }


/* 
closes hamburger menu and changes icon when link is clicked 
*/
function close_links() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    /* closes the link box */
    x.style.display = "none";

    /* convert back to hamburger */
    menuBtn.classList.remove('open');
  } else {
    x.style.display = "block";
  }
}