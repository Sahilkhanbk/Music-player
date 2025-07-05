const audio = document.querySelector("#audio")
const play = document.querySelector(".play")
const card = document.querySelector(".card")
const progress = document.querySelector(".progress")
const cover = document.querySelector(".disc img");
const next = document.querySelector(".next")
const back = document.querySelector(".back")

const songs = [
    {
        path: "songs/jaddu.mp3",
        image: "songs/image2.png"
    },
    {
        path: "songs/laal.mp3",
        image: "songs/image.png"
    }
];

let currentSong = 0;

function playSong(index) {
    audio.src = songs[index].path;
    cover.src = songs[index].image;
    audio.play();
    play.textContent = "||";
    card.classList.add("playing");
}

play.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        play.textContent = "||";
        card.classList.add("playing");
    } else {
        audio.pause();
        play.textContent = ">";
        card.classList.remove("playing");

    }
});

next.addEventListener("click", () => {
    currentSong = (currentSong + 1) % songs.length;
    playSong(currentSong);
});



back.addEventListener("click", () => {
    currentSong = (currentSong - 1 + songs.length) % songs.length;
    playSong(currentSong);
});


audio.addEventListener("timeupdate", (e) => {
    if (audio.duration) {
        const { duration, currentTime } = e.target;
        const progressPercent = (currentTime / duration) * 100;
        progress.style.width = progressPercent + "%";
    }
});

// Auto-play next song when current ends
audio.addEventListener("ended", () => {
    currentSong = (currentSong + 1) % songs.length;
    playSong(currentSong);
});





playSong(currentSong);










