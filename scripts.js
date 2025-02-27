document.getElementById("arrow").addEventListener("click", function() {
var element= document.getElementById("mainContainer")
var currentSection = Math.round(element.scrollLeft / window.innerWidth) + 1;
    
element.scrollBy({
    left: window.innerWidth, 
    behavior: "smooth" 
});

if(currentSection == 4) {
    element.scrollLeft = 0;
}
});


// Scroll using the touchpad (vertical scroll to scroll horizontally)
/*document.getElementById("mainContainer").addEventListener("wheel", function(event) {
    var element = this;
    var currentSection = Math.round(element.scrollLeft / window.innerWidth) + 1;

    const scrollAmount = window.innerWidth;

        if (event.deltaY > 0) {
            // Scroll right (to the next section)
            element.scrollBy({
                left: scrollAmount, // Scroll right by one viewport width
                behavior: "smooth"
            });
        } else {
            // Scroll left (to the previous section)
            element.scrollBy({
                left: -scrollAmount, // Scroll left by one viewport width
                behavior: "smooth"
            });
        }
    
});
*/
 

const config = {
    type: 'carousel',
    perView: 3,
    breakpoints: {
        767: {
            perView: 1
        },
        1100: {
            perView:2
        }
    }
}

new Glide('.glide', config).mount()