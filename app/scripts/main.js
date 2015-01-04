$('#myModal').on('hidden.bs.modal', function () {
  $(this).removeData('modal');
});

$('.male').on('click', function () {
  $('.social').toggleClass('toggle-show');
});

$(document).ready(function(){
  $('body').scrollspy({target: "#myScrollspy"})
});
