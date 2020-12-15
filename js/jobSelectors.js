addOnclicks();

function addOnclicks(){
    var find = document.getElementsByClassName("job-li");
    for (let i = 0; i<find.length; i++){
        find[i].addEventListener("click", handleClick);
    }
}

function handleClick() {
    if (this.classList.contains("jselected")){
        return;
    }

    var find = document.getElementsByClassName("jselected");
    while (find[0] !== undefined){
        find[0].classList.remove("jselected");
    }

    this.classList.add("jselected");
    var jobDesc = document.getElementsByClassName(this.id);
    jobDesc[0].classList.add("jselected");
}