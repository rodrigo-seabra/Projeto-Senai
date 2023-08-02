$(".carousel").slick({
  dots: true,
  infinite: false,
  speed: 200,
  slidesToShow: 5.2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1441,
      settings: {
        slidesToShow: 4.1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 2.6,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
