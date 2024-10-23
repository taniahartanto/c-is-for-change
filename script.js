let videoFolder = "videos/"
let videoFiles = [
    "01-cover-page.mp4",
    "02-1st-page.mp4",
    "03-2nd-page.mp4",
    "04-3rd-page-1.mp4",
    "05-3rd-page-2.mp4",
    "06-4th-page-1.mp4",
    "07-4th-page-2.mp4",
    "08-5th-page-1.mp4",
    "09-5th-page-2.mp4",
    "10-5th-page-3.mp4",
    "11-6th-page.mp4",
    "12-7th-page.mp4",
    "13-8th-page.mp4",
    "14-8th-page-2.mp4",
    "15-9th-page-1.mp4",
    "16-9th-page-2.mp4",
    "17-10th-page.mp4",
    "18-11th-page.mp4",
    "19-12th-page.mp4",
    "20-13th-page-1.mp4",
    "21-13th-page-2.mp4",
    "22-13th-page-3.mp4",
    "23-13th-page-4.mp4",
    "24-14th-page-1.mp4",
    "25-14th-page-2.mp4",
    "26-14th-page-3.mp4",
    "27-back-to-cover.mp4"

];

let videoIndex = 0;
let videoPlayer = document.getElementById("video-player");
videoPlayer.addEventListener("ended", updateButtons);

let buttonBack = document.getElementById("back-button");
let buttonNext = document.getElementById("next-button");

function updateButtons() {
    console.log(videoIndex);
    // if (videoIndex == 0) {
    //     setNextButton("open journal", 300, 0, 200, 24);
    // }
    if (videoIndex == 1) {
        // place the button on the right!
        setNextButton("next page", 350, 300, 125, 24);
        //setBackButton("test1", -100, 0, 500, 100);
    }
    else if (videoIndex == 2) {
        // place the button on the right!
        setNextButton("next page", 350, 300, 125, 24);
        //setBackButton("test1", -100, 0, 500, 100);
    }
    else if (videoIndex == 3) {
        // place the button on the right!
        setNextButton(" ", 175, 70, 300, 200);
        //setBackButton("test1", -100, 0, 500, 100);
    }
    else if (videoIndex == 4) {
        // place the button on the right!
        setNextButton("next page", 350, 300, 125, 24);
        //setBackButton("test1", -100, 0, 500, 100);
    }
    else if (videoIndex == 5) {
        // place the button on the right!
        setNextButton("unfold paper", 235, 70, 150, 200);
        //setBackButton("test1", -100, 0, 500, 100);
    }
    else if (videoIndex == 6) {
        // place the button on the right!
        setNextButton("next page", 350, 300, 125, 24);
        //setBackButton("test1", -100, 0, 500, 100);
    }
    else if (videoIndex == 7) {
        // place the button on the right!
        setNextButton("pick up paper", 220, -45, 150, 200);
        //setBackButton("test1", -100, 0, 500, 100);
    }
    else if (videoIndex == 8) {
        // place the button on the right!
        setNextButton("continue writing", 0, 90, 500, 100);
        //setBackButton("test1", -100, 0, 500, 100);
    }
    else if (videoIndex == 9) {
        // place the button on the right!
        setNextButton("next page", 350, 300, 125, 24);
        //setBackButton("test1", -100, 0, 500, 100);
    }
    else if (videoIndex == 10) {
        // place the button on the right!
        setNextButton("next page", 350, 300, 125, 24);
        //setBackButton("test1", -100, 0, 500, 100);
    }
    else if (videoIndex == 11) {
        // place the button on the right!
        setNextButton("next page", 350, 300, 125, 24);
        //setBackButton("test1", -100, 0, 500, 100);
    }
    else if (videoIndex == 12) {
        // place the button on the right!
        setNextButton("take some pictures!", 0, -300, 960, 1500);
        //setBackButton("test1", -100, 0, 500, 100);
    }
    else if (videoIndex == 13) {
        // place the button on the right!
        setNextButton("next page", 350, 300, 125, 24);
        //setBackButton("test1", -100, 0, 500, 100);
    }
    else if (videoIndex == 14) {
        // place the button on the right!
        setNextButton("shake the polaroids!", 0, 0, 650, 500);
        //setBackButton("test1", -100, 0, 500, 100);
    }
    else if (videoIndex == 15) {
        // place the button on the right!
        setNextButton("next page", 350, 300, 125, 24);
        //setBackButton("test1", -100, 0, 500, 100);
    }
    else if (videoIndex == 16) {
        // place the button on the right!
        setNextButton("next page", 350, 300, 125, 24);
        //setBackButton("test1", -100, 0, 500, 100);
    }
    else if (videoIndex == 17) {
        // place the button on the right!
        setNextButton("next page", 350, 300, 125, 24);
        //setBackButton("test1", -100, 0, 500, 100);
    }
    else if (videoIndex == 18) {
        // place the button on the right!
        setNextButton("next page", 350, 300, 125, 24);
        //setBackButton("test1", -100, 0, 500, 100);
    }
    else if (videoIndex == 19) {
        // place the button on the right!
        setNextButton("play video!", -90, 100, 125, 24);
        //setBackButton("test1", -100, 0, 500, 100);
    }
    else if (videoIndex == 20) {
        // place the button on the right!
        setNextButton("⏭", -80, -15, 125, 24);
        //setBackButton("test1", -100, 0, 500, 100);
    }
    else if (videoIndex == 21) {
        // place the button on the right!
        setNextButton("⏭", -80, -15, 125, 24);
        //setBackButton("test1", -100, 0, 500, 100);
    }
    else if (videoIndex == 22) {
        // place the button on the right!
        setNextButton("next page", 350, 300, 125, 24);
        //setBackButton("test1", -100, 0, 500, 100);
    }
    else if (videoIndex == 22) {
        // place the button on the right!
        setNextButton("next page", 350, 300, 125, 24);
        //setBackButton("test1", -100, 0, 500, 100);
    }
    else if (videoIndex == 23) {
        // place the button on the right!
        setNextButton("open locket", 180, 110, 125, 24);
        //setBackButton("test1", -100, 0, 500, 100);
    }
    else if (videoIndex == 24) {
        // place the button on the right!
        setNextButton("write letter", -180, 0, 500, 100);
        //setBackButton("test1", -100, 0, 500, 100);
    }
    // else if (videoIndex == 25) {
    //     // place the button on the right!
    //     setNextButton("back to the beginning", 350, 300, 125, 24);
    //     //setBackButton("test1", -100, 0, 500, 100);
    // }
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
    videoPlayer.currentTime = 0; // start over
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
    videoPlayer.currentTime = 0; // start over
    videoPlayer.play();
    hideButtons();
}

// videoPlayer.addEventListener("ended", function () {
//     if (videoIndex === 26) {
//         // After video 26, reset to video index 0 (start over)
//         videoIndex = 0;
//         videoPlayer.src = videoFolder + videoFiles[videoIndex];
//         videoPlayer.currentTime = 0;
//         videoPlayer.play();
//     } else {
//         updateButtons(); // Continue with normal button logic
//     }
// });

