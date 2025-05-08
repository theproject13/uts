function performSearch() {
    const query = document.querySelector('.search-input').value.trim().toLowerCase();
    if (query) {
      const pages = {
        'dashboard': 'dashboard.html',
        'profile': 'profil.html',
        'settings': 'settings.html',
        'help': 'help.html',
        'home': 'home.html',
        'about': 'about.html',
        'services': 'services.html',
        'contact': 'contact.html',
        'orchid forest cikole': 'home.html',
        'kawah putih ciwidey': 'home.html',
        'floating market lembang': 'home.html'
      };
      if (pages[query]) {
        window.top.frames['kanan'].location.href = pages[query];
      } else {
        window.top.frames['kanan'].location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
      }
    } else {
      alert('Please enter a search term.');
    }
  }
  document.querySelector('.search-btn-header').addEventListener('click', performSearch);
  document.querySelector('.search-input').addEventListener('keypress', e => {
    if (e.key === 'Enter') performSearch();
  });