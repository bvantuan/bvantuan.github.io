// scripts/back-to-top.js

// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {

    // Find the 'Back to Top' link
    var backToTopLink = document.getElementById('back-to-top');
  
    // Check if the link exists
    if (backToTopLink) {
      // Add a click event listener
      backToTopLink.addEventListener('click', function(event) {
        // Prevent the default jump behavior
        event.preventDefault();
  
        // Scroll smoothly to the top of the page
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    }
  
  });