$(document).ready(function() {
    // Will select all first li items, need to be more specific
    //$("li:first-child").css('background-color', 'steelblue');
    $("#important-events li:first-child").css('background-color', 'steelblue');
    $("#unimportant-events").hide();
    $("#important-events").find("span").css("color", "yellow").css("font-size", "3em");
});
