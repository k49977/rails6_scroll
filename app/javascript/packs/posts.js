$(document).on('turbolinks:load',function(){
  $('#infiniteScrollingContainer').on('scroll', function(){
  if($('#infiniteScrollingContainer').scrollTop() + $('#infiniteScrollingContainer').height() == $('#infiniteScrollingContainer')[0].scrollHeight - 16) { 
    var page = $("#infiniteScrollingContainer").attr('data-page');
    var url = "/infiniteScrolling?page=" + page
      setTimeout(function() {
        $.ajax({
          url: url
        })
      }, 500);
    }
  })
});