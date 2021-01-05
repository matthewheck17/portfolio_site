addOnclicks();
addLeftArrowOnClick();
addRightArrowOnClick();

function addOnclicks(){
    var find = document.getElementsByClassName("proj-li");
    for (let i = 0; i<find.length; i++){
        find[i].addEventListener("click", handleClick);
    }
}

function handleClick() {
    if (this.classList.contains("pselected")){
        return;
    }

    var find = document.getElementsByClassName("pselected");
    while (find[0] !== undefined){
        find[0].classList.remove("pselected");
    }
    this.classList.add("pselected")
    var projDesc = document.getElementsByClassName(this.id);
    projDesc[0].classList.add("pselected");
    checkToRemoveArrows();
}

function checkToRemoveArrows () {
    if (!document.getElementById("right-arrow").classList.contains("ready")){
        document.getElementById("right-arrow").classList.add("ready");
    }

    if (!document.getElementById("left-arrow").classList.contains("ready")){
        document.getElementById("left-arrow").classList.add("ready");
    }

    if (document.getElementsByClassName("pselected")[0].id =="proj5" && document.getElementById("right-arrow").classList.contains("ready")){
        document.getElementById("right-arrow").classList.remove("ready");
    }

    if (document.getElementsByClassName("pselected")[0].id =="proj1" && document.getElementById("right-arrow").classList.contains("ready")){
        document.getElementById("left-arrow").classList.remove("ready");
    }
}

function addLeftArrowOnClick(){
    var leftArrow = document.getElementById("left-arrow");
    leftArrow.addEventListener("click", handleLeftArrowClick);
}

function handleLeftArrowClick() {
    if (!this.classList.contains("ready")){
        return;
    }
    var selected = document.getElementsByClassName("pselected");
    var preSelected = "proj" + (parseInt(selected[0].id.slice(-1)) - 1);
    while (selected[0] !== undefined){
        selected[0].classList.remove("pselected");
    }
    document.getElementById(preSelected).classList.add("pselected");
    var projDesc = document.getElementsByClassName(preSelected);
    projDesc[0].classList.add("pselected");
    checkToRemoveArrows();
}

function addRightArrowOnClick(){
    var rightArrow = document.getElementById("right-arrow");
    rightArrow.addEventListener("click", handleRightArrowClick);
}

function handleRightArrowClick() {
    if (!this.classList.contains("ready")){
        return;
    }

    var selected = document.getElementsByClassName("pselected");
    var postSelected = "proj" + (parseInt(selected[0].id.slice(-1)) + 1);
    while (selected[0] !== undefined){
        selected[0].classList.remove("pselected");
    }
    document.getElementById(postSelected).classList.add("pselected");
    var projDesc = document.getElementsByClassName(postSelected);
    projDesc[0].classList.add("pselected");
    checkToRemoveArrows();
}