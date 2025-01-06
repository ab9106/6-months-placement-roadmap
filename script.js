// Toggle Questions
document.querySelectorAll('.toggle-questions').forEach(button => {
    button.addEventListener('click', () => {
      const questions = button.parentElement.nextElementSibling;
      questions.style.display = questions.style.display === 'block' ? 'none' : 'block';
      button.textContent = button.textContent === '+' ? '-' : '+';
    });
  });
  
  // Search Functionality
  const searchInput = document.getElementById('searchInput');
  searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    document.querySelectorAll('.company').forEach(company => {
      const companyName = company.querySelector('h3').textContent.toLowerCase();
      if (companyName.includes(query)) {
        company.style.display = 'block';
      } else {
        company.style.display = 'none';
      }
    });
  });
  