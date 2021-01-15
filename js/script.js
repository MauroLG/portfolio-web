/* SET ACTIVE MENU AND SMOOTH SCROLL WITH JQUERY */

$(document).ready(function () {
  $('a[href^="#"]').click(function (e) {
    e.preventDefault();

    let target = $(this).attr('href');
    $('html, body')
      .stop()
      .animate(
        {
          scrollTop: $(target).offset().top,
        },
        600,
        function () {
          location.hash = target;
        }
      );
    return false;
  });
});

$(window)
  .scroll(function () {
    let scrollDistance = $(window).scrollTop() + 50;

    $('.page-section').each(function (i) {
      if ($(this).position().top <= scrollDistance) {
        $('.anchor a.active').removeClass('active');
        $('.anchor a').eq(i).addClass('active');
      }
    });
  })
  .scroll();

/* ===================================================== */
/* ===================================================== */

/* JS */
