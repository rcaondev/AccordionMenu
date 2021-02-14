let section = document.querySelectorAll(".section");

for(let i = 0; i < section.length; i++){
    section[i].addEventListener("click", function(){
        let result = this.nextElementSibling;
        result.classList.toggle("active");
        if(this.firstElementChild.innerText === "+"){
            this.firstElementChild.innerText = "-"
        }
        else{
            this.firstElementChild.innerText = "+"
        }
    });
}