let prev = document.getElementById("previmg");
prev.onclick = function() {
    change_image()
};
let next = document.getElementById("nextimg");
next.onclick = function() {
    change_image()
};
let slider_image = document.querySelector('img');

function change_image() {
    let slider_img_src = slider_image.getAttribute('src');
    if (slider_img_src === "images/slider/slider2.jpeg") {
        slider_image.setAttribute("src", "images/slider/slider1.jpeg");
    } else {
        slider_image.setAttribute("src", "images/slider/slider2.jpeg");
    }
}