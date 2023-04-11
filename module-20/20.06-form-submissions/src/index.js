const searchForm = document.querySelector('#searchForm');
const articles = document.querySelectorAll('.article, .tutorial');

searchForm.addEventListener('submit', function(event) {
  event.preventDefault();
  
  // Get the search term from the form
  const searchTerm = document.querySelector('#searchTerm').value.trim().toLowerCase();
  
  // Validate the form
  if (searchTerm === '') {
    const error = document.createElement('div');
    error.className = 'error';
    error.id = 'searchError';
    error.textContent = 'Please enter a search term';
    const searchSection = document.querySelector('.search');
    searchSection.appendChild(error);
    return;
  } else {
    const error = document.querySelector('#searchError');
    if (error) {
      error.parentNode.removeChild(error);
    }
  }
  
  // Perform the search
  articles.forEach(function(article) {
    const title = article.querySelector('h2').textContent.toLowerCase();
    if (title.includes(searchTerm)) {
      article.classList.remove('hidden');
    } else {
      article.classList.add('hidden');
    }
  });
});

