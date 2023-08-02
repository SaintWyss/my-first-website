const menus = document.querySelectorAll('.menu1, .menu2, .menu3, .menu4');

menus.forEach(menu => {
  menu.addEventListener('mouseover', () => {
    menu.style.backgroundColor = menu.style.backgroundColor.replace('0.5', '1');
  });

  menu.addEventListener('mouseout', () => {
    menu.style.backgroundColor = menu.style.backgroundColor.replace('1', '0.5');
  });
});


function showAlert() {//funcion boton
  alert("¡Hola, esta es una alerta desde JavaScript!");
}

// Eliminamos el código relacionado con el formulario ya que se ha eliminado del HTML

document.querySelector("button.button-menu-toggle").addEventListener("click", function() {
  document.querySelector(".nav-links").classList.toggle("nav-links-responsive");
});





//boton en proyect

// Utilizamos el evento "DOMContentLoaded" para asegurarnos de que todo el contenido HTML se haya cargado
document.addEventListener('DOMContentLoaded', function () {
  // Obtenemos una referencia a los botones y proyectos relacionados
  const showMoreBtnJava = document.querySelector('.java .show-more-btn');
  const hiddenProjectsJava = document.querySelectorAll('.java .project-hidden');
  const showMoreBtnPython = document.querySelector('.python .show-more-btn');
  const hiddenProjectsPython = document.querySelectorAll('.python .project-hidden');

  // Agregamos un evento click a los botones
  showMoreBtnJava.addEventListener('click', function () {
    toggleProjects(hiddenProjectsJava, showMoreBtnJava);
  });

  showMoreBtnPython.addEventListener('click', function () {
    toggleProjects(hiddenProjectsPython, showMoreBtnPython);
  });

  // Función para alternar la visibilidad de los proyectos y cambiar el texto y color del botón
  function toggleProjects(hiddenProjects, showMoreBtn) {
    const firstProject = hiddenProjects[0];
    const computedStyle = window.getComputedStyle(firstProject);

    const areProjectsVisible = computedStyle.display !== 'none';

    if (areProjectsVisible) {
      hiddenProjects.forEach((project) => {
        project.style.display = 'none';
      });
      showMoreBtn.textContent = 'Ver más';
      showMoreBtn.style.backgroundColor = '#007bff';
      showMoreBtn.classList.remove('flicker'); // Remover clase de parpadeo
    } else {
      hiddenProjects.forEach((project) => {
        project.style.display = 'block';
      });
      showMoreBtn.textContent = 'Mostrar menos';
      showMoreBtn.style.backgroundColor = '#dc3545';
      showMoreBtn.classList.add('flicker'); // Agregar clase de parpadeo
    }
  }

});