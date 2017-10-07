$(document).ready(function() {
  var submit = $('.middle.container .form .inputs input[type="submit"]');
  var name = $('.middle.container .form .inputs input[name="name"]');
  var email = $('.middle.container .form .inputs input[name="email"]');

  var mess = $('.popup');


  function removeGap(str) {


    var newstr = '';
    for (var j = 0; j < str.length; j++) {
      if (str[j] != ' ') {
        newstr += str[j];
      }
    }

    str = newstr;

    return str;
  }



  $(submit).click(function(evn) {
    var valid=true;
    evn.preventDefault();
    if ($(name).val() != '') {
      var str = $(name).val();
      var flag = false;
      var newstr = '';
      while (flag == false) {
        if (str[0] == ' ') {
          for (var i = 1; i < str.length; i++) {
            newstr += str[i];
          }
          str = newstr;
        } else {
          flag = true;
        }
      }
      $(name).val(str);
    } else {
      console.log('Clean Name');
      valid=false;
    }





    if ($(email).val() != '') {
      $(email).val(removeGap($(email).val()));
      var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

      if (reg.test($(email).val())) {

      } else {
        valid=false;
        $(mess).addClass('warning');
        $(mess).children('span').html('Ошибка! Проверьте введенные данные');
        $(mess).animate({
          'opacity': '1'
        }, 500);
        setTimeout(function() {
          $(mess).animate({
            'opacity': '0'
          }, 1000);
          $(mess).removeClass('warning');
        }, 2000);
      }

    } else {
      valid=false;
      console.log('Clean email');
    }



    console.log(valid);
    if (valid == true) {
      $(name).val('');
      $(email).val('');
      $(mess).children('span').html('Ваша заявка успешно отправлена!');
      $(mess).animate({
        'opacity': '1'
      }, 500);
      setTimeout(function() {
        $(mess).animate({
          'opacity': '0'
        }, 1000);

      }, 2000);
    }
  });









});
