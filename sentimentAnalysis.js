var Sentiment = require("sentiment");
var sentiment = new Sentiment();

function analyzeWord(word) {
  console.log(sentiment.analyze(word));
}
