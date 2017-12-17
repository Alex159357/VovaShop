
$('.childViewCarusel').owlCarousel({
    animateOut: 'slideOutDown',
    animateIn: 'flipInX',
    smartSpeed:550,
    items:1,
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        400:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});

$(".button-collapse").sideNav();

$('.carousel').carousel();


$(".owl-prev").html(`<i class="material-icons">&#xE314;</i>`).addClass("waves-effect waves-yellow");
$(".owl-next").html(`<i class="material-icons">&#xE315;</i>`).addClass("waves-effect waves-yellow");

$(".regTrigger").on("click", function () {
    $(".logView").slideUp(300);
    $(".regView").slideToggle(500);
});
$(".logTrigger").on("click", function () {
    $(".regView").slideUp(300);
    $(".logView").slideToggle(500);
});

$(window).bind('scroll', function () {
    if ($(window).scrollTop() > 302) {
        $('.urgent').addClass('fixed');
        $('.urgent').removeClass("container");
    } else {
        $('.urgent').addClass('container');
        $('.urgent').removeClass('fixed');
    }
});





