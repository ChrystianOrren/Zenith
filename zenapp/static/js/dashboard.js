let currentImg = 1;

//on load make 1 visisble
window.onload = function() {
    var img1 = document.getElementById("slideImg1");
    img1.style.display = 'block';
    var dot = document.getElementById("dot1");
    dot.style.backgroundColor = "#717171"
};

function currentSlide(num) {
    for (var i = 1; i <= 4; i++) {
        var slideImg = document.getElementById("slideImg" + i);
        slideImg.style.display = "none";
        var dot = document.getElementById("dot" + i);
        dot.style.backgroundColor = "#bbb"
    }
    var slideImg = document.getElementById("slideImg" + num);
    slideImg.style.display = 'block';
    var dot = document.getElementById("dot" + num);
    dot.style.backgroundColor = "#717171"
}