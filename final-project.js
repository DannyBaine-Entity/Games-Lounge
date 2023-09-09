// Get the button element
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Function to check if the page is scrolled down and show the button
function checkScroll() {
    if (window.scrollY > 20) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
}

// Attach the checkScroll function to the scroll event
window.addEventListener("scroll", checkScroll);

// Function to scroll to the top of the page when the button is clicked
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// Attach the scrollToTop function to the button click event
scrollToTopBtn.addEventListener("click", scrollToTop);
