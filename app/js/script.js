$(document).ready(function() {
  /*validating form*/
  /* SLider*/
  var date = new Date();
  var day='';
  if (day<10){
    day='0'+date.getDate().toString();
  }
  else{

      day=date.getDate().toString();
  }
  var month='';
  if (month<10){
    month='0'+date.getMonth().toString();
  }
  else
  {
      month=date.getMonth().toString();
  }
  $('#data').html(day+'.'+month+'.'+date.getFullYear());
  var slider = $('.slider');
  var slides = $('.slider .slides .slide');
  var leftControl = $('.controller>.left');
  var rightControl = $('.controller>.right');
  var ActiveSlide = 0;
  var Allow = true;
  console.log('slides=' + slides.length)

  $(leftControl).click(function() {
    console.log('left Buttom');
    nextSlide('left');
  });

  $(rightControl).click(function() {
    console.log('right Buttom');
    nextSlide('right');
  });

  function nextSlide(direct = 'left') {




    if (Allow == true) {
      Allow = false;


      $(slides).each(function(indx, el) {
        $(this).removeClass('active');
      });

      var ns = 0;

      if (direct == 'left') {
        ns = ActiveSlide - 1;

        if (ns < 0) {
          ns = slides.length - 1;
        }
        console.log('next=' + ns);
        var width = $(slides).eq(ns).width();
        $(slides).eq(ns).css('left', width * (-1));

        $(slides).eq(ns).animate({
          'left': '0px'
        }, 500);
        $(slides).eq(ActiveSlide).css('left', '0px');
        $(slides).eq(ActiveSlide).animate({
          'left': width
        }, 500);

        $(slides).eq(ns).addClass('active');



      } else {
        ns = ActiveSlide + 1;

        if (ns > slides.length - 1) {
          ns = 0;
        }
        console.log('next=' + ns);
        var width = $(slides).eq(ns).width();
        $(slides).eq(ns).css('left', width);

        $(slides).eq(ns).animate({
          'left': '0px'
        }, 500);
        $(slides).eq(ActiveSlide).css('left', '0px');
        $(slides).eq(ActiveSlide).animate({
          'left': width * (-1)
        }, 500);

        $(slides).eq(ns).addClass('active');



      }
      ActiveSlide = ns;
      setTimeout(function() {
        Allow = true;
      }, 700);

      /*
      $(slides).eq(ActiveSlide).addClass('active');
        $(slides).eq(ActiveSlide).animate({'opacity':1},500);*/
    }

  }
});
