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
    if (num == -1 &&  currentSlide == 1){
        currentSlide = 4
        showSlide(currentSlide);
        return;
    }
    else if (num == 1 && currentSlide == 4) {
        currentSlide = 1
        showSlide(currentSlide);
        return;
    }
    currentSlide += num;
    showSlide(currentSlide);
}

window.onload = function() {

};

function submitClick(event){
    event.preventDefault(); // Prevent default form submission
    
    var form = document.getElementById("board_form");
    if (!form.checkValidity()) {
        console.log("Form is not valid");
        return;
    }

    // Serialize form data
    var formData = new FormData(form);

    // Send form data via AJAX
    var xhr = new XMLHttpRequest();
    xhr.open("POST", form.action);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                console.log("Form submitted successfully");
                document.getElementById("suc-txt").style.display = "block"; // Show success message
                form.reset(); // Optionally, reset the form
            } else {
                console.error("Form submission failed");
                // Optionally, handle the error
            }
        }
    };
    xhr.send(formData);
}

function copyEmailToClipboard(){
    navigator.clipboard.writeText("zenithshapers@gmail.com")
    .then(() => {
      /* Alert the user that the text has been copied */
      alert("Text copied to clipboard!");
    })
    .catch(err => {
      /* Handle any errors that may occur */
      console.error('Error copying text: ', err);
    });
}   