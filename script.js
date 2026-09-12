function itemchange(id){
    var items = document.getElementsByClassName("item");
    for (var elementnumber = 0; elementnumber < items.length; elementnumber++){
        items[elementnumber].classList.remove("select");

    }
    document.getElementById(id).classList.add("select");

    
    document.getElementsByClassName("maincontacts")[0].style.opacity = "0";
    
    document.getElementsByClassName("main")[0].style.opacity = "0";
    if (id == "myprogarmm"){
        document.getElementsByClassName("main")[0].style.opacity = "1";
    }
    if (id == "contacts"){
        document.getElementsByClassName("maincontacts")[0].style.opacity = "1";
    }
}