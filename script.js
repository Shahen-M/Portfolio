document.getElementById('menu').addEventListener('click', function() {
  $('nav').slideToggle();
})

function borderAnimation(timer) {
  let border = document.getElementById('border_line');

  $('.border_line').animate({width: '400px'}, 800);
  $('.border_line').show();
}

function nameAnimation(timer) {
  let name = document.getElementById('h1');

  $('h1').animate({bottom: '-5px'});
  $('h1').show();
}

function welcomeAnimation(timer) {
  let text = document.getElementById('h2');

  $('h2').animate({bottom: '-5px'});
  $('h2').show();
}

setInterval(function() {
  setTimeout(borderAnimation, 600);
  setTimeout(nameAnimation, 1600);
  setTimeout(welcomeAnimation, 2000);
});

$(window).on('scroll', function() {
  if($(window).scrollTop() > 250) {
    $('header').addClass('on_scroll_header');
    $('header li').addClass('on_scroll_a');
  } else {
    $('header').removeClass();
    $('header li').removeClass();
  }
})

$(window).on('scroll', function() {
  if($(window).scrollTop() > 270) {
    animationAboutMe();
  }

  if ($(window).scrollTop() > 570) {
    animationSkillContainer();
  }

  if ($(window).scrollTop() > 1300) {
    animationTopProject();
  }

  if ($(window).scrollTop() > 2000) {
    animationMiddleProject();
  }

  if ($(window).scrollTop() > 2400) {
    animationContact();
  }

})

function animationAboutMe() {
  $('#my_picture, #about_header, .about_me_container p').animate({'opacity': 1}, 1000);
  $('#my_picture, #about_header, .about_me_container p').addClass('slideIn');
}

function animationSkillContainer() {
  $('.content').animate({'opacity': 1}, 1000);
  $('.content').addClass('slideIn');
}

function animationTopProject() {
  $('.top_project, #project_header').animate({'opacity': 1}, 1000);
  $('.top_project, #project_header').addClass('slideIn');
}

function animationMiddleProject() {
  $('.middle_project').animate({'opacity': 1}, 1000);
  $('.middle_project').addClass('slideIn');
}

function animationContact() {
  $('.contact, #contact_header').animate({'opacity': 1}, 1000);
  $('.contact, #contact_header').addClass('slideIn');
}
