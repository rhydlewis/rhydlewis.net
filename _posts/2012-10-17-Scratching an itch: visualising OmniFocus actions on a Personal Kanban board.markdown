---
comment: true
date: 2012-10-17T06:10:05+00:00
title: "Scratching an itch: visualising OmniFocus actions on a Personal Kanban board"
permalink: /blog/:year/:i_month/:day/:slug
tags:
- productivity  
- kanban
---
<p>EDIT: OmniFocus to Personal Kanban now works (for me). <a href="https://rhyd-lewis.squarespace.com/blog/2014/7/14/omnifocus-itch-scratched">More details here</a>.</p><p>I like nearly everything about <a href="http://www.omnigroup.com/applications/omnifocus/">OmniFocus</a> - simple capturing, syncing between computer and phone, etc. - but I'm tired of seeing so many <em>lists</em>. Now, I know that you can perform all manner of perspective wizardry to filter and find things but, in the end, you still see a list that starts at the top and ends at the bottom. This impairs my:</p>

<ol>
<li>understanding on what state my work is in. </li>
<li>choices on what I should work on next</li>
</ol>

<p>I think there is room for improvement.</p>

<p><a href="http://www.personalkanban.com/">Personal Kanban</a> is an approach for managing your work. Kanban systems are gaining in popularity for some software development teams (<a href="http://availagility.co.uk/2008/10/28/kanban-flow-and-cadence/">Karl Scotland's introduction</a> is a good place if you want to read more) and, with the introduction of PK, individuals and teams can use it to help them deal with their work. The 2 aims are (taken from <a href="http://www.personalkanban.com/pk/personal-kanban-101/">PK 101</a>):</p>

<ul>
<li>visualise your work</li>
<li>limit your work in progress</li>
</ul>

<p>Using PK works very well for me. But, I still need OmniFocus to capture and process my work before I can start <em>doing</em> it. What I need is some kind of OmniFocus/Personal Kanban hybrid that fuses OmniFocus' capturing and processing with PK's emphasis on visualising and limiting your work in progress.</p>

<p>I've written a simple app that pulls tasks out of OmniFocus and displays them on a <a href="https://leankitkanban.com/">LeanKitKanban</a> board. This is actually 2 quickly written scripts using <a href="http://rhydlewis.net/2012/10/5/exporting-omnifocus-data-using-omnivisualiser">my export to JSON</a> code and <a href="https://github.com/rhyd/leankitkanban">my forked version</a> of <a href="https://github.com/mlainez/leankitkanban">Marc Lainez's Lean Kit Kanban API wrapper</a>. These:</p>

<ul>
<li>clear all cards from the board</li>
<li>add all flagged and due today tasks as cards into the Ready lane of my PK board</li>
</ul>

<p>What does this mean? Well, if you have this:</p>
  
<img src="/img/inbox.png" class="img-fluid" alt="TBC" loading="lazy">  

<p>then you get to see this:</p>
  
<img src="/img/pk.png" class="img-fluid" alt="TBC" loading="lazy">
  

<p>Flagging tasks to see them on a board is a stop gap but it works for now. Syncing inbox items to the board is also debatable but, again, it's ok for now. In fact, I'm partway towards my goal. I can:</p>

<ul>
<li>see actions on the board (visualise my work)</li>
<li>move cards from lane to lane to indicate state</li>
<li>use the board to help me focus on the work in hand, and imporantly, avoid exceed my WIP limits</li>
</ul>

<p>I'm happy but there's plenty to do, including:</p>

<ul>
<li>setup config to match OmniFocus contexts with the PK card types</li>
<li>setup config to infer which lane an action belongs in (e.g. actions with a "Waiting" context) </li>
<li>don't rely on flagging to pull cards onto the board</li>
<li>the big one: syncing changes made on the board back to OmniFocus</li>
</ul>

<p>More updates on this over the next couple of weeks.</p>

<p>If you're interested in contributing to this project, <a href="http://rhydlewis.net/contact/">drop me a line</a>.</p>
