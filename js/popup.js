$(document).ready(function(){
  $('.create_project-popup').hide();
});

$('#create_project').on('click', function(){
  $(".create_project-popup").fadeToggle();
});
