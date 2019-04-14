$(document).ready(function() {
    $(".navbar-toggler").click (function() {
        $(".navbar-toggler").hide();
        $(".close").show();
    });

    $(".close").click(function() {
        $(".close").hide();
        $(".navbar-toggler").show();
    });

});
