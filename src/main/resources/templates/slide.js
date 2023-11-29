jQuery(document).ready(function($) {
    var slides = $('#sliderContainer .slide');
    var currentIndex = 0;
    var slideCount = slides.length;

    // Function to show a slide
    function showSlide(index) {
        slides.eq(index).animate({ top: '0%' }, 1000, function() {
            // Reset the position of the previous slide
            slides.eq(currentIndex).css('top', '-100%');
            currentIndex = index;

            // Automatically move to the next slide after a delay
            setTimeout(nextSlide, 3000);
        });
    }

    // Function to move to the next slide
    function nextSlide() {
        var nextIndex = (currentIndex + 1) % slideCount;
        showSlide(nextIndex);
    }

    // Start the slideshow
    setTimeout(nextSlide, 3000);
});
