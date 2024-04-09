let startSlide = 1;
currentSlide(startSlide)

function currentSlide(num) {
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

}