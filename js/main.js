var increament = 1;
function slideButtons(){
    var play = document.getElementById("play");
    var pause = document.getElementById("pause");
    var backgroundSection = document.getElementById("image-section");

    pause.addEventListener("click",function(){
        backgroundSection.style.animationPlayState = "paused";
    },false);
    
    play.addEventListener("click",function(){
        backgroundSection.style.animationPlayState = "running";
    },false);

}
function menu(){
    $(".menu-button").click(function(){
        $(".mobile-navigation-wrapper").toggle(1500);
    });
}
slideButtons();
menu();