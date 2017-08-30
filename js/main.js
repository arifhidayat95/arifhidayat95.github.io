$(".content-item").hide();
$("#home").show();

$(".item").on("click", function (f) {
    $(".item").removeClass("active");
    $(f.currentTarget).addClass("active");

    var target = $(f.currentTarget).data('target');
    $(".content-item").hide("slow");
    $("#"+target).show("slow");
});


$(".content-icon").hover(
    function (f) {
        $(f.currentTarget).addClass("fa-spin");
        },
    function (f) {
        $(f.currentTarget).removeClass("fa-spin");
    });