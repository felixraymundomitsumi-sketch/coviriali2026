function mostrarMenu() {
    const menu = document.querySelector(".menu-links");
    const boton = document.querySelector(".menu-btn");
    const abierto = menu.classList.toggle("activo");
    boton.setAttribute("aria-expanded", abierto ? "true" : "false");
}

const enlaces = document.querySelectorAll(".menu-links a");
enlaces.forEach((enlace) => {
    enlace.addEventListener("click", () => {
        document.querySelector(".menu-links").classList.remove("activo");
        document.querySelector(".menu-btn").setAttribute("aria-expanded", "false");
    });
});

// Muestra primero la portada de YouTube y carga el reproductor solo al hacer clic.
document.querySelectorAll(".video[data-video]").forEach((contenedor) => {
    const portada = contenedor.querySelector(".video-portada");
    portada.addEventListener("click", () => {
        const id = contenedor.dataset.video;
        const titulo = contenedor.dataset.title || "Video de YouTube";
        const iframe = document.createElement("iframe");
        iframe.src = `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`;
        iframe.title = titulo;
        iframe.loading = "lazy";
        iframe.referrerPolicy = "strict-origin-when-cross-origin";
        iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
        iframe.allowFullscreen = true;
        contenedor.replaceChildren(iframe);
    });
});

const formulario = document.getElementById("formulario-contacto");
formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Gracias por tu mensaje. El formulario está listo para conectarse a un servicio de envío.");
});
