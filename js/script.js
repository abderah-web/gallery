function UpDate(previewPic) {
    const x = document.getElementById("image");
    x.style.backgroundImage = `url('${previewPic.src}')`;
    x.style.backgroundSize = "cover";
    x.style.backgroundPosition = "center";
    x.innerHTML = previewPic.alt;
}

function unDo() {
    const x = document.getElementById("image");
    x.innerHTML = "Hover over a car below";
    x.style.backgroundImage="";
}
function setimages() {
    currentimages = document.querySelectorAll("#imgs img")
    for ( var i=0 ; i < currentimages.length ; i++ ) {
    
    currentimages[i].setAttribute("tabindex", "0")
        
    }

}
function focusimg(focus) {
    
const x = document.getElementById("image");
    x.style.backgroundImage = `url('${focus.src}')`;
    x.style.backgroundSize = "cover";
    x.style.backgroundPosition = "center";
    x.innerHTML = focus.alt;

}

function unfocus() {
    const x = document.getElementById("image");
    x.innerHTML = "Hover over a car below";
    x.style.backgroundImage="";
}
