document.addEventListener("DOMContentLoaded", function () {
    const headerPlaceholder = document.getElementById('header-placeholder');
    fetch('assets/componentes/header/header.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(html => {
            headerPlaceholder.innerHTML = html;
        })
        .catch(error => {
            console.error('Error loading the header:', error);
        });
});