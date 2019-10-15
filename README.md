# Inspiration
In this generation, almost everyone uses the internet. One of the major perks of using the internet is the anonymity it provides. However, on the other hand, it allows many people to create a "toxic" environment with little to no fear of repercussions. Thus, to create a better internet environment, we were inspired to find a method to create a very safe space while browsing the internet.

# What it does
Detox is a Google Chrome Extension that enables the user to "detoxify" any searches on Google Chrome. Using Google's API for sentiment analysis, the extension is able to determine the words that are considered "toxic" censor the words. 

# How we built it
The framework was built using Vue.js. The Google Chrome Extension is created and all the words are processed into a page, where Google's sentinment analysis is then used to analyze the words.

# Challenges we ran into
One of the large problems we had discovered was many of the sentinent analysis programs lacked the ability to distinguish between toxic and non-toxic words. After some assessment, we figured out Google's sentinment analysis provided the best method for analyzing toxic words and phrases.

# Accomplishments that we're proud of
We're really proud that the Google Chrome Extension works! It was able to censor words every time the user moved to a new page or refreshed. Furthermore, we were able to process and use the API successfully.

# What we learned
Google Extensions have a very specific format, requiring files such as manifest and popup. Following the general format is required in order for Google to be able to unpack our extension and actually use it. Furthermore, we learned more the accessibility and usefulness API's have, where we could take and use sentiment analysis without actually having to create our own.

# What's next for Detox
The main focus for Detox was to prevent cyberbullying, but we want to do more than just that. We would like to offer more options than just censoring "toxic phrases". The extension could help with limiting inappropriate text and for programs such as parental controls.
Overall, however much we expand Detox and it's setting, our main goal is to create a safe and healthy environment while browsing the web.

# Who, Where, When?
This project took place at University of Washington's Dubhacks 2019 from November 12-13. Our team members are Kent Zeng, Allen Su, Evan Hao, and Frank Hou.
