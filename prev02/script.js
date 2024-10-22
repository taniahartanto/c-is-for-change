let videoFolder = "videos/"
let videoFiles = [
    "01-cover-page.mp4",
    "02-flip-cover-page.mp4",
    "03-1st-page-1.mp4",
    "04-1st-page-2.mp4",
    "05-flip-1st-page.mp4",
    "06-2nd-page-1.mp4",
    "07-2nd-page-2-done.mp4",
    "flip-next-page.mp4", //***
    "09-3rd-page-1.mp4",
    "10-3rd-page-2.mp4",
    "11-3rd-page-3-done.mp4",
    "flip-next-page.mp4", //***
    "13-4th-page-1.mp4",
    "14-4th-page-2.mp4",
    "15-4th-page-3-done.mp4",
    "flip-next-page.mp4", //***
    "17-5th-page-1.mp4",
    "18-5th-page-2.mp4",
    "19-5th-page-3.mp4",
    "20-5th-page-4.mp4",
    "flip-next-page.mp4", //***
    "22-6th-page-1.mp4",
    "23-6th-page-2-done.mp4",
];

let videoIndex = 0;
let videoPlayer = document.getElementById("video-player");
videoPlayer.addEventListener("ended", updateButtons);

let buttonBack = document.getElementById("back-button");
let buttonNext = document.getElementById("next-button");

function updateButtons() {
    console.log(videoIndex);
    if (videoIndex == 1) {
        // place the button on the right!
        setNextButton("test1", 100, 0, 500, 100);
        setBackButton("test1", -100, 0, 500, 100);
    } else if (videoIndex == 2) {
        // place the button somewhere else
        setNextButton("test2", -100, 0, 200, 500);
    }
}

function hideButtons() {
    buttonNext.style.display = "none";
    buttonBack.style.display = "none";
}

function setNextButton(html, x, y, w, h) {
    if (html) {
        buttonNext.innerHTML = html;
        buttonNext.style.display = "block";
        buttonNext.style.width = w + "px";
        buttonNext.style.height = h + "px";
        buttonNext.style.left = "calc(50% + " + x + "px)";
        buttonNext.style.top = "calc(50% + " + y + "px)";
    }
}

function setBackButton(html, x, y, w, h) {
    if (html) {
        buttonBack.innerHTML = html;
        buttonBack.style.display = "block";
        buttonBack.style.width = w + "px";
        buttonBack.style.height = h + "px";
        buttonBack.style.left = "calc(50% + " + x + "px)";
        buttonBack.style.top = "calc(50% + " + y + "px)";
    }
}

function moveBack() {
    console.log("back!");
    videoIndex = videoIndex - 1;
    //limit
    if (videoIndex < 0) {
        videoIndex = 0;  //the first index
    }

    videoPlayer.src = videoFolder + videoFiles[videoIndex];
    videoPlayer.currentTime = 0; // star over
    videoPlayer.play();

    hideButtons();
}

function moveForward() {
    console.log("next!");
    videoIndex = videoIndex + 1;
    //limit
    if (videoIndex > videoFiles.length - 1) {
        videoIndex = videoFiles.length - 1; // the last index
    }

    videoPlayer.src = videoFolder + videoFiles[videoIndex];
    videoPlayer.currentTime = 0; // star over
    videoPlayer.play();

    hideButtons();
}