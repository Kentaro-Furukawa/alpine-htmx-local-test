document.body.addEventListener('htmx:configRequest', (event) => {
  if (event.detail.path === '/api/getData') {
      event.preventDefault(); // Prevent the default HTTP request
      const data = localStorage.getItem('myData');
      event.detail.target.innerHTML = `<p>My data is: ${data} Hooooo! </p>`
  }
});