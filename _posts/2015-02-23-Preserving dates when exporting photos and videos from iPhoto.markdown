---
layout: post
comment: true
date: 2015-02-23T10:06:38+00:00
title: "Preserving dates when exporting photos and videos from iPhoto"
permalink: /blog/:year/:i_month/:day/:slug
tag: productivity
---
<p>I'm preparing my photo library ready for the release of <a href="https://www.apple.com/osx/photos-preview/">Photos for Mac</a> or some, as yet unnamed, replacement for the alarmingly slow iPhoto. Hat tip to Gabe Macdrifter for this <a href="http://www.macdrifter.com/2015/02/maintenance-and-being-prepared-for-the-mess-of-photo-services.html">excellent article</a> on how to use <a href="http://www.noodlesoft.com/hazel.php">Hazel</a> to sort files by year and month.</p>

<p>Exporting photos as originals works because iPhoto preserves date, location etc. but it doesn't do this for movies. Annoying.</p>

<p>After deleting ~1000 videos with a created date of today, I used this command from my Time Machine backup of my iPhoto Library:</p>

<pre>`sudo find -E . -regex '.*\.(MOV|MPG|MP4|3gp|3GP|avi|mp4|mov|mpg)' -print0 | rsync -avt --files-from=- --from0 ./ /Users/myuser/Downloads/movies`</pre>

<p>This command:</p>

<ul>
<li>searches for all movies files within the Masters folder in my iPhoto Library directory</li>
<li>uses rsync to copy copy the movies to my local disk whilst preserving dates (that's the <em>t</em> option)</li>
</ul>

<p>Hazel can now process these files and move them into the same structure as the my photos.</p>
