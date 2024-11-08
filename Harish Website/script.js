document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    document.getElementById('status').textContent = `Thanks, ${name}! IOS Kurama will get back to you soon.`;
    setTimeout(() => {
        document.getElementById('status').textContent = '';
    }, 3000);
    document.getElementById('contactForm').reset();
});
