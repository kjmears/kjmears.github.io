---
layout: post
title: "Leaving my comfort zone"
date: "2018-01-07"
category: blog
published: true
tags:
  - thoughts
  - data

meta: "Article about working on JISC Data Analytics Project"
---
## How'd that happen?

I've recently participated in a [JISC funded project][labs] around developing data dashboards. Before I talk about my efforts I need to explain a little about the context. The two organisations supporting this activity are HESA

> the official agency for the collection, analysis and dissemination of quantitative information about higher education in the United Kingdom.

and JISC

> Jisc (formerly the Joint Information Systems Committee) is a United Kingdom not-for-profit company[2] whose role is to support post-16 and higher education, and research, by providing relevant and useful advice, digital resources and network and technology services, while researching and developing new technologies and ways of working.

The two organisations work closely together on lots of things, one of those being something called HEIDI PLus (The Education sector is infested with Acronyms) which aims to make the data HESA collects available to members to provide Business Intelligence to the sector. As part of the continuing initiative to develop the HEIDI Plus service, Community Dashboards have been developed. These are meant to use the knowledge and skills of experts in the sector to build the products the sector needs. The programme to develop candidates dashboards is what I volunteered for. I can't quite remember how I found out about the labs - It's likely it was mentioned on twitter by one of the very engaged people who post interesting data visualisations. 

Anyhow I sent in an application and to my surprise was selected.


## What did I learn

As you'd expect from a body serving the HE sector, there was a clear set of learning outcomes in the form of 'core compentencies' that I could expect to address with my partcipation. So in each of those compentencies I'll round up how I did.

### Agile Working

The way of working was described as Agile, but without any particular adherence to a particular framework. The team I was placed on had a Product Owner, and a Scrum Master, and we would work in a series of daily sprints to enable everyone to contribute whilst not taking them away from their respective posts. We used Basecamp and Trello for our projec management tools. Of all the competencies I felt this was one I was most experienced with, but even this had a few surprises. I've used basecamp a lot and am pretty comfortable with it - it's great for sharing files and then discussing them, but that didn't seem to happen much - Likely because people were restrciting their work on the sprint days (more on those later) and I guess wanted to get into the work rather than the meta tasks around the work. For the work on the sprint days we used Trello boards which were a bit new to me, and I wasn't as comfortable with them. Similarly to the Basecamp issue it felt that it wasn't really a core activity in the way that a team using a board every day to get the work done comes to rely on and invest in the maintenance of the board, the nature of the work and formulation of the team meant that it felt a bit like a chore to be done rather than a tool to facilitate it. The Scrum manager did their best to get updates and tasks organised in the most helpful way, but it felt like fighting against the tide of the way the team and sprints were setup.

In a more permanent team those tools would be crucial to maintain a useful structure and focus - with the limited time we had it felt like those things fell by the wayside in favour of the work getting done. The scrum master and product owner then had more work to coordinate things, but it ended up being pretty agile becuase the work got done.

As part of the Agile workflow we worked on developing some interesting user stories around data, as well as developing some that had come out of previous teams. Once we'd narrowed them down it was time for the next step. In hindsight I think the user stories were an area that we could have narrowed down a little, but it was difficult to know that whilst the team was forming and we were getting to know the process.


### Transforming Data

One of particular core tasks from the team was to identify what data we wanted from HESA so that we could put in a Data Order, and then be supplied with the data to work with. So we had to identify what data we understood that HESA could provide, what other data sources we might want to use and do quite a lot of work trawling the HESA site. This was fascinating for me. HESA collects data on so many activities across Institions and the sector that it has a rich seam to be mined and needs lots of domain experts who understand all the acronyms that Universities love, how the data is collected and it's limitations. There were quite a few University Business Analysts and Planners on the team, so it was a gentle introduction for me. 

Making decisions about useful data and what to ask for was instructional. During the days we spent thrashing out what we needed it illustrated how important a step this is - getting the data requires a thorough understanding of it to make it suitable for interrogating.

Also in this area was something that I learnt by watching rather than doing. We had a demo of a tool called Alteryx Designer - which used a workflow metaphor to clean up the data (amongst a tone of other things) and clerverly, keep all the steps that were done - crucial if you want to be open about your sources and what you did with them. 


### Visualising Data

Starting the project, this was the thing I was most looking forward to. I've been taking my own small steps with PowerBI and Tableau, but was looking forward to learning from people more experienced than with some interesting sector based data. Tableau is the platform chosen by HESA, and subsequently lots of have gonw with that for their own internal dashboards. I'd done some tutorials and randomly dragged data around in Tableau - and it's surprising how easliy you can get close to a decent chart just by doing that - but I wanted to move beyond that and level up. As time progressed the team subdivided into smaller units and I was tasked with working with a relatively simple but wide dataset - The Qualifications obtained by students at UK Learning Providers (UK learning providers sounds a bit clunky, but as I'm learning in the data world clarity trumps clunky every time) - for the years 2006/07, 2014/15 and 2015/16. The user story was to enable investigation of the phenomenon known as Grade Inflation. 

A quick [search][search] on Grade Inflation will turn up lots of articles about the subject, variously saying it's a disaster that will destroy the sector, nothing to worry about and all points in between ([WonkHE][wonkhe] is usually a well referenced voice of reason). The modest aim of my dashboard was to present the numbers in a way that would show any particular variations and have the ability to compare with the sector and other institutions. It would also be possible to compare per subject - handy if you're in a Uni and you're wondering how colleagues from other areas are doing.

### Digital Collaboration

### Understanding Policy and the Digital Landscape

[jiscref: https://www.jisc.ac.uk/guides/data-visualisation]

[heidiplus]: https://www.hesa.ac.uk/services/heidi-plus
[labs]: https://business-intelligence.ac.uk/analytics-labs/
[search]: https://www.google.co.uk/search?q=grade+inflation
[wonkhe]: http://wonkhe.com/