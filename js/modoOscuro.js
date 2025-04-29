//CODIGO PARA PONER UN MODO OSCURO A LA PAGINA.

document.addEventListener('DOMContentLoaded', () => {
    // Selecciona los bonotes para los modos claro y oscuro
    const modoClaro = document.getElementById('modoClaro');
    const modoOscuro = document.getElementById('modoOscuro');


    // Evento para activar el modo claro
    modoClaro.addEventListener('click', (e) => {
      e.preventDefault(); // Previene que el enlace redireccione
      document.documentElement.setAttribute('data-bs-theme', 'light');
      localStorage.setItem('theme', 'light');
    });
    
    // Evento para activar el modo oscuro
    modoOscuro.addEventListener('click', (e) => {
      e.preventDefault(); // Previene que el enlace redireccione
      document.documentElement.setAttribute('data-bs-theme', 'dark');
      localStorage.setItem('theme', 'dark'); 
    });
  });