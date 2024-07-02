document.addEventListener("DOMContentLoaded", function () {
    const headerPlaceholder = document.getElementById('footer-placeholder');
    fetch('assets/componentes/footer/footer.html')
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
            console.error('Error loading the footer:', error);
        });
});