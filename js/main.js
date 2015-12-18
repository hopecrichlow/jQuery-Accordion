import $ from 'jquery';

console.log('Hello, World');

$('.header1').on('click', function (event){
  console.log(this);
  $('#paragraph1').removeClass('close').addClass('open');
  $('#paragraph2').removeClass('open').addClass('close');
  $('#paragraph3').removeClass('open').addClass('close');
});

$('.header2').on('click', function (event){
  $('#paragraph2').removeClass('close').addClass('open');
  $('#paragraph3').removeClass('open').addClass('close');
  $('#paragraph1').removeClass('open').addClass('close');
});

$('.header3').on('click', function (event){
  $('#paragraph1').removeClass('open').addClass('close');
  $('#paragraph3').removeClass('close').addClass('open');
  $('#paragraph2').removeClass('open').addClass('close');
});

