---
comment: true
date: 2016-02-22T17:30:00+00:00
title: "How I stopped my iPhone using up all of my data allowance"
permalink: /blog/:year/:i_month/:day/:slug
tag: iphone
---
I ran into an odd bug with my iPhone and iCloud account last month. My phone
comes with a 9GB monthly data limit which I rarely exceed. Last month, I
discovered that I had burned through 80% of my allowance with 10 days left. I
checked again 3 days later to find I had only 500MB and this soon ran out
later that evening.

<img src="/img/data-ran-out.png" class="img-fluid" alt="TBC" loading="lazy">

Running out of data or turning off Mobile Data entirely is an annoyance. Apps
like iMessage stop working consistently when out of WiFi range. I checked my
_Mobile Data Usage_ in **Settings > Mobile Data** and looked for entries with
an abnormally high value. **System Services > Documents & Sync** seemed to be
the main culprit.

<img src="/img/docs-sync.png" class="img-fluid" alt="TBC" loading="lazy">

I read similar reports of data loss to this process but couldn't find a
definitive fix. Turning off **iCloud Drive > Use Mobile Data** didn't seem to
have an effect. Likewise, turning off _iCloud Drive_ on the phone also had no
effect.

I stopped the rot by completing these steps:

  1. sign out of iCloud account on all devices
  2. back up my iPhone to my Mac
  3. wipe phone using _General > Reset > Erase All Content and Settings_ and set up as a new phone. I didn't want to restore it in case the back up re-created the problem.
  4. re-installed apps as and when I needed them
  5. sign back into iCloud on all devices

Resetting the phone to fix this loss of data had an unintentional but helpful
side-effect. I cut down the number of apps installed on my phone from 53 to
18. This means I've 35 fewer opportunities for distraction. This can only be a
good thing.

<img src="/img/new-home-screen.png" class="img-fluid" alt="TBC" loading="lazy">

