---
layout: post
comment: true
date: 2015-01-15T19:43:02+00:00
title: "Annotating screenshots via Alfred"
permalink: /blog/:year/:i_month/:day/:slug
excerpt_separator: <!--more-->
tags:
- productivity
---
A quick tip on how to quickly annotate a recently taken screenshot using an Alfred workflow.
<!--more-->
<p>I love <a href="https://www.alfredapp.com">Alfred</a>. I'm sad if I'm using another computer and pressing ⌘-space shows:</p>
  
<img src="/img/1421350498880-img.png" class="img-fluid" alt="TBC" loading="lazy">
  

<p>instead of:</p>
  
<img src="/img/1421350535102-img.png" class="img-fluid" alt="TBC" loading="lazy">
  

<p>I wrote a very quick workflow that has left me very happy. It searches my screen shots folder for the last modified file and then opens it in <a href="http://www.glui.me">Glui</a> so that I can add a quick annotation (hey! it's what I do...). Yes, I know that I can do this directly from Glui but I don't always have it running and I use Dropbox to store the captures anyway.</p>

<p>This saves me, on average, 38 seconds per screen shot:</p>

<ul>
<li>8 seconds = open folder in Finder using the <strong>ff</strong> keyword ('find folder')</li>
</ul>
  
<img src="/img/1421350552982-img.png" class="img-fluid" alt="TBC" loading="lazy">
  

<ul>
<li>15 seconds = try to open file in Glui via the Open With menu only to remember that Glui doesn't appear here</li>
</ul>
  
<img src="/img/1421350820869-img.png" class="img-fluid" alt="TBC" loading="lazy">
  

<ul>
<li>15 seconds = open Glui, press ⌘-O, choose the folder from the side bar, open file</li>
</ul>

<p>Instead, of this insufferable chore, I press ⌘-space and type 'anno' and the press ↩. Done.</p>
  
<img src="/img/1421350593915-img.png" class="img-fluid" alt="TBC" loading="lazy">
  

<p>It's the little things in life... Here's the <a href="https://www.dropbox.com/s/bk5dftjm0tx6z12/Annotate%20Screenshot.alfredworkflow?dl=0">workflow</a>.</p>
  
<img src="/img/1421350638746-img.png" class="img-fluid" alt="TBC" loading="lazy">
  
<img src="/img/1421350653542-img.png" class="img-fluid" alt="TBC" loading="lazy">
  

<pre><code>#!/bin/bash
cd ~/Dropbox/Screenshots
SSHOT_PATH=`ls -tr | tail -1`
open -a Glui "$SSHOT_PATH"</code></pre>
