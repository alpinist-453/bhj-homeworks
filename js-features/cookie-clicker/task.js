
const image = document.getElementById("cookie");
const clicker = document.getElementById("clicker__counter")

function widthUp(){

    clicker.textContent = +(clicker.textContent) + 1;
    if (image.width == 200){ 
        image.width = 100;
    } else {image.width = 200}
 }

image.onclick = widthUp;