function clickCard(imgUrl, shaper, num, desc) {
    console.log(imgUrl, shaper, num, desc);
    var grid = document.getElementById("grid");
    var popUp = document.getElementById("popUp");
    if (grid && popUp){
        grid.style.pointerEvents = "none";
        grid.style.filter = "blur(3px)";
        popUp.style.display = "flex";

        var img = document.getElementById("popUpImg");
        img.src = imgUrl
        var shaperNum = document.getElementById("shaperNum");
        shaperNum.textContent = shaper + ' - ' + num;
        var descElement = document.getElementById("description");
        descElement.textContent = desc;
    }
}

function purchaseClick() {
    var purchaseBtn = document.getElementById("purchaseBtn");
    var purchaseInfo = document.getElementById("purchaseInfo");
    purchaseBtn.style.display = "none";
    purchaseInfo.style.display = "flex"
    purchaseInfo.style.flexDirection ="column";
}

function closePopUp() {
    var grid = document.getElementById("grid");
    var popUp = document.getElementById("popUp");
    var purchaseBtn = document.getElementById("purchaseBtn");
    var purchaseInfo = document.getElementById("purchaseInfo");
    if (grid && popUp){
        grid.style.pointerEvents = "auto";
        grid.style.filter = "none";
        popUp.style.display = "none"
        purchaseBtn.style.display = "inline-block";
        purchaseInfo.style.display = "none"
    }
}