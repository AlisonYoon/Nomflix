import "./styles.css";

const playbtnimage = require("./play_btn.png");
const mutebtnimage = require("./volume_off.png");
const unmutebtnimage = require("./volume_on.png");
const pausebtnimage = require("./pause_btn.png");

const header = document.querySelector(".js-header");
const video = document.querySelector(".js-video"),
    muteBtn = document.querySelector(".js-muteBtn"),
    playBtn = document.querySelector(".js-playBtn"),
    range = document.querySelector(".js-range"),
    customSearch = document.querySelector("#custom-search"),
    boxes = document.querySelectorAll(".box");
const boxList = Array.from(boxes);

video.autoplay= true;
video.loop = true;

const loadMutedPreference = () => {
    const mutedPref = localStorage.getItem("muted");
    if (mutedPref !== null) {
        if (mutedPref === "true") {
            video.muted = true;
            muteBtn.innerHTML = `<img src="${mutebtnimage}" />`;
        } else {
            video.muted = false;
            muteBtn.innerHTML = `<img src="${unmutebtnimage}" />`;
        }
    } else {
        video.muted = false;
        muteBtn.innerHTML = `<img src="${unmutebtnimage}" />`;
    }
};

const handleMuteBtnClick = () => {
    if (video.muted) {
        video.muted = false;
        muteBtn.innerHTML = `<img src= "${unmutebtnimage}" />`;
        localStorage.setItem("muted", false);
    } else {
        video.muted = true;
        muteBtn.innerHTML = `<img src= "${mutebtnimage}" />`;
        localStorage.setItem("muted", true);
    }
};


const handlePlayBtnClick = () => {
    if (video.paused) {
      playBtn.innerHTML = `<img src="${pausebtnimage}" /> pause`;
      video.play();
    } else {
      playBtn.innerHTML = `<img src="${playbtnimage}" /> play`;
      video.pause();
    }
  };
  
  const handleRangeChange = event => {
    const currentVolume = event.target.value;
    video.volume = currentVolume;
  };

  const handleSearchBtnClick = (event) => {
    console.log("clock");
    document.querySelector(".search-query").focus();
};
  
  muteBtn.addEventListener("click", handleMuteBtnClick);
  playBtn.addEventListener("click", handlePlayBtnClick);
  range.addEventListener("change", handleRangeChange);
  loadMutedPreference();
  customSearch.addEventListener("click", handleSearchBtnClick);


const handleContentLoaded = () => {
  muteBtn.addEventListener("click", handleMuteBtnClick);
  window.addEventListener("scroll", handleScroll);
}


const handleScroll = (event) => {
    
    const scrollHeight = window.scrollY;
    if (scrollHeight > 100) {
        header.classList.add("black");
    } else {
        header.classList.remove("black");
    }
};


const findAllNext = element => {
    const foundList = [];
    const findNext = element => {
      if (element !== null) {
        foundList.push(element);
        const previousElement = element.nextElementSibling;
        if (previousElement !== null) {
          findNext(previousElement);
        }
      }
    };
    findNext(element.nextElementSibling);
    return foundList;
  };
  
  const findAllPrevious = element => {
    const foundList = [];
    const findPrevious = element => {
      if (element !== null) {
        foundList.push(element);
        const previousElement = element.previousElementSibling;
        if (previousElement !== null) {
          findPrevious(previousElement);
        }
      }
    };
    findPrevious(element.previousElementSibling);
    return foundList;
  };
  
  const handleMouseEnter = event => {
    const target = event.target;
    const nextElements = findAllNext(target);
    const previousElements = findAllPrevious(target);
    nextElements.forEach(element => {
      element.classList.add("next");
    });
    previousElements.forEach(element => {
      element.classList.add("previous");
    });
  };
  
  const handleMouseLeave = event => {
    const { target } = event;
    boxList.forEach(box => {
      box.classList.remove("next", "previous");
    });
  };
  
  boxList.forEach(box => {
    box.addEventListener("mouseover", handleMouseEnter);
    box.addEventListener("mouseleave", handleMouseLeave);
  });
  
  


window.addEventListener("scroll", handleScroll);

document.addEventListener("DOMContentLoaded", handleContentLoaded);
