Hey guys, just want to say that your hackathon project was very nice.

I can really see how much you've grown. My feedback is scattered throughout your code in little comments this time,
but that's because I think you're at a level where I don't have to point out every little thing.

There are a few big takeaways to improve:

-   Clean code is super super important. I saw some duplicates here and there.
-   I'd say keep in mind to make your code easier to deploy to production. I see in some of your templates for example, you  
    have "http://localhost:5000/blog" hardcoded. Since your front end and back end are all coming from the same origin, it would
    be better if you used relative paths like "/blog". Removing unnecessary hard codings like these make your project easier to
    move to development.
-   Better to use a "public" folder for your static assets instead of server side rendering them through ejs. Stuff like CSS and JS should
    be served from this folder, since those can get cached, and the overall load time of your page in the future would be quicker.

That's basically it! Once again, really proud of you. Amazing job guys. Keep going from strength to strength.
