
$(document).ready(function() {

   // Using http://cors.io/ proxy
   $.ajax({
      type: 'GET',
      url: 'http://cors.io/?u=http://quotes.stormconsultancy.co.uk/random.json',
      error: function () {
         console.log("error");
      },
      dataType: 'json',
      success: function (data) {
         console.log(data)
      }
   })

   //JSONP
   $.ajax({
      url: "http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&jsonp=callback&lang=en",
      jsonp: "callback",
      dataType: "jsonp",
      format: "json",
   })
})

// callback needs to be in global scope, otherwise not accessible
function callback (json) {
   console.log(json)
}


