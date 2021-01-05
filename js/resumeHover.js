
var resumeImg = document.getElementById("resume-link");

resumeImg.addEventListener("mouseover", hover);
resumeImg.addEventListener("mouseout", unhover);

function hover() {
    resumeImg.setAttribute("src", "./imgs/resume-white.png")
}

function unhover() {
    resumeImg.setAttribute("src", "./imgs/resume.png")
}