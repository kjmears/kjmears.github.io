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

The first step was to see if I could get list of all the UCISA members. Pretty straightforwardly available at [Members Directory][members], despite being unnecessarily in an html table, it's a simple copy and paste to get the member names. UCISA use their own system for referring to HE members, so their order ignores 'University' in the naming - I prefer to use more systematic [learning provider][provider] data.

Having got a list and organised it into a decent worksheet, I then needed to get the various grouping counted. UCISA has four types of membership

## UCISA Membership

<iframe width="808" height="500" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/165CTzi8ARQq_Bo4G95B_9k0wpS8BFSk76AZhAVYwCKA/pubchart?oid=729768395&amp;format=interactive"></iframe>
The memberships are for organisations, with nominated people serving as representatives, worth remembering when talking about the committees, and there are lots of committees - 10 committees with 113 individuals, representing 66 different organisations.

## Full members by Country

<iframe width="808" height="500" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/165CTzi8ARQq_Bo4G95B_9k0wpS8BFSk76AZhAVYwCKA/pubchart?oid=1001944419&amp;format=interactive"></iframe>
## Committee members by Country

<iframe width="808" height="500" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/165CTzi8ARQq_Bo4G95B_9k0wpS8BFSk76AZhAVYwCKA/pubchart?oid=994137241&amp;format=interactive"></iframe>
Nothing too unusual here, though perhaps Scottish members are a little overrepresented, making up 14% of the committee members on a 10% proportion of the full members. Perhaps we can take a closer look by using regions to group the members.

## Full Members by region

<iframe width="808" height="500" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/165CTzi8ARQq_Bo4G95B_9k0wpS8BFSk76AZhAVYwCKA/pubchart?oid=432893527&amp;format=interactive"></iframe>
Unsurprisingly, London universities dominate the membership, but the rest of the regions are fairly evenly represented.

## Committee members by Region

<iframe width="808" height="500" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/165CTzi8ARQq_Bo4G95B_9k0wpS8BFSk76AZhAVYwCKA/pubchart?oid=690751502&amp;format=interactive"></iframe>
Looking at the members by region is where we start to see some divergence. The Yorkshire and Humber region for example has 7% of the overall members, but 12% of the committee members. Similarly Scotland, The South East and the North West put on a few percentage points each, coming mainly from the London members whose 28% of members drops to 22% on the committees.

## Committee representatives by region

<iframe width="808" height="500" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/165CTzi8ARQq_Bo4G95B_9k0wpS8BFSk76AZhAVYwCKA/pubchart?oid=1525706141&amp;format=interactive"></iframe>
The general breakdown of memberships by country and region is one thing, but the representatives that organisations send can also be displayed in charts. 64 organisations are represented by 113 people, and if we look at the numbers of representatives that are sent organised by regions we can see some more variance.

The 8 members from Yorkshire and the Humber region have 23 people on the committees, making 20% of the the total representatives. That is the biggest anomaly, but the West Midlands sends 10 people from 4 institutions, and the Scots are making themselves well heard sending 17 people from 8 institutions.

## Conclusion

That all seemed like a lot of work for a very minor 'discovery', but I learnt a lot along the way. I found it a really thorough workout of my spreadsheet skills. I'm starting to feel comfortable with some data validations, dipped my toe into what looks like a tricky but powerful feature of lookups across worksheets and came up with best charts I could with Google Sheets. One lesson there is that for any real control over chart display, I'll need to learn something more in-depth.


[members]: https://www.ucisa.ac.uk/membersdirectory
[provider]: http://learning-provider.data.ac.uk/
