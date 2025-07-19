$(document).ready(function() {
    var counter = 0;
    var c = 0;
    var i = setInterval(function() {
        $(".loading-page .counter h1").html(c + "%");
        $(".loading-page .counter hr").css("width", c + "%");

        counter++;
        c++;

        if (counter == 102) {
            clearInterval(i);

            // Redirect to register.html after the loading animation is complete
            window.location.href = "Blossom Medical Center user register interface.html";

            // Start the jumping animation after a short delay (adjust as needed)
            setTimeout(function() {
                jumpAnimation();
            }, 1000);
        }
    }, 50);

    function jumpAnimation() {
        $(".loading-page .counter .letters span").css("animation", "none").each(function(i) {
            $(this).css("animation", "jumpUpDown 1s infinite").css("animation-delay", i * 0.2 + "s");
        });
    }

    setInterval(jumpAnimation, 3000); // Repeat jumping animation every 3 seconds (adjust as needed)
});
