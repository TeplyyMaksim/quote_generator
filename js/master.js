$(document).ready(function() {
  var showed = false;
  $('#twitter').hide();
  $('#give-quote').on("click", function(){
    $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?", function (response) {
      var quote = response.quoteText;
      var author = response.quoteAuthor;
      if (author == "") {
        author = "Unknown author";
      }
      $('#quoteblock').html(quote);
      $('#authorblock').html(author);
      if (!showed) {
        $('#give-quote').text("Show another!");
        $('#twitter').attr('href', 'https://twitter.com/home?status=' + quote + '%0A%0A' + author);
        $('#twitter').show();
      }
    });
  });
});
