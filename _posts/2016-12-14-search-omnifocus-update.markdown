---
comment: false
date: 2016-12-14T11:27:41
title: "Update on Search Omnifocus"
permalink: /blog/2016/12/14/:slug
excerpt_separator: <!--more-->
tags:
- productivity
---

I made some updates to the [Search Omnifocus](https://github.com/rhydlewis/search-omnifocus) Alfred workflow over the last month or so thanks to some user suggestions. 
<!--more-->



# Search Omnifocus update

I made some updates to the [Search Omnifocus](https://github.com/rhydlewis/search-omnifocus) Alfred workflow over the last month or so thanks to some user suggestions. 

**Note search**

You can search for note contents using `.n`.

{% include figure image_path="/assets/alfred-search-notes.png" alt="Search for note contents" caption="Search for note contents" %}

<img src="/img/omnifocus-search-notes.png" class="img-fluid" alt="TBC" loading="lazy">

**Recent items**

Using `.r` will show you the 10 last modified Omnifocus tasks and projects. 

<img src="/img/recent-all.png" class="img-fluid" alt="TBC" loading="lazy"> 

You can narrow the search scope to non-completed and modified items with `.ra`.

<img src="/img/recent-active.png" class="img-fluid" alt="TBC" loading="lazy">

## Future updates

Gabs Weatherhead wrote about [The Evolution of Omnifocus over at Macdrifter](http://www.macdrifter.com/2016/12/the-evolution-of-omnifocus.html). It's a good read and a couple of his criticisms, especially regarding comparison with other tasks managers like 2DO, stand out:

> it just doesn't make notes important, it makes them searchable and actionable with special fields for emails, phone numbers, and URLs

This made me think about whether I can update the workflow to support this sort of query. Specifically, can it allow you to search for items that contain:
- an email address
- a phone number
- an image
- a PDF

I think simple queries for email addresses or attached files will work but less sure about phone numbers. I'm going to give it a go anyway. Here's my idea for the next few updates:

* v1.2.3: 'search everything' support (this is a simple change to allow searches to incorporate items in the inbox)
* v1.2.4: 'search for email address' support
* v1.2.5: 'search for attachments'
