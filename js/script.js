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
