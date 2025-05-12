// Simulación de obtención del rango desde el backend (debes reemplazar esto con la forma real en que lo obtienes)
const userRank = localStorage.getItem("userRank") || 4; // Debe ser un valor del 1 al 4

// Definimos los elementos de la sidebar según su ID
const linksConfig = {
    1: ["principalLink", "dashboardLink"], // Alumnos
    2: ["principalLink", "dashboardLink", "ordersLink", "VerAlumnosLink"], // Preceptores
    3: ["principalLink", "dashboardLink", "ordersLink", "VerAlumnosLink"], // Profesores
    4: ["principalLink", "dashboardLink", "ordersLink", "VerAlumnosLink", "customersLink"] // Directivos
};

// Ocultamos todos los enlaces primero
document.querySelectorAll('.nav-link').forEach(link => {
    link.style.display = "none";
});

// Mostramos solo los permitidos según el rango
if (linksConfig[userRank]) {
    linksConfig[userRank].forEach(id => {
        const link = document.getElementById(id);
        if (link) link.style.display = "block";
    });
}

// Código para resaltar la página actual
const links = document.querySelectorAll('.nav-link');
links.forEach(link => {
    const currentPage = window.location.pathname.split('/').pop();
    if (link.getAttribute('href').includes(currentPage)) {
        link.classList.add('active');
    } else {
        link.classList.remove('active');
    }
});