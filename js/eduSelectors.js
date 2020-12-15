addOnclicks();

function addOnclicks(){
    var find = document.getElementsByClassName("edu-li");
    for (let i = 0; i<find.length; i++){
        find[i].addEventListener("click", handleClick);
    }
}

function handleClick() {
    if (this.classList.contains("eselected")){
        return;
    }

    var find = document.getElementsByClassName("eselected");
    while (find[0] !== undefined){
        find[0].classList.remove("eselected");
    }

    this.classList.add("eselected");
    var eduDesc = document.getElementsByClassName(this.id);
    eduDesc[0].classList.add("eselected");
}