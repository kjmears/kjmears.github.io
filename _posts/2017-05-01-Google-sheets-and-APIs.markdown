---
layout: post
title: "Fun with Google Sheets and APIs"
date: "2017-01-05"
tags:
- data
- film
category: blog
---

I watched a lot of films this year.

I know this because I logged them.

I think this renewed interest in films comes after some serious box-set bingeing, and a realisation that it amounts to a big chunk of time on one thing. It seems less of a commitment to watch an individual film, and have a story arc resolved in a few hours, and with a whole history of cinema to choose from there’s plenty to tackle. For example, I discovered that I’ve seen a lot more of the [Guardian’s top 10 horror movies][horror] than [horrorlist][horrorlist]I’d thought, but the completist in me now wants to see all of that arbitrary list. I've found it remarkably interesting to browse through the letterboxd site and satisfy my curiousity about which actors have been in which films or see how many of a particular director's oeuvre I've watched - and there are many more things to satisfy a dedicated procrastinator.

So, having a new found enthusiasm for films and for logging them, the next obvious step for this social media tart was to put them on my website. I thought it might be of interest to write up my hacky and involved process for logging, publishing, data-cleaning and visualising since I found it useful to learn and practice a load of new things.

## Logging films

Now,  I’m a big fan of the simplicity of[Jekyll][jekyll] and it has a clever feature where you can feed it a data file and that will generate a lovely static page based on the info. I already did that with my [list of books I’ve read][readlist] - which takes a yaml file that I manually edit at the rare occaion of me finishing a book.

Since watching films happens way more frequently I needed to introduce some automation somewhere in the process. Process is rather a grand term for my cobbled together system, but here it is.

I used the clever [do][do] Android app (there's also an iOS version) and created a simple button that sends what I type to a google spreadsheet with a time and date. You need an [ifttt.com][if] account to connect the services together, but it's pretty straightforward. All I need to do then is to remember to type in the title when the film is done. I managed to complete that onerous task all year - made easier by me watching most of the films at home.

## Publishing with Jekyll

Now that I have a spreadsheet with that info in, my thoughts turned to how to feed that info to my static site with Jekyll. I've mentioned the data files feature of Jekyll, and you can use YAML, JSON or CSV formatted files. In this case the simplest option was to have a few fields and then publish a csv file that I can then commit to git, which then triggers a site rebuild. The result is at [watched][watched]

Using the Do app to record the title gives me just the date and time I watched the film (though it did need some spreadsheet fiddling to work around the date formats that [ifttt][if] can use) **find link**

Up until recently I’ve been editing my google spreadsheet and just including a link to IMDB by some google spreadsheet trickery. Using the Concatenate function I can pass the title from one cell into a query url. In the cell 'E1'

    =CONCATENATE("http://www.imdb.com/find?ref_=nv_sr_fn&q=",A1)

Which uses the title in cell 'A1' and appends that to an IMDB search query - Which I can then use in a ‘Hyperlink’ function

    =HYPERLINK(E1,"IMDB search")

All that does is give me the mildly convenient option of searching IMDB by clicking the link in the cell. I can then choose the film and get the IMDB ID from the URL, which I then added to my CSV file, thus creating a more info link on my listing page.

### Improved method

That was all a bit laborious for not much reward, so I though there must be a better way. There is - it’s called [The Movie DB][mdb] and they have an API.

Now, APIs are something that I want to use, but most of the world seems to use Javascript to interact with them. I know that my Javascript skills are very basic, and after having tried a few tutorials that did some of what I wanted I took a step back and had a rethink. I wasn’t bothered about realtime updates of the information being published to my site, I just wanted a way to get the information one time and then use that in my spreadsheet. So the answer came along in a super Google Script called [ImportJSON][import], that is simple enough for me to use. Using my key I can search for a title within my spreadsheet, have the fields i’m interested come back and then fill the relevant cells with them. It’s possible to have a ton of API calls in the sheet, but with over 130 films in the sheet I ran into a limit - probably because the sheet will run them all at the same time. In any case, it seems daft to have too much dynamic calling and placing info in various worksheets and cells when I only need it once.

The main worksheet in my spreadsheet now has the following

- Title
- Date Watched
- Time Watched
- Notes (my sentence or 2 about the film as a reminder to me)
- The Move DB ID - which I then use to get the following -
 - poster_id - if I fancy using that at a later date.
 - release_date
 - runtime
 - tagline (which can throw up some gems)

So now I have a spreadsheet with a reasonable amount of useful info that I can work with.

This extra information now means that after learning a bit more about date formats and some big level ups in my spreadsheet skills I was able to discover such gems as I watch films an average of 15 Years, 7 Months, 27 Days after their release date. Always good to have your finger on the pulse!


## Onto the next step - deciding how to visualise the ‘data’


Designing Data charts is something I've always been interested in, but never quite known where to start, but messing with my own data motivated me to have a go. Earlier on in the year I'd had a go at the [Learn to code for Data Analysis][futurelearn] course, which was great at illustrating how much I didn’t know. I managed to make a reasonable way through the course, but the statistical rigour needed was challenging and broader 'big data' datasets didn’t really capture my imagination. In fact, ‘Basic familiarity with a spreadsheet application will be an advantage.’ was on the intro of the page - something I definitely didn't have at the time. Working with more personal data has made it easier to stay interested and motivated.


What I learned about charts and what I produced coming soon.




[futurelearn]: https://www.futurelearn.com/courses/learn-to-code
[Letterboxd]: https://letterboxd.com/
[horror]: https://www.theguardian.com/film/filmblog/2013/oct/14/top-10-horror-movies
[horrorlist]: https://www.theguardian.com/film/filmblog/2013/oct/14/top-10-horror-movies
[jekyll]: https://jekyllrb.com/
[readlist]: http://www.mearso.co.uk/reading/
[do]: https://ifttt.com/products/do/button
[watched]: http://www.mearso.co.uk/watched/
[if]: https://ifttt.com/discover
[mdb]: https://www.themoviedb.org/
[import]: http://blog.fastfedora.com/projects/import-json#ImportJSON
