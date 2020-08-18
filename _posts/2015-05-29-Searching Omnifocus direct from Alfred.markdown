---
comment: true
date: 2015-05-29T16:43:39+00:00
title: "Searching Omnifocus direct from Alfred"
permalink: /blog/:year/:i_month/:day/:slug
tags:
- OmniFocus
- Alfred
- workflow

---
I spend too much time searching for stuff in Omnifocus. Whilst I can use ⌘-O
to search for projects and folders within Omnifocus itself, searching for
tasks is not so easy. I can't quickly search using the search field because
OmniFocus restricts the results to the current perspective or selection.

As a workaround, I've written a workflow that allows you to search for tasks
and projects directly from Alfred. It allows you to:

  * Search for all tasks within OmniFocus (irrespective of status) with the keyword **.s**
  * Search the OmniFocus inbox with **.i**
  * List everything in the Inbox with **.li**
  * Search just for _active_ tasks with **.sa**
  * Search for projects with **.p**

Selecting one of the results Alfred shows should display that task or project
in Omnifocus (assuming your View options are set to show them).

## Download

You can [download the workflow from GitHub](https://github.com/rhydlewis
/search-omnifocus/releases) or from [Packal](http://www.packal.org/workflow
/search-omnifocus) (although, at the time of writing, Packal is showing an out
of date version).

## Notes

  * Thanks to [Seth Clifford](https://twitter.com/sethclifford/) for the [useful feedback](https://twitter.com/sethclifford/status/604027667814436864).
  * Dean Jackson's [Python library for Alfred workflows](https://github.com/deanishe/alfred-workflow) does most of the heavy lifting. Excellent stuff, thank you.
  * Marko Kaestner's [more in-depth workflow](https://github.com/markokaestner/of-task-actions) provided some insight into how to search Omnifocus.
  * There is [1 outstanding issue](https://github.com/rhydlewis/search-omnifocus/issues/1) with this workflow: 1 character queries aren't invoked by Alfred and can result in stale python processes. I'm looking into it.
![](/assets/1432917782115-img.png)

