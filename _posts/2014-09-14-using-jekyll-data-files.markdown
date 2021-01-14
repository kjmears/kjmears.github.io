---
layout: post
published: true
title: "Using Jekyll data files"
date: 2014-09-14
category: blog
tags:
  - jekyll
  - data

---

On this site I created a [page][speakers] where I list all the talks, videos, presentations I've done sketchotes in order by the people in them.

It took me a while to work out how to do it using Jekyll data files so I thought I'd write it up in case any other novices like me might find it helpful.The basic principle is that I have two data files `events.yml` and `speakers.yml` and combine them to display the information I want.

Before I talk about those, let's first look at the format of a typical Sketchnote post, which will be the page that the speaker information will link to.For example, [This post][kwe] has the following YAML front matter.

```
 ---
 layout: post
 published: true
 title: Port80 2014 Kevin Evans Sketchnotes
 date: 2014-05-16
 image: /port80/2014/port80-2014-05-16-kevin-evans.gif
 image-thumb: port80/2014/port80-2014-05-16-kevin-evans-thumb.gif
 cc: BY-NC-SA
 category: sketchnotes
 speaker: kwevans
 tags:
 - port80-2014
 - live

 ---

Kevin Evans : These ARE the Droids you’re looking for.
```

All pretty straightforward.

What this all means in that I have a post with a thumbnail and the actual sketchnote associated with it. I tend not to write too much when I'm doing sketchnotes, but I have the option.

So how would I get a list of all the speakers and the talks they've done? I thought it'd be pretty laborious to go back through a ton of posts and add speaker info to every post, and if I wanted to add more speaker info in future, like email address, twitter etc, then I'd have to track them down and change them. With my typing that's a recipe for disaster. Instead, it seems to make more sense to keep that information in one file where it's easier to maintain. I remembered that I'd used data.yml files when first trying out Jekyll, and thought that might be the way to go. I set about creating a `speakers.yml` file with following format.

```
 - id: kwe
   name: Kevin Evans
   twitter: kwe
```

I used an id figuring that I'd probably need a unique way to refer to speakers. As it turns out using twitter handles for IDs works pretty well, rather than coming with a scheme of my own. I've stuck with pretty basic speaker info, but the cool thing is that I can easily add more info to a speaker in this file, then use it when I want. For example, it's becoming more useful to add people's linkedin info to the list.

