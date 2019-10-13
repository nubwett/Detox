package javaAPI_Testing;

// Credientials at /Users/frankhou/Downloads/myfirstproj.json

/*
 * Sentiment			Sample Values
 * Clearly Positive		Score: 0.8;	 Magnitude: 3.0
 * Clearly Negative		Score: -0.6; Magnitude: 4.0
 * Neutral				Score: 0.0;	 Magnitude: 0.0
 * Mixed				Score: 0.1;	 Magnitude: 4.0
 */


//Imports the Google Cloud client library
import com.google.cloud.language.v1.Document;
import com.google.cloud.language.v1.Document.Type;
import com.google.cloud.language.v1.LanguageServiceClient;
import com.google.cloud.language.v1.Sentiment;

public class QuickstartSample {
public static void main(String... args) throws Exception {
	// Instantiates a client
	try (LanguageServiceClient language = LanguageServiceClient.create()) {

		// The text to analyze
		String text = "[insert html stuff here]";
		Document doc = Document.newBuilder()
		.setContent(text).setType(Type.PLAIN_TEXT).build();

		// Detects the sentiment of the text
		Sentiment sentiment = language.analyzeSentiment(doc).getDocumentSentiment();

		System.out.printf("Text: %s%n", text);
		System.out.printf("Sentiment: %s, %s%n", sentiment.getScore(), sentiment.getMagnitude());
		}
	}
}