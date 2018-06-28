
let upbutton = document.getElementById('upbutton');


let viewwork = document.getElementById('view-work');
let element = document.getElementById('images');
let elementTop = element.offsetTop; // top position of the div#images



/* move to the image area of my work*/
viewwork.addEventListener('click', moveTo);

/* adding button when scrolling down to move to top*/
upbutton.addEventListener('click', moveToTop);
window.addEventListener('scroll', addUpButton);


function moveToTop(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function addUpButton(){
    if(pageYOffset  < document.documentElement.clientHeight){
       upbutton.hidden = true;
    }else {
        upbutton.hidden = false;
    }
}



function moveTo(){
    window.scrollTo({
        top: elementTop,
        behavior: "smooth"
    })
}