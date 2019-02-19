function toggle(){
    var style = document.getElementById('about-contact').style.display;
    console.log(style);
    if(style == "none"){
        style = "block";
    }
    else{
        style = "none";
    }
    document.getElementById('about-contact').style.display = style;
}
