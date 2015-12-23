$('.linkone a').on('click', function(event){
  event.preventDefault();
  $('.linkone.link_active').removeClass('link_active');
  $(this).closest('.linkone').addClass('link_active');
});
$('.catalog_pages a').on('click', function(event){
  event.preventDefault();
  $('.page.pageactive').removeClass('pageactive');
  $(this).closest('.page').addClass('pageactive');
});