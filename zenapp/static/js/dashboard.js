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

function submitDec() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("mail").value;
    var description = document.getElementById("description").value;

    if (!name || !email || !description) {
        var errtxt = document.getElementById("err-allfields");
        errtxt.style.display = "block";
        return;
    }
    else {
        var errtxt = document.getElementById("err-allfields");
        errtxt.style.display = "none";
    }

    var data = {
        name: name,
        email: email,
        description: description
    };

    

}