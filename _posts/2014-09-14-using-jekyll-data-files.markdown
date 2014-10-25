---
layout: post
published: false
title: "Using Jekyll data files"
date: "2014-09-14"
category: weeknotes

---

On this site I created a page where I list all the talks, videos, presentations I've done sketchotes of order by the people in them.

It took me a while to work out how to do it using Jekyll data files so I thought I'd write it up in case any other novices like me might find it helpful.

The sketchnotes I do are using (but not always) in the format of a post with the following YAML front matter.

    ---

    layout: post
    published: true
    title: Port80 2014 Kevin Evans Sketchnotes
    date: 2014-05-16
    image: /port80/2014/port80-2014-05-16-kevin-evans.gif
    image-thumb: port80/2014/port80-2014-05-16-kevin-evans-thumb.gif
    categories: sketchnotes
    code: port80-07
    speaker: kwevans
    tags:
    - port80-2014
    - live


    ---

    Kevin Evans : These ARE the Droids you’re looking for.

All pretty straighforward Jekyll post information the only unusual code (more on that later). 

What this all means in that I have a post with a thumbnail and the actual sketchnote associated with it. I tend not to write too much in the post, but I have the option.

So how would I get a list of all the speakers and the talks they've done? I thought it'd be pretty laborious to go back through a ton of posts and add speaker info to every post, and if I wanted to add more speaker info in future, like email address, twitter etc, then I'd have to track them down and change them. With my typing that's a recipe for disaster.

I thought about using categories and tags to organise things, but wasn't to sure about locking myself into a strcture that I'd then be dependent on. I thought it might be overkill, and if I was to go that way then I'd be into a full blogging mindset. 

I remembered that I'd used data.yml files when first trying out Jekyll, and thought it might help. I set about creating a `speakers.yml` file with following format.

    - id: kwe
      name: Kevin Evans
      twitter: kwe
      url: daveaddey.com

I used an id figuring that I'd probably need a uniquie way to refer to speakers. I've stuck with pretty basic info, but the cool thing is that I can easily add more info to a speaker in this file, without having to add to all, and can then use them when I want.

This file is pretty easy to manage, but YAML files are fussy about the whitespace, so make sure you set up your text editor to use spaces instead of tabs.

So i now have a list of the speakers after a long trawl through my sketcnotes and the various event sites.

Next I needed a list of all the events that I've sketchnoted. Lucklily they tend to come in batches when I do a load over a day or two at a conference. An event looks like this in the `events.yml` page.

    - title: These are not the droids you're looking for
      sketchnotes: /sketchnotes/port80-2014-kevin-evans.html
      speaker: kwe 
      event: port80events.co.uk/event/port80-2014/
      code: port80-07
      image: port80/2014/port80-2014-05-16-kevin-evans-thumb.gif


I've used the term 'event' , what this means for me is a occasion where I've sketchnoted. Maybe my naming could have been better.

As you can see all pretty straightforward. 
* Title
* Link to sketchnote post
* Image - what image will is associated with this event - I ususally use the post image, but this can be custom.
* speaker ID
* Link to the event info - for some events I also use the `info:` field where there is specific info for that talk.
* code - enables me to link the event to the post.

Now that I have all this information in data files how to I get them displayed on the site?

That is done with the file `speakers/index.html`

First the simple Jekyll front matter setting the layout and title.

      ---
      layout: page
      title: Speakers

      ---


Next we get into the mechanics of what's going on. In the following code I create an object called `bio` which loops through the key:value pairs in `speakers.yml` and displays the name. I do a little check for the presence of the `url` and `twitter` info before displaying it. I haven't done any fancyinhg sorting of the data (I don't know how) I've just made sure my speakers.yml is in alphabetical order.

        {% for bio in site.data.speakers %}
        <div class="speaker">

        <h2 class="bio-name">{{ bio.name }}</h2>

        <div class="meta">
        {% if bio.twitter %}
        <p class="twitter"><a href="https://twitter.com/{{ bio.twitter }}">@{{ bio.twitter }}</a></p>
        {% endif %}
        {% if bio.url %}
        <p class="website"><a href="{{ bio.url }}">Website</a></p>
        {% endif %}

        </div>


next i do a similar thing for the `events.yml`, accessing the file, but this time checking if the id I've got matches the speaker value. If if does it's then displayed on the page.

    {% for talk in site.data.events %}
      {% if bio.id == talk.speaker %}
      <h3>{{ talk.title }}</h3>
      <ul>
        <li><a href="{{ talk.url}}">{{ talk.url }}</a></li>
        <li><a href="{{ talk.sketchnotes }}">Sketchnotes</a></li>
        <li><a href="{{ talk.reference }}">{{ talk.reference }}</a></li>
      </ul>
      {% endif %}
    {% endfor %}
    
A problem I found with the method above is that some of the sketchnotes I've done are combined in one big sketchnote for the whole conference. Rather than going back and splitting each event up, I thought it'd make more sense to make it possible to have multiple speakers at an event. To do this meant a little reading about YAML. The key:value approach of the yml works fine on a one to one, but it's possible to easily have more than one bit of info in the speaker field by like so

    speaker:
      - name one
      - name two
      - name three
      
At this point I wanted to check what was actually coming into the page via `site.data.events` so by adding `{{ talk }}` to the page like so,

    {% for talk in site.data.events %}
      {{ talk }}
    {% endfor %}

it displays the whole file in one big block like this

    {"title"=>"Event title", "sketchnotes"=>"sketchnote address", "speaker"=>"speakername", "event"=>"eventname", "image"=>"associated image"}

We can compare this with an event with multiple speakers. The speaker IDs inside the square brackets are no longer in key:value pairs but are in array.

    {"title"=>"Event title", "sketchnotes"=>"sketchnote address", "speaker"=>["nameone", "nametwo", "namethree"]}

This meant I needed to check if there were multiple speakers, with the following code. We can see that in the second line I'm checking if the array exist by putting in the square brackets, and if the array is there I'm then passing the speaker IDs to be checked against the bio.id the same as before.

      {% for talk in site.data.events %} 

      {% if talk.speaker[] %}

      {% for multiple in talk.speaker[] %}

      {% if bio.id == multiple %}

        <div class="talk-wrap">
  
        <a href="..{{ talk.sketchnotes }}"><img src="/images/{{ talk.image }}"></a>
        <div class="talk-info">
          <h3>{{ talk.title }}</h3>
          <ul>
            <li><a href="http://{{ talk.event }}">Event Info</a></li>
            {% if talk.info %}
            <li><a href="http://{{ talk.info }}">Talk Info</a></li>
            {% endif %}
            {% if talk.slides %}
            <li><a href="http://{{ talk.slides}}">Slides</a></li>
            {% endif %}
            {% if talk.video %}
            <li><a href="http://{{ talk.video}}">Video</a></li>
            {% endif %}
            <li><a href="..{{ talk.sketchnotes }}">Sketchnotes</a></li>
          </ul>
        </div>
      </div>

      {% endif %}

      {% endfor %}

      {% endif %}

      {% endfor %}

      </div>

      {% endfor %}


      </div>



