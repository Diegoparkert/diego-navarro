const videos = document.querySelectorAll("video");

videos.forEach(video => {

    video.addEventListener("mouseenter", () => {
        video.style.transform = "scale(1.05)";
    });

    video.addEventListener("mouseleave", () => {
        video.style.transform = "scale(1)";
    });

    video.addEventListener("click", () => {

        videos.forEach(v => {
            v.muted = true;
        });

        video.muted = false;
        video.play();

    });

});