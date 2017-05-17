---
layout: post
title: "Sometimes the data is boring"
date: "2017-04-06 21:52:22 +0100"
tags: data
category: blog
published: true
meta: "Diving into very basic data as an exercise in spreadsheets"
---

For reasons unknown to even me, I was looking at the UCISA website whilst watching an interesting stream from the event held recently. Whilst browsing around the site I began to be curious about the organisation and started thinking about the structure of it; all the special interest groups and subsequent committees that Higher Education organisations seem to love. My curiosity coalesced around the question of how representative of the sector the organisation is.

I ended up learning all about the association and it's memberships

In my current enthusiasm for charts and spreadsheets I thought I crack my knuckles and see what I could glean.

The first step was to see if I could get list of all the UCISA committee members. Pretty straightforwardly available at the various [group pages][groups], despite being unnecessarily in an html table, it's a simple copy and paste to get the member names, followed by some more manual copying pasting cells around to get some semblance of order. The handy 'split text into columns' command in Google Sheets further tidies things up. I now have a worksheet with the representatives, their names, job titles, email addresses and organisation as a starting point.

UCISA use their own system for referring to HE members on their [members directory][members], so their order ignores 'University' in the naming. - A common but aggravating approach when listing Universities -  I prefer to use more systematic [learning provider][provider] data, which as well as being more comprehensive also enables a stricter alphabetical listing.

Having got a list and organised it into a decent worksheet, I then needed to get the various groupings counted. UCISA has four types of membership - easy enough to put in 4 columns in the spreadsheet and use the `=counta(A2:A)` function, which returns a count of the number of values in a dataset (in this example starting in cell A2 and counting the whole column).

Now, since this is a hobby and learning exercise, the next thing I tackled what how to create a simple chart. Using the counts of members it was pretty simple to select the right cells to create the donut chart below. Ground breaking it isn't, and the limitations of the design options in Google Sheets, mean it pretty simple to do a simple and clean chart with some restrained choices, thankfully a far cry from some of the monstrosities I've seen produced in Excel. In this case, even though I wanted more control and styling options, less is more.

## UCISA Membership

<iframe width="808" height="500" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/165CTzi8ARQq_Bo4G95B_9k0wpS8BFSk76AZhAVYwCKA/pubchart?oid=729768395&amp;format=interactive"></iframe>
The memberships are for organisations, with nominated people serving as representatives, worth remembering when talking about the committees, and there are __lots__ of committees - 10 committees with 113 individuals, representing 66 different organisations.

To make things a little (not a lot) more interesting I added a couple of columns of my own, adding country and region information to each organisation. It raised the tricky question about what to do with overseas or non-geographic entities like UCISA itself, or the more grey area of the Open University. I fudged it by using 'other'. This was a good opportunity to use a little data validation in the spreadsheet. It was as simple as creating a worksheet with the answers to choose from, and then using that data validation option on a column. A good trick here was to fill in most the cells with the most used value - in the country column it was 'England', then validate the whiole column, meaning that I only had to manually go and select the right values for the rest.

Adding the region data for each was a little more laborious on account of the list being longer, and having to search google to check [which regions][region] place were in.

## Full members by Country

<iframe width="808" height="500" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/165CTzi8ARQq_Bo4G95B_9k0wpS8BFSk76AZhAVYwCKA/pubchart?oid=1001944419&amp;format=interactive"></iframe>

So far, pretty simple. As you'd expect lots of English members. Duh.

## Committee members by Country

<iframe width="808" height="500" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/165CTzi8ARQq_Bo4G95B_9k0wpS8BFSk76AZhAVYwCKA/pubchart?oid=994137241&amp;format=interactive"></iframe>

Nothing too unusual here, though perhaps Scottish members are a little overrepresented, making up 14% of the committee members on a 10% proportion of the full members. Perhaps we can take a closer look by using regions to group the members.

The most notable bit of my learning here was the need to count the distinct members represented from my list of committee representatives. I used probably the most complex function that my newbie skills could safely copy from [stack overflow][stack].

    =ArrayFormula(QUERY(filtered_committee!H2:H&{"",""},"select Col1, count(Col2) where Col1 != '' group by Col1 label count(Col2) 'Count'",-1))

I have to confess that I *mostly* understand the query, but the important bit for my purposes here is that it works to count the occurrences in my 'filtered_committee' worksheet.

That's all for now on countries.

## Full Members by region

<iframe width="808" height="500" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/165CTzi8ARQq_Bo4G95B_9k0wpS8BFSk76AZhAVYwCKA/pubchart?oid=432893527&amp;format=interactive"></iframe>
Looking at regional members, unsurprisingly, London universities dominate the membership, but the rest of the regions are fairly evenly represented. As you can see, I'm getting handy with using a worksheet to count, then select the relevant cells to create a chart. It's then super easy to publish and embed the chart. Simple, but for any more serious charting I'd need to invest some time learning more robust methods [Google Charts][charts] seems the obious place to start.

## Committee members by Region

<iframe width="808" height="500" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/165CTzi8ARQq_Bo4G95B_9k0wpS8BFSk76AZhAVYwCKA/pubchart?oid=690751502&amp;format=interactive"></iframe>
Looking at the members by region is where we start to see some divergence. The Yorkshire and Humber region for example has 7% of the overall members, but 12% of the committee members. Similarly Scotland, The South East and the North West put on a few percentage points each, coming mainly from the London members whose 28% of members drops to 22% on the committees.

## Committee representatives by region

<iframe width="808" height="500" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/165CTzi8ARQq_Bo4G95B_9k0wpS8BFSk76AZhAVYwCKA/pubchart?oid=1525706141&amp;format=interactive"></iframe>
The general breakdown of memberships by country and region is one thing, but the representatives that organisations send can also be displayed in charts. 64 organisations are represented by 113 people, and if we look at the numbers of representatives that are sent organised by regions we can see some more variance.

The 8 members from Yorkshire and the Humber region have 23 people on the committees, making 20% of the the total representatives. That is the biggest anomaly, but the West Midlands sends 10 people from 4 institutions, and the Scots are making themselves well heard sending 17 people from 8 institutions.

## Conclusion

That all seemed like a lot of work for a very minor 'discovery', but I learnt a lot along the way. I found it a really thorough workout of my spreadsheet skills. I'm starting to feel comfortable with some data validations, dipped my toe into what looks like a tricky but powerful feature of lookups across worksheets and came up with best charts I could with Google Sheets.

Alongside the nitty-gritty of learning a particular bit of software, there was also the nice feeling of honing some thinking skills. As soon I as started messing about and posing questions of the data, I was also setting myself challenges of wanting an outcome and then having to learn how to get there. I have a better understanding now of just how much work it must be to deal with bigger and messier datasets - just the amount of thinking, and decision making that goes into cleaning data before you can even get started on presenting it.

I also found that with such a simple bit of data my initial idea to take things into Illustrator and do a knock off [Gerd Arntz][gerd] style chart was a bad idea. Sticking to the off the shelf charts, even if they aren't inspiring is a more honest choice.  


[gerd]: https://www.vis4.net/blog/posts/choose-your-icons-wisely/
[charts]: https://developers.google.com/chart/
[stack]: http://stackoverflow.com/questions/12125847/counting-number-of-occurrences-in-column
[region]: https://www.google.co.uk/search?q=which+region+is+lincoln+in
[groups]: https://www.ucisa.ac.uk/groups
[members]: https://www.ucisa.ac.uk/membersdirectory
[provider]: http://learning-provider.data.ac.uk/
