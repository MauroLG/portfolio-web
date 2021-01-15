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

$(document).ready(function () {
  $('.title').one('click', function (e) {
    $(e.target).addClass('highlight');
    let originalText = $(e.target).text();
    setTimeout(() => {
      $(e.target)
        .text('<!--' + originalText + '-->')
        .removeClass('highlight')
        .css({
          color: 'var(--gray-color)',
          opacity: '50%',
          fontSize: '4.5rem',
        });
    }, 500);
    switch (true) {
      case $(e.target).text().includes('about'):
        setTimeout(() => {
          for (let data of aboutData.reverse()) {
            const { idx, info } = data;
            $(e.target).after(`<p id="desc-${idx}" class="description"></p>`);
            $(`#desc-${idx}`).html(`<p>${info}</p>`);
          }
        }, 1000);
        break;
      case $(e.target).text().includes('projects'):
        setTimeout(() => {
          $(e.target).after(`<p id="proj-1" class="description"></p>`);
          $('#proj-1').text(
            '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>'
          );
          $(e.target).after(`<p id="proj-2" class="description"></p>`);
          $('#proj-2').text(
            '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>'
          );
          $(e.target).after(`<p id="proj-3" class="description"></p>`);
          $('#proj-3').text(
            '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>'
          );
          $(e.target).after(`<p id="proj-4" class="description"></p>`);
          $('#proj-4').text(
            '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>'
          );
        }, 1000);
        break;
      case $(e.target).text().includes('contact'):
        setTimeout(() => {
          $(e.target).after(`<p id="cont-1" class="description"></p>`);
          $('#cont-1').text(
            '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>'
          );
        }, 1000);
        break;
    }
  });
});

/* ===================================================== */
/* ===================================================== */

/* JS */

const aboutData = [
  {
    idx: 1,
    info:
      "&lt;p&gt;My name is <span class='underline'>Mauro</span> and I'm 30.",
  },
  {
    idx: 2,
    info: "I live in <span class='underline'>Buenos Aires</span>, Argentina.",
  },
  {
    idx: 3,
    info:
      "I love <span class='underline'>computer science</span> and astronomy.",
  },
  {
    idx: 4,
    info:
      "I want to be a full-time <span class='underline'>web-developer</span>.&lt;/p&gt;",
  },
];
