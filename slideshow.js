var myImage = document.getElementById("mainImage");

var imageArray = ["beach.jpg", "fish.jpg", "garden.jpg", "goldengate.jpg", 
                "pagoda.jpg", "wharf.jpg", "windmill.jpg"];

var imageIndex = 0;
var prevButton = document.getElementById("previous");
var nextButton = document.getElementById("next");

function switchImage() {
    myImage.setAttribute("src", imageArray[imageIndex]);
    imageIndex++;
    if (imageIndex >= myImages.length) {
        imageIndex = imageArray[imageArray.length - 1];
    }
}
nextButton.onclick = function() {
    switchImage();
}