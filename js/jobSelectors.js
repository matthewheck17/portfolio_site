addOnclicks();

function addOnclicks(){
    var find = document.getElementsByClassName("job-li");
    console.log(find);
    for (let i = 0; i<find.length; i++){
        find[i].addEventListener("click", handleClick);
    }
}

function handleClick() {
    if (this.classList.contains("selected")){
        return;
    }

    var find = document.getElementsByClassName("selected");
    while (find[0] !== undefined){
        find[0].classList.remove("selected");
    }

    this.classList.add("selected");
    var jobDesc = document.getElementsByClassName(this.id);
    jobDesc[0].classList.add("selected");
}

function deselectJob(){
    var find = document.getElementsByClassName("selected");
    if (find !== undefined){
        find[0].classList.remove("selected");
    }
}