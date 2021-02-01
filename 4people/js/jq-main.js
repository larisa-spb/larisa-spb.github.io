$('.form-list').click(function(){
    $(this).toggleClass('open');
    $('.form-options',this).toggleClass('open');
  });
  
  $('.form-options__list').click(function(){
    var selection = $(this).text();
    var dataValue = $(this).attr('data-value');
    $('.form-select span').text(selection);
    $('.form-list').attr('data-selected-value',dataValue);
  });