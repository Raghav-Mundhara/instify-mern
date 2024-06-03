// let songIndex = 0;
// let audioElement = new Audio();
// let masterPlay = document.getElementById('masterPlay');
// let myProgressBar = document.getElementById('myProgressBar');
// let gif = document.getElementById('gif');
// let masterSongName = document.getElementById('masterSongName');
// let songItems = Array.from(document.getElementsByClassName('songItem'));
// let backgroundContainer = document.getElementById('backgroundContainer');
// let songs = [
//     {songName: "Warriyo - Mortals [NCS Release]", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
//     {songName: "Cielo - Huma-Huma", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
//     {songName: "DEAF KEV - Invincible [NCS Release]-320k", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
//     {songName: "Different Heaven & EH!DE - My Heart [NCS Release]", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
//     {songName: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
//     {songName: "Rabba - Salam-e-Ishq", filePath: "songs/1.mp3", coverPath: "covers/6.jpg"},
//     {songName: "Sakhiyaan - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/7.jpg"},
//     {songName: "Bhula Dena - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/8.jpg"},
//     {songName: "Tumhari Kasam - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/9.jpg"},
//     {songName: "Na Jaana - Salam-e-Ishq", filePath: "songs/4.mp3", coverPath: "covers/10.jpg"},
// ]
// function initializeAudio() {
//     audioElement.src = songs[songIndex].filePath;
//     audioElement.addEventListener('loadedmetadata', function() {
//         let totalMinutes = Math.floor(audioElement.duration / 60);
//         let totalSeconds = Math.floor(audioElement.duration % 60);
//         totalDurationElement.textContent = totalMinutes + ':' + (totalSeconds < 10 ? '0' : '') + totalSeconds;
//     });

//     audioElement.addEventListener('timeupdate', function() {
//         let currentMinutes = Math.floor(audioElement.currentTime / 60);
//         let currentSeconds = Math.floor(audioElement.currentTime % 60);
//         currentTimeElement.textContent = currentMinutes + ':' + (currentSeconds < 10 ? '0' : '') + currentSeconds;
//     });
// }

// function updateSongItems() {
//     songItems.forEach((element, i)=>{ 
//         element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
//         element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
//     });
// }

// function makeAllPlays() {
//     Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
//         element.classList.remove('fa-pause-circle');
//         element.classList.add('fa-play-circle');
//     });
// }

// function changeBackgroundImage() {
//     backgroundContainer.style.backgroundImage = `url(${songs[songIndex].coverPath})`;
// }

// function playPauseToggle() {
//     if(audioElement.paused || audioElement.currentTime <= 0){
//         audioElement.play();
//         masterPlay.classList.remove('fa-play-circle');
//         masterPlay.classList.add('fa-pause-circle');
//         gif.style.opacity = 1;
//     } else {
//         audioElement.pause();
//         masterPlay.classList.remove('fa-pause-circle');
//         masterPlay.classList.add('fa-play-circle');
//         gif.style.opacity = 0;
//     }
// }

// function updateProgressBar() {
//     let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100); 
//     myProgressBar.value = progress;
// }

// function setupEventListeners() {
//     masterPlay.addEventListener('click', playPauseToggle);

//     audioElement.addEventListener('timeupdate', updateProgressBar);

//     myProgressBar.addEventListener('change', ()=>{
//         audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
//     });

//     Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
//         element.addEventListener('click', (e)=>{ 
//             makeAllPlays();
//             songIndex = parseInt(e.target.id);
//             e.target.classList.remove('fa-play-circle');
//             e.target.classList.add('fa-pause-circle');
//             audioElement.src = songs[songIndex].filePath;
//             masterSongName.innerText = songs[songIndex].songName;
//             audioElement.currentTime = 0;
//             audioElement.play();
//             gif.style.opacity = 1;
//             masterPlay.classList.remove('fa-play-circle');
//             masterPlay.classList.add('fa-pause-circle');
//             changeBackgroundImage();
//         });
//     });

//     document.getElementById('next').addEventListener('click', ()=>{
//         if(songIndex >= songs.length - 1) {
//             songIndex = 0;
//         } else {
//             songIndex += 1;
//         }
//         initializeAudio();
//         masterSongName.innerText = songs[songIndex].songName;
//         audioElement.play();
//         masterPlay.classList.remove('fa-play-circle');
//         masterPlay.classList.add('fa-pause-circle');
//         changeBackgroundImage();
//     });

//     document.getElementById('previous').addEventListener('click', ()=>{
//         if(songIndex <= 0) {
//             songIndex = 0;
//         } else {
//             songIndex -= 1;
//         }
//         initializeAudio();
//         masterSongName.innerText = songs[songIndex].songName;
//         audioElement.play();
//         masterPlay.classList.remove('fa-play-circle');
//         masterPlay.classList.add('fa-pause-circle');
//         changeBackgroundImage();
//     });
// }

// // Initialize the player
// updateSongItems();
// initializeAudio();
// setupEventListeners();
