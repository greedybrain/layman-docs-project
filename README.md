# Layman Docs Project

Hello to all! I would like to talk a little (or a lot) about my Flatiron Rails/JS project. My project is called Layman Docs. The name is a pun on the term "Layman terms". This application is an attempt to make reading or parsing through different types of languages and/or frameworks documentation easier.

I came up with this idea because sometimes I would find that in certain documentation there is either too much information to process or too little information explained in a complex way. I believe that we all fall victim to information overload as developers, and felt that Layman Docs could potentially alleviate the headache. In a nutshell, Layman Docs allows users addressed as Laymen, to share bits and pieces of documentation for other Laymen to parse through and elaborate on in their favor. Dare I say, it has sort of a "Stack Overflow'ish" feel, (please don't attack me on that), it's where some of the inspiration came from.

How does it work?

First and foremost, a Layman should create an account if they don't have one already (obviously).

Signup or Login

Once you've done that, you are golden. You are ready to create your first post. To create a post you go to the webpage containing a piece of documentation that you are having a tough time understanding and then copy the URL. As an example, we'll use Pythons Django Framework which I got from here.

After you have that URL copied to your clipboard, proceed back to Layman Docs and click on create post ...

Create a post button

A create post form will slide out from the left side of the screen (I was just trying to be fancy)...

Post form

The first is the name of the language and/or the framework, then the URL. Once you paste in the URL link that you copied earlier 2 things happen. 1) the app will scrape every last character on that page and merge it all into one big "View Page Source" type of string, returning that string for later use. 2) the title that you usually see in your browser tabs is automatically inputted into the next field that reads "Document/Section Title". Remember that big string that was returned once you pasted in the URL? Well, this is where the last field comes into play. Whatever piece of documentation you copied from that webpage earlier and then pasted in this field will be checked against that big string, checking whether or not that section comes from that documentation.

There were some validity checks put in place to make sure of this. You'd see visual error animations when there is invalid input in either the URL or the Section Paste field. If there's an invalid URL the URL will just fall out of the input field. If there is an invalid section pasted, that field will shake and then return a red text displaying the error message.


Now upon a successful post, you would click on My Posts and you'll see the post in your My Posts box.


After posting it's just playing the waiting game for another Layman to add his/her elaboration on it. And that's it!

There is still a ton of work for me to do, but this is just a preview of the direction I'm going in. I plan on making the UI look way more appealing and adding more advanced features like a feed of all posts by users that updates in realtime using Sockets IO. Right now it isn't published to the web but I'm working on it and will update this blog with it when it's ready.

Thanks for reading!

Update-1: Here's a link to the video walkthrough of this application
https://www.loom.com/share/066a103ac9954eac846791c44187bc9f
