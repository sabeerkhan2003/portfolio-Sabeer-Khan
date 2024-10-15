var sections = document.querySelectorAll("section");
var navlinks = document.querySelectorAll(".nav3 ul li a");

window.onscroll = () => {
    var top = window.scrollY + window.innerHeight / 2; // Add half the viewport height to center the section better

    sections.forEach(sec => {
        var offset = sec.offsetTop - 50; // Adjust by 50px to account for any sticky navbar height
        var height = sec.offsetHeight;
        var id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navlinks.forEach(link => {
                link.classList.remove("active");
            });

            var activeLink = document.querySelector(`.nav3 ul li a[href*="#${id}"]`);
            if (activeLink) {
                activeLink.classList.add("active");
            }
        }
    });
};
