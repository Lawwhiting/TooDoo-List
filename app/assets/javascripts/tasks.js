// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

  $(document).on('turbolinks:load', ()=>{
    $('#taskname').focus();

  $('.modal-footer .btn-primary').click(function() {
    // console.log($('.modal-body form'));
    $('.modal-body form').submit();
  });
});
