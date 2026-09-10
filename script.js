function toggleMenu() {
    const nav = document.getElementById("nav");
    nav.classList.toggle("show");
}


document.querySelectorAll("#nav a").forEach(function(link) {

    link.addEventListener("click", function() {
        document.getElementById("nav").classList.remove("show");
    });

});


function sendMessage(event) {
    event.preventDefault();

    alert(
        "Thank you for your message! Please email me directly at dhanushpc2003@gmail.com."
    );
}


function noLink() {
    alert(
        "Project link will be added when the project repository is published."
    );

    return false;
}


const observer = new IntersectionObserver(
    function(entries) {

        entries.forEach(function(entry) {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    },
    {
        threshold: 0.12
    }
);


document.querySelectorAll(".reveal").forEach(function(element) {
    observer.observe(element);
});
