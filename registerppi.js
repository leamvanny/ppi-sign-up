$(document).ready(function() {
    $(".long-course").click(function() {
        $(".head-title").fadeOut("fast");
        $(".long-registration").fadeIn("slow");
        $(".short-registration").fadeOut("slow");
        $(".feedback").hide();
    });
    $(".btn-cancel").click(function() {
        $(".head-title").fadeIn("slow");
        $(".long-registration").fadeOut('fast');
        $(".feedback").hide();
    });

    $(".short-course").click(function() {
        $(".head-title").fadeOut("fast");
        $(".long-registration").fadeOut("fast");
        $(".short-registration").fadeIn("slow");
        $(".feedback").hide();
    });
    $(".btn-cancel").click(function() {
        $(".head-title").fadeIn("slow");
        $(".short-registration").fadeOut('fast');
        $(".feedback").hide();
    });
    
});