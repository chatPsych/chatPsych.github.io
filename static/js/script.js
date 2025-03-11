document.addEventListener("DOMContentLoaded", () => {
    console.log("chatPsych landing loaded.");
  });

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');
    const buttons = document.querySelectorAll('.nav-button');
  
    function showSection(id) {
      sections.forEach(section => {
        section.id === id ? section.classList.add('active') : section.classList.remove('active');
      });
      buttons.forEach(button => {
        button.dataset.target === id ? button.classList.add('highlight') : button.classList.remove('highlight');
      });
    }
  
    buttons.forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault();  // Prevent default anchor behavior
        showSection(button.dataset.target);
      });
    });
  
    showSection('about'); // Default active section
  });