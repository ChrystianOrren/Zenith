// Load redirect value from localStorage on script initialization
let redirect = localStorage.getItem('redirect') || '';

function diffPageLink(event) {
    var page_title = document.title;
    var href = event.target.getAttribute("href");
    if (page_title == "Dashboard") {
        console.log("Dashboard");
    } else {
        if (href && href.startsWith("#")) {
            console.log("Redirecting to Dashboard: ", href);
            var return_path = "/" + href;
            redirect = return_path;
            localStorage.setItem('redirect', redirect); // Save redirect value to localStorage
            window.location.href = return_path;
        } else {
            return;
        }
    }
}

function toggleMenu(event) {
    var ham_menu = document.getElementById("hamburger-menu");
    ham_menu.classList.toggle("show");
    if (event) {
        diffPageLink(event);
    }
}

function timedRedirect() {
    if (redirect != "") {
        window.location.href = redirect;
        redirect = "";
        localStorage.removeItem('redirect')
    }
}
