$('document').ready(function (event) {
console.log('hello');

$('#c1').click(function(event) {
  event.preventDefault();
  $('#o1').addClass('overlay');
  $('#o1').children().removeClass('show');
});

$('#c2').click(function(event) {
  console.log('clicked');
  event.preventDefault();
  $('#o2').addClass('overlay');
  $('#o2').children().removeClass('show');
});

$('#c3').click(function(event) {
  console.log('clicked');
  event.preventDefault();
  $('#o3').addClass('overlay');
  $('#o3').children().removeClass('show');
});

$('#c4').click(function(event) {
  console.log('clicked');
  event.preventDefault();
  $('#o4').addClass('overlay');
  $('#o4').children().removeClass('show');
});

$('#close1').click(function(event) {
  event.preventDefault();
  $('#o1').removeClass('overlay').addClass('transin');
  setTimeout(function(){$('#o1').removeClass('transin')}, 1000);
  $('#o1').children().addClass('show');
});

$('#close2').click(function(event) {
  event.preventDefault();
  $('#o2').removeClass('overlay').addClass('transin');
  setTimeout(function(){$('#o2').removeClass('transin')}, 1000);
  $('#o2').children().addClass('show');
});

$('#close3').click(function(event) {
  event.preventDefault();
  $('#o3').removeClass('overlay').addClass('transin');
  setTimeout(function(){$('#o3').removeClass('transin')}, 1000);
  $('#o3').children().addClass('show');
});

$('#close4').click(function(event) {
  event.preventDefault();
  $('#o4').removeClass('overlay').addClass('transin');
  setTimeout(function(){$('#o4').removeClass('transin')}, 1000);
  $('#o4').children().addClass('show');
});


$('#o1').click(function(event) {
  
})
});
