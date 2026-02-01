---
title: "Previewing Markdown files with Alfred"
date: 2016-01-27
tags:
  - productivity
---

I use [Markdown](http://daringfireball.net/projects/markdown/) whenever I'm writing or making notes. Depending on what I'm writing, I use either [Sublime Text](http://www.sublimetext.com), [Byword](http://bywordapp.com/) or [nvAlt](http://brettterpstra.com/project/nvalt/) as the text editor. In most cases, it's Byword for longer pieces, nvAlt for notes and Sublime for shorter pieces.

Seeing the rendered text side-by-side is often useful too. I've created this Alfred workflow to help me open any Markdown file in [Marked](http://marked2app.com) (a fantastic preview tool written by the author of nvAlt).

To use it, I open Alfred (`⌘-Space`) and type `pmd`.
  
![TBC](../../assets/images/1453931842312-img.png) 

then type a query to find the file I want to see:

![TBC](../../assets/images/1453931858776-img.png)

Which means I can do split my screen and see my changes as I make them:
  
![TBC](../../assets/images/1453931901607-img.png)

Here's a step-by-step guide on how to create this workflow:

* Open Alfred Preferences and create a new workflow
* Add a <em>File Filter</em> input with set the keyword as `pmd`
  
![TBC](../../assets/images/1453931977377-img.png)
  
* From the Finder, drag a Markdown file into the File Types box to ensure Alfred only shows Markdown files in the results
  
![TBC](../../assets/images/1453932022090-img.png)

* Add an <em>Open File</em> action and drag in Marked.app (or whatever app you want to use) from the `Applications` folder
  
![TBC](../../assets/images/1453932051258-img.png)

Link the input to the action and you're done!
  
![TBC](../../assets/images/1453932095916-img.png)
