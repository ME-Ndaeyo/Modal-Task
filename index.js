// VARIABLES
let content = document.getElementsByClassName("content")
let modal = document.querySelector(".modal")
let modalContent = document.getElementById("modal-content")
let good = document.querySelector(".good")
let bad = document.querySelector(".bad")
let ugly = document.querySelector(".ugly") 

// DISPLAY MODAL SCREEN
for(var i = 0; i< content.length; i++){

    /* GOOD */
    document.getElementsByClassName("content")[0].addEventListener('click', function(){
        good.style.display = "block" 
        bad.style.display = "none"
        ugly.style.display = "none"
    })

    /* BAD */
    document.getElementsByClassName("content")[1].addEventListener('click', function(){
        bad.style.display = "block"
        good.style.display = "none"
        ugly.style.display = "none"
    })

    /* UGLY */
        document.getElementsByClassName("content")[2].addEventListener('click', function(){
        ugly.style.display = "block"
        bad.style.display = "none"
        good.style.display = "none"
    })

    content[i].addEventListener('click', function(){
    modal.style.display = "block"
})
}

/* HIDE MODAL SCREEN */

document.querySelector("span.close").addEventListener('click', function(){
    modal.style.display = "none"
})

document.addEventListener('click', function(event){
    if (event.target===modal){
        modal.style.display = "none"
    }
})




    