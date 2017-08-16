---
layout: post
title: "Running into a Data dead end."
date: "2017-05-25"
tags:
  - data
category: blog
published: true

---

A Wise man once said to me that blogging is a about the journey, not the destination so I’m trying to document this journey such as it is. It starts with a realisation which provoked a question, which led to some action.

There’s a lot of talk in the Higher Education sector at the moment about finances, the effect of Brexit and a shrinking market for students, and as I write several Universities have announced job losses, citing the need to balance their budgets. With that as the background, I was curious about the state of my own Universities’ finances and realised that because it is a charity (as are mostUK Universities) its has to prepare and submit financial information as part of it’s [duties][duties].

This information can be found on the relevant page on the [Charity Commission site.][page]

### Widening it out

So that was the realisation, here comes the question. __What are other universities’ finances like?__

Pretty vague so far, so I thought that I might need to add some more dimensions to the question. How do various Universities finances compare. It’s easy to search the site and look at individual Universities, but there’s no obvious way to compare. Since comparing was on my mind, I took a closer look at the available information on the site, behind the various tab.

- Income
- Spending
- Own use assets
- Long term investments
- Defined benefit pension scheme asset or liability
- Other assets
- Total liabilities
- Number of Trustees
- Number of Employees
- Number of Volunteers
- Areas of Operation.

(Also handily available in CSV or PDF).

Are the bits of information it may be possible to compare. Ruling out ‘Areas of Operation’ since there’s no consistent way that a charity applies that. For example my University defines it as ‘throughout Wales’ yet  Cardiff University says ‘Cardiff’.  I initially thought that I could use the financial info and  come up with a list of Universities and their relative financials, but that seems a bit daunting for my skills at the moment. However, since job cuts seem to be sweeping the sector looking at some simple numbers might be an achievable goal for my nascent data skills. I thought I'd instead take a lot an the number of Employees in each Uni over the last 5 years.

### Some actions

Having decided what try and compare, the next step is to get the data. Handily the charity commission makes it relatively easy.
A link at the bottom of the page - Charity data is available for reuse under the Open Government Licence v2.0.

I went and got the [data extract][extract], but didn’t know what the . bcp file extension was and how to handle it. Thankfully, I then discovered the super helpful [Beginner's Guide to the Charity Commission data][guide]. After following the steps to get the data into CSV files I then it became clear to deal with such a big dataset I needed to get a database up and running.

### Magic of Docker

I've managed to get MySQl up and running on the various machines I've used in the past, but I'm not the most confident, and I didn't want to spend much time on what should be an incidental part of what I was trying to do. So, enter [Docker][docker]. Like some kind of magic it makes it super easy to install a running MySQL serve that I can then connect to with [SequelPro][pro], maybe deserving of a blog post in due course, though in truth it was one config file and then a single line.

### Copy and paste - the novices friend.

Armed with my CSV files and a Database to put them in, I needed to see what I could remember from that __MySQL for Dummies__ book I read years ago. With so many records in the database, I had to come up with a way to get just the records I wanted, and not just charities with 'University' in the name (there are lots).

Thankfully I could use the handy list of Universities CSV over at [Data.ac.uk][unilist] and then use that to narrow things down a bit. I've no doubt that an expert could be much more rigourous and accurate with their query, but this approximate method matches the skills I have, and you go to war with the army you have. In the end it was enough to discover a major problem with everything I'd done up to this point.

### When the fun stops, stop.

In my ignorance I'd assumed that since most Universities are charities they'd be regulated by the Charities Commission. I hadn't reckoned on something called 'exempt charity status' - explained in depth at [wonkhe][wonkhe] It seems that many Universities have this status, so aren't registered with the charity commission, meaning that getting the data I thought was easy suddenly wasn't. By this point I'd been enjoying the little bits of practice and learning new things, but it was starting to feel like a chore with no benefit beyond the practice, as I was doing the digital equivalent of messing about in the shed, it became clear that the sector stats bodies probably have all this data a click away if you know who and how to ask.

Reaching this dead end wasn't entirely worthless though. I've managed to dust off and improve my SEQUEL skills, learnt a ton about the complex organisational landscape of the HE sector, and developed a new found appreciation of just how tricky it must be to start pulling at a data thread. Even one as trivial as this required a bit of thinking and enough perseverance to satisfy my curiousity.


[docker]: https://www.docker.com/
[pro]: https://www.sequelpro.com/
[wonkhe]: http://wonkhe.com/blogs/charity-commission-rules-and-universities-charitable-status/
[unilist]: http://learning-provider.data.ac.uk/
[duties]:https://www.gov.uk/government/publications/the-essential-trustee-what-you-need-to-know-cc3/the-essential-trustee-what-you-need-to-know-what-you-need-to-do#s5
[page]: http://beta.charitycommission.gov.uk/charity-details?regid=1140312&subid=0
[extract]: http://data.charitycommission.gov.uk/default.aspx
[guide]: https://github.com/ncvo/charity-commission-extract/blob/master/beginners-guide.md
