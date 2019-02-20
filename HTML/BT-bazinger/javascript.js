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
$(document).ready(function() {
    $("a[href*='#']:not([href='#])").click(function() {
        let target = $(this).attr("href");
        $('html,body').stop().animate({
            scrollTop: $(target).offset().top
        }, 1000);
        event.preventDefault();
    });
});