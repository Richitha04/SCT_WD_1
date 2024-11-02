document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");

    const observerOptions = {
        root: null, // use the viewport as root
        threshold: 0.1 // trigger when 10% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the fade-in class to the section
                entry.target.classList.add("fade-in");
            } else {
                // Remove the fade-in class when the section goes out of view
                entry.target.classList.remove("fade-in");
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        section.classList.add("fade"); // add fade class initially
        observer.observe(section); // observe each section
    });
});
