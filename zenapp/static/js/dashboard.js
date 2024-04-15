let startSlide = 1;
let currentSlide = 1;
showSlide(startSlide)

function showSlide(num) {
    for (var i = 1; i <= 4; i++) {
        var slide = document.getElementById("slide" + i);
        var dot = document.getElementById("dot" + i);
        dot.classList.remove('active');
        slide.style.display = "none";
    }
    var slide = document.getElementById("slide" + num);
    var dot = document.getElementById("dot" + num);
    slide.style.display= "block";
    dot.classList.add('active');
    currentSlide = num;
}

function plusSlides(num) {
    currentSlide += num;
    showSlide(currentSlide);
}

window.onload = function() {
    document.getElementById("board_form").reset();
    var pos_suc = document.getElementById("suc-txt");
    var post_context = "{{ post_success }}"
    console.log("here");
    if (post_context) {
        pos_suc.style.display = "block";
    }
    else{
        pos_suc.style.display = "none";
    }
};