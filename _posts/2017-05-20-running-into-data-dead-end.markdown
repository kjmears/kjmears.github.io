---
layout: post
title: "Running into a Data dead end."
date: "2017-05-20"
tags: data
category: blog
published: false

---

https://github.com/ncvo/charity-commission-extract

Getting Charity commission data on universities

A Wise man once said to me that blogging is a about the journey, not the destination so I’m trying to document this journey such as it is.

It starts with a realisation which provoked a question, which begat some action.

There’s a lot of talk in the Higher Education sector at the moment about finances, the effect of Brexit and a shrinking market for students, and as I write several Universities have announced job losses, citing the need to balance their budgets. With that as the background, I was curious about the state of my own Universities’ finances and realised that because it is a charity (as are mostUK Universities) its has to prepare and submit financial information as part of it’s [duties][duties].

This information can be found on the relevant [page][page] on the Charity Commission site.

## Widening it out

So that was the realisation, here comes the question. What are other universities’ finances like?

Pretty vague so far, so I thought that I might need to add some more dimensions to the question. How do various Universities finances compare. It’s easy to search the site and look at individual Universities, but there’s no obvious way to compare. Since comparing was on my mind, I took a closer look at the available information on the site, behind the various tabs. (Include screenshot?)

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

Are the bits of information it may be possible to compare. Ruling out ‘Areas of Operation’ since there’s no consistent way that a charity applies that. For example my University defines it as ‘throughout Wales’ yet  Cardiff University says ‘Cardiff’.  I initially thought that I could use the financial info and  come up with a list of Universities and their relative financials, but that seems a bit daunting for my skills at the moment. However, since job cuts seem to be sweeping the sector looking at some simple numbers might be an achievable goal for my nascent data skills.

## Some actions

Having decided what try and compare, the next step is to get the data. Handily the charity commission makes it relatively easy.
A link at the bottom of the page - Charity data is available for reuse under the Open Government Licence v2.0.

I went and got the [data extract][extract], but didn’t know what the . bcp file extension was and how to handle it. Thankfully, I then discovered the super helpful [Beginner's Guide to the Charity Commission data][guide]. After following the steps to get the data into CSV files I then needed to get some database up and running.

## Magic of Docker

http://wonkhe.com/blogs/what-is-a-private-university/

http://wonkhe.com/blogs/charity-commission-rules-and-universities-charitable-status/

[duties]: https://www.gov.uk/government/publications/the-essential-trustee-what-you-need-to-know-cc3/the-essential-trustee-what-you-need-to-know-what-you-need-to-do#s5
[page]: http://beta.charitycommission.gov.uk/charity-details?regid=1140312&subid=0
[extract]: http://data.charitycommission.gov.uk/default.aspx
[guide]: https://github.com/ncvo/charity-commission-extract/blob/master/beginners-guide.md

Ok, so change of plan on this blog post. Turns out the charitable status of Universities is complicated. There is a thing called exempt charity status which means amongst other things that they are not regulated by the charity commission, and instead have their own regulatory framework. What that means for my ‘data exploration’ is that I can’t get the data to do any sort of sector wide comparison.

I did learn a lot about MySQL though.

I learnt how to get it up and running in a docker container.
I learnt how to do SQL Joins - so that I could use learning provider data to pull out some Universities that do fall under the control of the Charity Commission. Though my method is pretty unreliable.
