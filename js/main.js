

window.addEventListener('scroll', showsec);

function showsec() {
    var reveals = document.querySelectorAll('.showsec');
    for(var i = 0; i < reveals.length; i++){
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 100;

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('show');
        }
    }
    
}


  // menu projects
  let switcherLis = document.querySelectorAll('.project-menu li');
  let imgProjectMenu = document.querySelectorAll('.all-project .box-project');

  switcherLis.forEach((li) => {
    li.addEventListener("click",removeAcitvee)
    li.addEventListener("click",manageImgs)

  })
function removeAcitvee(){
    switcherLis.forEach((li) => {
        li.classList.remove("active")
        this.classList.add("active")
    })
   
}

// mange imgs

function manageImgs() {
    imgProjectMenu.forEach((img) => {
        img.style.display = "none"
    });
    document.querySelectorAll(this.dataset.cat).forEach((elmsimg) => {
        elmsimg.style.display = "block";
        console.log('redaa')
    });
    
}
