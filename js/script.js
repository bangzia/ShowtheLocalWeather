// listen for changes to document.readyState - onreadystatechange is
// fired when readyState value is changed
document.onreadystatechange = function () {

    // check the value - if it's 'interactive' then the DOM has loaded
    if (document.readyState === "interactive") {
        // add code here
         requestLocation("https://ip-api.com/json/");
    }
}
/*var newQuote = document.getElementById("newQuote");
var tweetQuote = document.getElementById("tweetQuote");
newQuote.addEventListener("click", function() {
  request("https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous&count=1")
}, false);
tweetQuote.addEventListener("click", tweet, false);*/

function requestLocation(url) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if(xhr.readyState === 4 && xhr.status === 200) {
      var json = JSON.parse(xhr.response)
      document.getElementById("city").innerHTML = json.city;
    }
  }
  xhr.open("POST", url, true);
  // xhr.setRequestHeader("X-Mashape-Key", "1tqLeS2Vq4mshrS0okC6Age43ouGp1Uib8mjsnxss2SUIzBAzq");
  xhr.send();
}

/*function tweet() {
  var quote = document.getElementById("quote").innerText;
  var author = document.getElementById("author").innerText;
  var tweetUrl = 'https://twitter.com/intent/tweet?text=' + '"' + encodeURIComponent(quote) + '" ' + encodeURIComponent(author) + '.';
  var strWindowFeatures = "scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420";
  window.open(tweetUrl, "tweet du quote", strWindowFeatures);
}
*/