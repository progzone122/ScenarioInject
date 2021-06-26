//Window action
function window_update(){
  window_height = $(window).height() - 64;
  $('.left-menu').css('height', window_height + 'px');
  $('.left-menu_projects-block').css('height', window_height - 164 + 'px');
  if(window_height >= '1200'){
    $('.left-menu').css('width', '38%');
  }else {
    $('.left-menu').css('width', '25%');
  }
}
$(window).resize(function(){
  window_update();
});
window_update();
//Menu action
menu = 0;
$('.top-block_button').on('click', function(){
  $('.left-menu').fadeToggle();
});
