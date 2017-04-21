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