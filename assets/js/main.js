"use strict";

$(document).ready(function () {
    
    //clear cache so new quotes can be loaded
    $.ajaxSetup({
        cache:false
    });
    
    getQuote();

    $("#getMessage").click(function(){
      getQuote();      
    });

  function getQuote(){
   $.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=", function(json){
      let htmlString = "";
      let linkString = "";
      //remove unnecessary formating from the json content
      let content = json[0].content.slice(3, -7);
      htmlString+= "<h3><i class=\"fa fa-quote-left\" aria-hidden=\"true\"></i>" + content + "<i class=\"fa fa-quote-right\" aria-hidden=\"true\"></i></h3><p class='author'>—" + json[0].title + "</p>";
      $(".message").html(htmlString);
      linkString += "https://twitter.com/intent/tweet?text=" + content + " Author: " + json[0].title;
      $("#tweetBtn").attr("href", linkString);
    });    
  }
});