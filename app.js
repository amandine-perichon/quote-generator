
$(document).ready(function() {
   console.log("I'm ready")
   $.ajax({
      type: 'GET',
      url: 'http://api.forismatic.com/api/1.0/',
      error: function () {
         console.log("error");
      },
      dataType: 'json',
      success: function (data) {
         console.log(data)
      }
   })
})


