const navbarbtn = () => {
    document.getElementById("name").classList.toggle("show-navbar")
    document.getElementById("rotates").classList.toggle("rotate42")
    document.getElementById("transparent").classList.toggle("bg-transparent")
    document.getElementById("rotates2").classList.toggle("rotate43")
    document.body.classList.toggle("overflow-hidden")
}


$('.my-slider').slick({
    slidesToShow: 2.98,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    prevArrow: ".prev",
    nextArrow: ".next",
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                autoplay: true,
                sutoplaySpeed: 300,
            }
        },
    ]
});

$('.logo-slider').slick({
    dots: false,
    arrows: false,
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 6,
    autoplay: true,
    autoplaySpeed: 400,
});