This file is pretty easy to manage, but YAML files are fussy about the whitespace, so make sure you set up your text editor to use spaces instead of tabs.(you're not an animal)

So i now have a list of the speakers after a long trawl through my sketchnotes and the various event sites.

Next I needed a list of all the events that I've sketchnoted. Luckily they tend to come in batches when I do a load over a day or two at a conference. An event looks like this in the `events.yml` page.

```

- title : Port80 2014
  date: 2014-05-16
  sketchnotes: /sketchnotes/port80-2014/
  event: port80events.co.uk/event/port80-2014/
  image: port80/2014/port80-2014-05-16-denise-jacobs-thumb.gif
  lanyrd: /2014/port80events/
  type: live
  speaker:
    - denisejacobs
    - hereinthehive
    - nathan_ford
    - supertastycake
    - roy
    - kimberleytew
    - kwe
    - jukesie
    - Jack_Franklin
    - andydavies
    - benjystanton
    - missrachilli
    - mattpointblank
    - paulrobertlloyd
    - USA2DAY
    - sophiedennis

```

As you can see all pretty straightforward.

-  Title
-  Date
-  The url of the sketchnote post
-  Event info (usually a link back to the event site)
-  speaker ID
-  Image - what image will is associated with this event - I usually use the post image, but this can be custom.
-  lanyrd - often include a link to the event lanyrd page as it often has extra useful information
-  type
-  speaker

Now that I have all this information in data files how to I get them displayed on the site? That is done with the file `speakers/index.html`
First the simple Jekyll front matter setting the layout and title. Since I've decided to use [Data Tables][data] to provide sorting on the information in a table, I thought it sensible to create a specific layout to include the necessary javascript.

```
 ---
 layout: speakers
 title: Speakers
 ---
```

At this point I wanted to check what was actually coming into the page via `site.data.events` so by adding `{% raw %}{{ talk }}{% endraw %}` to the page like so,

{% highlight liquid %}


{% raw %}
    {% for talk in site.data.events %}
      {{ talk }}
    {% endfor %}
{% endraw %}

{% endhighlight %}

it displays the whole file in one big block which i've tidied for display and selected two events here so you can see what's returned. Notice that the event with multiple speakers has them in an array (inside the square blocks).

{% highlight liquid %}
  {% raw %}
      {
        "title"=>"WDC 2016",
        "date"=>#,
        "type"=>"live",
        "speaker"=>["jukesie", "rumyra", "csswizardry", "spyou", "de", "madebysheppard", "Phishtitz"],
        "sketchnotes"=>"/sketchnotes/wdc2016",
        "image"=>"/wdc2016/wdc2016-lightning-talks-thumb.jpg"
      }

      {
        "title"=>"Creative Mornings Cardiff",
        "date"=>#,
        "type"=>"live",
        "speaker"=>"JamFactory",
        "sketchnotes"=>"/sketchnotes/creative-mornings-gavin-strange.html",
        "image"=>"creative-morning-gavin-strange-thumb.jpg"
      }

  {% endraw %}
{% endhighlight %}


So once we're happy that we know what's in the `events.yml`, lets do the same with the `speakers.yml`

{% highlight liquid %}

{% raw %}
    {% for bio in site.data.speakers %}
      {{ bio }}
    {% endfor %}
{% endraw %}

{% endhighlight %}

Produces a big list of the speakers to the page where each record looks something like this.

{% highlight liquid %}

{% raw %}

 { "id"=>"kwe",
   "name"=>"Kevin Evans",
   "twitter"=>"kwe"
 }
{% endraw %}

{% endhighlight %}

We now know that our data files are producing the right info, so the next step is display it in a useful way. I thought it might be helpful to give links not only to the sketchnotes I've done, but also to the speaker twitter and websites, since I've already collected it. With such a long list and multiple bits of of information, I thought a decent table with sorting ability was the way to go.

{% highlight liquid %}
  {% raw %}
  <div class="row">
    <table id="speakertable" class="row-border" cellspacing="0" width="100%">
      <thead>
          <tr>
            <th>Name <em>(and link to twitter)</em></th>
            <th>Sketchnotes</th>
            <th>Type</th>
            <th>Year</th>
          </tr>
      </thead>

      <tbody>
        {% for speaker in site.data.speakers %}
          {% for event in site.data.events %}
            {% if event.speaker != empty %}
              {% for multiple in event.speaker %}
                {% if speaker.id == multiple %}
                <tr>
                  <td>
                      {{ speaker.name }}
                      {% if speaker.twitter %}
                         (<a href="https://twitter.com/@{{ speaker.twitter }}">{{ speaker.twitter }}</a>)
                      {% endif %}
                    </ul>
                  </td>
                  <td><a href="..{{ event.sketchnotes }}">{{ event.title }}</a></td>
                  <td>{{ event.type }}</td>
                  <td>{{ event.date | date: "%Y" }}</td>
                </tr>
                {% endif %}
              {% endfor %}
            {% endif %}
          {% endfor %}
        {% endfor %}
      </tbody>
    </table>
  </div>

  {% endraw %}
{% endhighlight %}


I created an object called `speaker` which loops through the key:value pairs in `speakers.yml` and gets all the speakers and their info. I then cycle through the `events.yml` and get all the events. I do a check on the info returned from the `events.yml`, accessing the file, but this time checking if the id I've got matches the speaker value. If if does it's then displayed on the page.

I do a little check for the presence of `twitter` info before displaying it. If it's not present then I don't need all the link info around them. I haven't done any fancy sorting of the data (I don't know how) I've just made sure my speakers.yml is in alphabetical order.







[kwe]: http://www.mearso.co.uk/sketchnotes/port80-2014-kevin-evans.html
[data]: https://datatables.net/
[speakers]: /speakers
