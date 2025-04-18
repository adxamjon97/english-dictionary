function get_theme(){
    if(localStorage.getItem("theme")=="dark")
        $('body').toggleClass("bootstrap-dark")
}

get_theme()