
$(document).ready(function() {
   // Initialize web page
   programmingQuoteAPIcall()
   $('.quote-type').html("Design quote")
   $('.header').attr('class', "header programmer")

   // Event handlers
   $('.quote-type').click(function () {
      var currentType = $('#quote-generator').attr('class')
      if (currentType === "programming") {
         $('#quote-generator').attr('class', "design")
         $('.quote-type').html("Programming quote")
            $('.header').attr('class', "header designer")
      } else if (currentType === 'design') {
         $('#quote-generator').attr('class', "programming")
         $('.quote-type').html("Design quote")
         $('.header').attr('class', "header programmer")

      }
      refresh()
   })
   $('.refresh').click(refresh)
   $('.easter-egg').click(function () {
      console.log("Easter Egg")
      $('.signatures').css("background", "url('./style/phoenix.jpg') #ffffff no-repeat 50% 30%")
   })
})

// Call to programming quote API
function programmingQuoteAPIcall () {
   console.log("this is a programming quote")
   var random = Math.floor(Math.random() * 2)
   $('.title').html("Programming Quote")
   if (random) {
      $.ajax({
         type: 'GET',
         url: 'http://cors.io/?u=http://quotes.stormconsultancy.co.uk/random.json',
         dataType: 'json',
         success: function (data) {
            $('.quote div:first-child em').text('"' + data.quote + '"').html()
            $('.quote div:nth-child(2) strong').text(data.author).html()
            $('.twitter-button').attr("src", "https://platform.twitter.com/widgets/tweet_button.html?text=" + encodeURI('"' + data.quote + '"' + " By " + data.author))
         },
         error: function () {
            $('.quote div:first-child').html('Error! Error!')
            $('.quote div:nth-child(2)').html('')
         },
         cache: false
      })
   } else {
// Call to programmer proverbs - returning a string
      $.ajax({
         type: "GET",
         url: "http://proverbs-app.antjan.us/random",
         dataType: "json",
         success: function (data) {
            $('.quote div:first-child em').text('"' + data + '"').html()
            $('.quote div:nth-child(2) strong').text('Unknown').html()
            $('.twitter-button').attr("src", "https://platform.twitter.com/widgets/tweet_button.html?text=" + encodeURI(data))
         },
         error: function() {
            $('.quote div:first-child').html('Error! Error!')
            $('.quote div:nth-child(2)').html('')
         },
         cache: false
      })
   }
}

// Call to Design quote API
function designQuoteAPIcall() {
   console.log("This is a design quote")
   $('.title').html("Design Quote")
   $.ajax({
      type: "GET",
      url: "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1",
      dataType: "json",
      success: function (data) {
         $('.quote div:first-child em').html('"' + data[0].content.replace(/<[\/]*p>/gi, '') + '"')
         $('.quote div:nth-child(2) strong').html(data[0].title)
         $('.twitter-button').attr("src", "https://platform.twitter.com/widgets/tweet_button.html?text=" + encodeURI(data[0].content.replace(/<[\/]*p>/gi, '') + ' By ' + data[0].title))
      },
      error: function() {
         $('.quote div:first-child').html('Error! Error!')
         $('.quote div:nth-child(2)').html('')
      },
      cache: false
   })
}

function refresh () {
   var myclass = $('#quote-generator').attr('class')
   if (myclass === "programming") {
      programmingQuoteAPIcall()
   } else if (myclass === "design") {
      designQuoteAPIcall()
   }
}

/* This is an example of JSONP which we won't use
// callback needs to be in global scope, otherwise not accessible
function callback (json) {
   console.log("ForisimaticAPIcall result", json)
}
// call to forismatic API
function forismaticAPIcall () {
   $.ajax({
      type: "GET",
      url: "http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&jsonp=callback&lang=en",
      jsonp: "callback",
      dataType: "jsonp",
      format: "json",
   })
} */
