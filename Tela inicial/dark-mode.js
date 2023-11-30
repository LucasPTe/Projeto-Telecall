document.addEventListener('DOMContentLoaded', function () {
  const darkModeToggle = document.getElementById('darkModeToggle');
  const body = document.getElementById('body');

 
  const isDarkMode = localStorage.getItem('darkMode') === 'enabled';

 
  if (isDarkMode) {
      body.classList.add('dark-mode');
      darkModeToggle.checked = true;
  }

 
  darkModeToggle.addEventListener('change', function () {
      if (darkModeToggle.checked) {
          body.classList.add('dark-mode');
          localStorage.setItem('darkMode', 'enabled');
      } else {
          body.classList.remove('dark-mode');
          localStorage.setItem('darkMode', null);
      }
  });
});