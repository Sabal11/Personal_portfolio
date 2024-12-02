document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      alert('Thank you for your message! I will get back to you soon.');
      form.reset();
    });
  });