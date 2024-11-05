---
layout: post
comment: true
date: 2012-09-03T18:03:16+00:00
title: "Exporting OmniFocus as an OPML file"
permalink: /blog/:year/:i_month/:day/:slug
tag: productivity
---
<p>I joined a OmniFocus/productivity Glassboard group last week. Michael Schechter's request for help (and subsequent <a href="http://bettermess.com/omnifocus-to-mind-map-using-opml-a-geeky-cry-for-help/">blog post</a>) on how to export data from OmniFocus into an OPML file caught my eye.</p>

<p>I've been working on a tool (written in Ruby) that will allow me to visualise by OmniFocus projects and tasks on a Personal Kanban board. I've not had much chance to look at it over the past couple of weeks so I was keen to see if I could answer Michael's query to help me move forward with my overall project goal.</p>

<p>I think <strong><a href="https://github.com/rhyd/omnivisualiser">OPMLExport</a></strong> answers 2 of his 3 questions:</p>

<ul>
<li>How to get around the need for OmniOutliner Pro </li>
<li>How to eliminate dropped projects and completed projects without the user having to manually archive first </li>
</ul>

<p>This is a Ruby tool that parses OmniFocus and spits out OPML data ready for import into <a href="http://ithoughts.co.uk/Start/Welcome.html">iThoughts</a>.</p>

<p>A couple of caveats:</p>

<ol>
<li>my last <em>proper</em> developer job was in 2004 so I am, shall we say, a little rusty. There will be (ahem) some strangeness in the code.</li>
<li>this is very much an initial version so I can't offer any guarantees that it won't affect your OmniFocus data. The tool should only read the data to generate the OPML file. </li>
</ol>

<p>Feedback very welcome.</p>
