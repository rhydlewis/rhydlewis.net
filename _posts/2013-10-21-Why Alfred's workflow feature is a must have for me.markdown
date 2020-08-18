---
comment: true
date: 2013-10-21T18:28:50+00:00
title: "Why Alfred's workflow feature is a must have for me"
permalink: /blog/2013/10/21/why-alfreds-workflow-feature-is-a-must-have-for-me
tags:
- Alfred
- workflow
---
<p><a href="http://www.alfredapp.com">Alfred</a>'s workflow feature continues to impress me with its usefulness. Current favourites include </p>

<ul>
<li><a href="http://www.alfredforum.com/topic/1230-pinadd-—-takes-arguments-as-tags-and-adds-your-browser’s-frontmost-tab-as-a-pinboard-bookmark/">PinAdd</a>, for adding the current tab to Pinboard.</li>
<li><a href="http://www.alfredforum.com/topic/979-pinboard-search-workflow/">Pinboard Search</a>, for searching. </li>
<li><a href="http://www.alfredforum.com/topic/1477-yet-another-fix-open-with-menu/">Yet another Fix open with...</a>, comes in handy every now and then when I spot duplicate entries in the Open With menu.</li>
</ul>

<p>I'm making plenty of use of my own workflows too. These include:</p>

<ul>
<li>quick searching Jira and Confluence.</li>
<li>opening my 4 Gmail accounts at once (1 personal, 3 for work...).</li>
<li>searching the UK rail train timetables.</li>
</ul>

<p>I realised earlier this week that one of my oft-repeated tasks is to copy some unsorted text and paste it sorted elsewhere. Rather than faff about copying, pasting into Sublime Text, sorting, copying again, then pasting, I've written a workflow to handle this:</p>

<p><ol>
<li>copy unsorted text</li>
<li>open Alfred and use the scb keyword to sort the text via bash:</p>

<blockquote>
  <p>pbpaste | sort | pbcopy</li>
  <li>paste into intended destination</li>
  </ol>
  <a href="https://www.dropbox.com/s/rlvqr4gdkqbemja/Sort%20the%20Clipboard.alfredworkflow">Download this workflow</a>.</p>
</blockquote>

<p>It's exactly this kind of - seeminly trivial - trick that makes Alfred such an indespensible app. Great stuff. </p>
