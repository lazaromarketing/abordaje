// Funciones comunes para el portal (por ahora solo para navegación, luego más)
document.addEventListener('DOMContentLoaded', function() {
  // Marcar enlace activo en la navegación
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPath.split('/').pop() || 
        (currentPath.includes(link.getAttribute('href')) && link.getAttribute('href') !== '')) {
      link.style.color = 'var(--magenta)';
      link.style.fontWeight = 'bold';
    }
  });
});