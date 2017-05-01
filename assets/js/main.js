
$(document).ready(function () {
    
    $.ajaxSetup({
        cache:false
    });
    
    $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=", function(json){
      var htmlString = "";
      var linkString = "";
      //remove unnecessary formating from the json content
      var content = json[0].content.slice(3, -7);
      htmlString+= "<h3><i class=\"fa fa-quote-left\" aria-hidden=\"true\"></i>" + content + "<i class=\"fa fa-quote-right\" aria-hidden=\"true\"></i></h3><p class='author'>—" + json[0].title + "</p>";
      console.log(htmlString);
      $(".message").html(htmlString);
      linkString += "https://twitter.com/intent/tweet?text=" + content + " Author: " + json[0].title;
      $("#tweetBtn").attr("href", linkString);
    });

    $("#getMessage").click(function(){
         $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=", function(json){
      var htmlString = "";
      var linkString = "";
      //remove unnecessary formating from the json content
      var content = json[0].content.slice(3, -7);
      htmlString+= "<h3><i class=\"fa fa-quote-left\" aria-hidden=\"true\"></i>" + content + "<i class=\"fa fa-quote-right\" aria-hidden=\"true\"></i></h3><p class='author'>—" + json[0].title + "</p>";
      console.log(htmlString);
      $(".message").html(htmlString);
      linkString += "https://twitter.com/intent/tweet?text=" + content + " Author: " + json[0].title;
      $("#tweetBtn").attr("href", linkString);
    });   
        
        
        
    });
});

//htmlString += "<h3><i class=\"fa fa-quote-left\" aria-hidden=\"true\"></i>" + json[0]. + "<i class=\"fa fa-quote-right\" aria-hidden=\"true\"></i></h3>";