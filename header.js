let currentSlide = 0;
slideStart();

function slideStart() {

    //get the images
    let image = document.getElementsByClassName("headerImage");

    // sets every image to not show 
    for (let i = 0; i < image.length; i++) {
        image[i].style.display = "none";
    }

    //adds a number to the current slide
    currentSlide++;

    //if the current slide gets to a higher number then images available then reset the current slide
    if (currentSlide > image.length) {
        currentSlide = 1;
    }

    // sets the current image to show
    image[currentSlide-1].style.display = "block";

    // timer for changing the image every 2 seconds
    setTimeout(slideStart, 2000);
}