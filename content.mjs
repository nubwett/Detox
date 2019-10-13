/*const wrap = document.body;
console.log(wrap);

for each dom in the doc body
    send dom info to api
    api returns something
    changes inner html to censor
*/
var xhr = new XMLHttpRequest();
var url =
  "https://detox.cognitiveservices.azure.com/text/analytics/v2.1/sentiment";
xhr.open("POST", url, false);

xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader(
  "Ocp-Apim-Subscription-Key",
  "f4e6a7f4c5df438bbc037cf19f65ddc8"
);

xhr.onreadystatechange = function() {
  // Call a function when the state changes.
  if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
    console.log(xhr.responseText);
  }
};
var data = {
  documents: [
    {
      language: "en",
      id: "1",
      text: "Hello world. This is some input text that I love."
    },
    {
      language: "en",
      id: "2",
      text: "It's incredibly sunny outside! I'm so happy."
    }
  ]
};
xhr.send(data);

var elements = document.getElementsByTagName("*");
for (var i = 0; i < elements.length; i++) {
  var element = elements[i];

  for (var j = 0; j < element.childNodes.length; j++) {
    var node = element.childNodes[j];

    if (node.nodeType === 3) {
      var text = node.nodeValue;
      var replacedText = text.replace(/cheese/gi, "chick");
      if (replacedText !== text) {
        element.replaceChild(document.createTextNode(replacedText), node);
      }
    }
  }
}
