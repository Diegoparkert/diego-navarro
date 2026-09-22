// Convierte cada miniatura en un reproductor de YouTube al hacer clic,
// para que los videos no se reproduzcan todos a la vez.

document.querySelectorAll(".media-frame").forEach(frame => {
    frame.addEventListener("click", () => {
        const card = frame.closest("[data-video-id]");
        if (!card) return;

        const videoId = card.dataset.videoId;
        const iframe = document.createElement("iframe");

        iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
        iframe.setAttribute("allow", "autoplay; encrypted-media; picture-in-picture");
        iframe.setAttribute("allowfullscreen", "");
        iframe.setAttribute("title", "Reproductor de video");

        frame.innerHTML = "";
        frame.appendChild(iframe);
        frame.style.cursor = "default";
    });
});
