$(document).ready(function () {

    $.getJSON("https://crossorigin.me/http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en", function (json) {
        var htmlString = "",
            linkString = "";
        htmlString += "<h3><i class=\"fa fa-quote-left\" aria-hidden=\"true\"></i>" + json.quoteText + "<i class=\"fa fa-quote-right\" aria-hidden=\"true\"></i></h3>";
        if (json.quoteAuthor !== "") {
            htmlString += "<p class=\"author\">—" + json.quoteAuthor + "</p>";
        }
            else {
                htmlString += "<p class=\"author\">—unknown</p>";

            }
        linkString += "https://twitter.com/intent/tweet?text=" + json.quoteText;
        if (json.quoteAuthor !== "") {
            linkString += "Author: " + json.quoteAuthor;
        }
            else {
                linkString += "Author: unknown";
            }

        //                
        $(".message").html(htmlString);
        $("#tweetBtn").attr("href", linkString);
    });

    
    $("#getMessage").on("click", function () {
        $.getJSON("https://crossorigin.me/http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en", function (json) {
            var htmlString = "",
                linkString = "";
            htmlString += "<h3><i class=\"fa fa-quote-left\" aria-hidden=\"true\"></i>" + json.quoteText + "<i class=\"fa fa-quote-right\" aria-hidden=\"true\"></i></h3>";
            if (json.quoteAuthor !== "") {
                htmlString += "<p class=\"author\">—" + json.quoteAuthor + "</p>";
            }
                else {
                    htmlString += "<p class=\"author\">—unknown</p>";

                }
            linkString += "https://twitter.com/intent/tweet?text=" + json.quoteText;
            if (json.quoteAuthor !== "") {
                linkString += "Author: " + json.quoteAuthor;
            }
                else {
                    linkString += "Author: unknown";
                }
            
            //                
            $(".message").html(htmlString);
            $("#tweetBtn").attr("href", linkString);
        });

    });

});

/*var dataContainer = document.getElementById("data-container");
var tweetContainer = document.getElementById("tweetBtn");
var getMessage = document.getElementById("getMessage");


var ourRequest = new XMLHttpRequest();
ourRequest.open("GET", "https://crossorigin.me/http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en");
ourRequest.onload = function () {
    var ourData = JSON.parse(ourRequest.responseText);
    console.log(ourData);
    renderHTML(ourData);
};
ourRequest.send();    

getMessage.addEventListener("click", function () {
    var ourRequest = new XMLHttpRequest();
    ourRequest.open("GET", "https://crossorigin.me/http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en");
    ourRequest.onload = function () {
        var ourData = JSON.parse(ourRequest.responseText);
        console.log(ourData);
        renderHTML(ourData);
    };
    ourRequest.send();        
});

function renderHTML(data) {
 document.getElementById("data-container").innerHTML = "";
 var htmlString = "";
 var tweetLink = "";    
 htmlString += "<h3><i class=\"fa fa-quote-left\" aria-hidden=\"true\"></i> " + data.quoteText + "<i class=\"fa fa-quote-right\" aria-hidden=\"true\"></i></h3>";
 if (data.quoteAuthor != ""){
    htmlString+= "<p class=\"author\">—" + data.quoteAuthor + "</p>";
 }
 else{
    htmlString+= "<p class=\"author\">—unknown</p>";

 }
 tweetLink += "https://twitter.com/intent/tweet?text=" + data.quoteText + "Author: " + data.quoteAuthor;
 dataContainer.insertAdjacentHTML("beforeend", htmlString);
 tweetContainer.href = tweetLink;
}*/