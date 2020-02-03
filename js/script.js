$(document).ready(() => {

  // Настройка slick slider
  $('.directions-blocks').slick({
    arrows: false,
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
    {
    breakpoint: 1024,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
      infinite: true,
      dots: true
      }
    },
    {
    breakpoint: 767,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
      }
    }
    ]
  });

  // Выпадающие меню и категории
  let menuBtn = $('.top-nav__btn');
  let menu = $('.top-nav__menu');
  menuBtn.on('click', (event) => {
    event.preventDefault();
    menu.slideToggle(400);
  });

  $('.left-sidebar__btn').on('click', (event) => {
    event.preventDefault();
    $('.left-sidebar__menu').slideToggle(400);
  });

  let elem = document.querySelector('.calc-range');
  let init = new Powerange(elem, { min: 100000, 
                                  max: 3000000, 
                                  start: 100000, 
                                  hideRange: true,
                                  step: 100000 });
  let radio = $('input[name="programms"]'),
      perc = 0.2,
      month = 6,
      money = $('.calc-range').val(),
      result;
  
  $('.calc-range').on('change', (event) => {
    $('.calc-summ__invest-num span').text($('.calc-range').val().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '))
  });

  radio.on('change', () => {
    console.log(radio.attr('id'));
  });

});