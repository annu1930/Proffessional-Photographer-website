// Form Validation Logic
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', function (e) {
      // Get form fields
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const subject = document.getElementById('subject').value.trim();
      const message = document.getElementById('message').value.trim();
  
      let valid = true;
  
      // Clear previous error messages
      document.querySelectorAll('.error-message').forEach(el => el.remove());
  
      // Validate Name
      if (name.length < 3) {
        showError('name', 'Name must be at least 3 characters long.');
        valid = false;
      }
  
      // Validate Email using Regular Expression
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailPattern.test(email)) {
        showError('email', 'Please enter a valid email address.');
        valid = false;
      }
  
      // Validate Subject
      if (subject === '') {
        showError('subject', 'Subject is required.');
        valid = false;
      }
  
      // Validate Message
      if (message.length < 10) {
        showError('message', 'Message must be at least 10 characters long.');
        valid = false;
      }
  
      // If not valid, prevent form submission
      if (!valid) {
        e.preventDefault();
      }
    });
  
    // Function to Display Error Messages
    function showError(fieldId, message) {
      const field = document.getElementById(fieldId);
      const error = document.createElement('div');
      error.className = 'error-message text-danger mt-1';
      error.innerText = message;
      field.parentElement.appendChild(error);
    }
  });