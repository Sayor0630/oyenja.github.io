var icon = document.getElementById("icon");

if(localStorage.getItem("theme") == null){
    localStorage.setItem("theme", "dark");
}



let localData = localStorage.getItem("theme");

if(localData == "light"){
    icon.src = "./img/theme_icon/moon.png";
    document.body.classList.remove("dark-theme");
}
else if(localData == "dark"){
    icon.src = "./img/theme_icon/sun.png";
    document.body.classList.add("dark-theme");
}


icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src = "./img/theme_icon/sun.png";
        localStorage.setItem("theme", "dark");
    }else{
        icon.src = "./img/theme_icon/moon.png";
        localStorage.setItem("theme", "light");
    }
}