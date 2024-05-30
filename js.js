<script">
        var slides = document.querySelectorAll('.slideshow-slide');
        var currentIndex = 0;
        var timer;
    
        function nextSlide() {
            slides[currentIndex].style.display = 'none';
            currentIndex = (currentIndex + 1) % slides.length;
            slides[currentIndex].style.display = 'block';
            resetTimer();
        }
    
        function resetTimer() {
            clearInterval(timer);
            timer = setInterval(nextSlide, 10000);
        }
    
        resetTimer();
    
        function goToSlide(index) {
            if (index >= 0 && index < slides.length) {
                slides[currentIndex].style.display = 'none';
                currentIndex = index;
                slides[currentIndex].style.display = 'block';
                resetTimer();
            }
        }
    </script>  
