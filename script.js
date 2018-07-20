function HoverOnButton(id){
    document.getElementById(id).style.color="skyblue";
}
function HoverOffButton(id){
    document.getElementById(id).style.color="rgb(128, 128, 128)";
    
}



function myFunction(imgs) {
    var expandImg = document.getElementById("expandedImg");
    var imgText = document.getElementById("imgtext");
    expandImg.src = imgs.src;
    imgText.innerHTML = imgs.alt;
    expandImg.parentElement.style.display = "block";
}
