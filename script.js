// Add click event to all links with class 'scroll-link'
document.querySelectorAll('.scroll-link').forEach(link => {
  link.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent default link behavior
      const targetID = this.getAttribute('href').substring(1); // Get target section ID
      const targetElement = document.getElementById(targetID); // Find target element
      // Smooth scroll to target position, adjusting for header height
      window.scrollTo({
          top: targetElement.offsetTop - 70, // Adjust offset based on header size
          behavior: 'smooth' // Smooth scrolling
      });
  });
});

// Form validation setup
const form = document.getElementById('emailForm');
const emailInput = document.getElementById('emailInput');
const errorMessage = document.getElementById('error');

// When form is submitted
form.addEventListener('submit', function (e) {
  if (!validateEmail(emailInput.value)) { // Check if email is valid
      e.preventDefault(); // Prevent form submission if invalid
      errorMessage.style.display = 'block'; // Show error message
  } else {
      errorMessage.style.display = 'none'; // Hide error if valid
  }
});

// Function to validate email format
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email format check
  return regex.test(email); // Return true if valid, false if not
}
  
