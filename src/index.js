import "./styles.css";

const header = document.querySelector(".js-header");
const video = document.querySelector(".js-video"),
    muteBtn = document.querySelector(".js-muteBtn"),
    playBtn = document.querySelector(".js-playBtn"),
    range = document.querySelector(".js-range");

video.autoplay= false;
video.loop = true;

const loadMutedPreference = () => {
    const mutedPref = localtorage.getItem("muted");
    if (mutedPref !== null) {
        if (mutedPref === "true") {
            video.muted = true;
            muteBtn.innerHTML = "<svg data-name=\"Layer 1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 36.41 37.7\"><path d=\"M66.63,57.42,65,54.95a5.78,5.78,0,0,0,2.59-4.83A5.63,5.63,0,0,0,65,45.29l1.65-2.47a8.7,8.7,0,0,1,3.89,7.3A8.56,8.56,0,0,1,66.63,57.42Z\" transform=\"translate(-34.11 -31.15)\"/><polygon points=\"24.39 37.7 10.49 27.57 0 27.57 0 10.13 10.49 10.13 24.39 0 24.39 37.7\"/></svg>";
        } else {
            video.muted = false;
            muteBtn.innerHTML = "<svg data-name=\"Layer 1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 63.57 52.7\"><polygon points=\"34.09 52.7 14.66 38.54 0 38.54 0 14.16 14.66 14.16 34.09 0 34.09 52.7\"/><polygon points=\"63.57 19.43 60.6 16.47 53.19 23.88 45.78 16.47 42.82 19.43 50.23 26.84 42.82 34.26 45.78 37.22 53.19 29.81 60.6 37.22 63.57 34.26 56.16 26.84 63.57 19.43\"/></svg>";
        }
    } else {
        video.muted = false;
        muteBtn.innerHTML = "<svg data-name=\"Layer 1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 63.57 52.7\"><polygon points=\"34.09 52.7 14.66 38.54 0 38.54 0 14.16 14.66 14.16 34.09 0 34.09 52.7\"/><polygon points=\"63.57 19.43 60.6 16.47 53.19 23.88 45.78 16.47 42.82 19.43 50.23 26.84 42.82 34.26 45.78 37.22 53.19 29.81 60.6 37.22 63.57 34.26 56.16 26.84 63.57 19.43\"/></svg>";
    }
};

const handleMuteBtnClick = () => {
    if (video.muted) {
        video.muted = false;
        muteBtn.innerHTML = "<svg data-name=\"Layer 1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 63.57 52.7\"><polygon points=\"34.09 52.7 14.66 38.54 0 38.54 0 14.16 14.66 14.16 34.09 0 34.09 52.7\"/><polygon points=\"63.57 19.43 60.6 16.47 53.19 23.88 45.78 16.47 42.82 19.43 50.23 26.84 42.82 34.26 45.78 37.22 53.19 29.81 60.6 37.22 63.57 34.26 56.16 26.84 63.57 19.43\"/></svg>";
        localStorage.setItem("muted", false);
    } else {
        video.muted = true;
        muteBtn.innerHTML = "<svg data-name=\"Layer 1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 36.41 37.7\"><path d=\"M66.63,57.42,65,54.95a5.78,5.78,0,0,0,2.59-4.83A5.63,5.63,0,0,0,65,45.29l1.65-2.47a8.7,8.7,0,0,1,3.89,7.3A8.56,8.56,0,0,1,66.63,57.42Z\" transform=\"translate(-34.11 -31.15)\"/><polygon points=\"24.39 37.7 10.49 27.57 0 27.57 0 10.13 10.49 10.13 24.39 0 24.39 37.7\"/></svg>";
        localStorage.setItem("muted", true);
    }
};

const handlePlayBtnClick = () => {
    if (video.paused) {
      playBtn.innerHTML = "<svg id=\"Layer_1\" data-name=\"Layer 1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 64 84\"><path d=\"M84,50,20,92V8Z\" transform=\"translate(-20 -8)\"/></svg>";
      video.play();
    } else {
      playBtn.innerHTML = "<svg id=\"_Layer_\" data-name=\"&lt;Layer&gt;\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 29.75 39.67\">><path d=\"M56.5,30.17V69.83h9.92V30.17ZM36.67,69.83h9.92V30.17H36.67Z\" transform=\"translate(-36.67 -30.17)\"/></svg>";
      video.pause();
    }
  };
  
  const handleRageChange = event => {
    const currentVolume = event.target.value;
    video.volume = currentVolume;
  };
  
  muteBtn.addEventListener("click", handleMuteBtnClick);
  playBtn.addEventListener("click", handlePlayBtnClick);
  range.addEventListener("change", handleRageChange);
  loadMutedPreference();
  

const handleScroll = (event) => {
    
    const scrollHeight = window.scrollY;
    if (scrollHeight > 100) {
        header.classList.add("black");
    } else {
        header.classList.remove("black");
    }
};

window.addEventListener("scroll", handleScroll);


const handleContentLoaded = () => {
  muteBtn.addEventListener("click", handleMuteBtnClick);
  window.addEventListener("scroll", handleScroll);
}


document.addEventListener("DOMContentLoaded", handleContentLoaded);