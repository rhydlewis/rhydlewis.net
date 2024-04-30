---
comment: true
date: 2014-07-14T17:15:20+00:00
title: "OmniFocus itch scratched"
permalink: /blog/:year/:i_month/:day/:slug
tags:
- OmniFocus
- personal-kanban
---
<p>Finally, FINALLY, after 18 months of the worst kind of procrastination, I am synchronising my Personal Kanban board with OmniFocus. <em>Cue polite golf clap</em>.</p>

<p>The <a href="https://github.com/rhyd/of-kanban">code is shoddy</a> and needs a serious review and improvement but <strong>it works</strong>. Running this from the command line:</p>

<pre><code>./of-kanban -fc
</code></pre>

<p>will:</p>

<ul>
<li>search for all flagged, non-deferred tasks in OmniFocus (that's the 'f' switch)</li>
<li>create 1 card per task in my Personal Kanban Backlog column (and ignores any  already present)</li>
<li>looks for cards in the Dropped or Done column and closes any corresponding task in OmniFocus (the 'c' switch)</li>
</ul>

<p>I've made a number of false starts with this script. But, now that it works, I'm seeing these benefits:</p>

<ul>
<li>reduced the overhead of dealing with so many contexts (I had more than 50). I have just 10 and each one is represented by a different card type in LeanKit.</li>
<li>I can <em>see</em> my work in a way that actually makes sense to me</li>
<li>I'm finishing existing work as opposed to starting new (like this blog post for instance.)</li>
</ul>

<p>Next up, I want to:</p>

<ul>
<li>fix some fundamental problems (the script fails - badly - if it finds a task without a defined context for example).</li>
<li>make the code more robust so that it works for anyone else</li>
</ul><p>This is an example of my current board:</p>

<ul>
<li>card types correspond to OmniFocus contexts (e.g. white is @Waiting For, yellow is @Email, etc.).</li>
<li>due dates are shown as Lean Kit end dates (see the 2nd card in the Dropped column).</li>
</ul>
  
<img src="/img/pk+board.png" class="img-fluid" alt="TBC" loading="lazy">
