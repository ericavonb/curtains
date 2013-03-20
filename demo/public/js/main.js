(function() {

  console.log("hello from a require'd coffee file");

}).call(this);

(function() {
  var js;

  js = ["http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js", "curtains"];

  require(js, function() {
    return $(function() {
      return console.log('jquery loaded, dom ready');
    });
  });

}).call(this);
