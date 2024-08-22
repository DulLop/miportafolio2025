var header = document.getElementsByClassName("menu-header")

window.addEventListener("scroll", ()=> {

    var scroll = window.scrollY

    if (scroll>10){
        header.styles.backgroundColor = "#121212"
    } else{
        header.styles.backgroundColor = "transparent"
        }
    
})