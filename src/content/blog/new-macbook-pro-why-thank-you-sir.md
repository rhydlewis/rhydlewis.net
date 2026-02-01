---
title: "New MacBook Pro? Why, thank you sir..."
date: 2014-08-14
---

<p>I picked up my new <a href="http://store.apple.com/uk/buy-mac/macbook-pro">MacBook Pro</a> yesterday. It's the 15-inch, 2.5GHz with Retina display with the storage bumped up to 1TB. It is nice and shiny.</p>

<p>My notes on how I set the blighter up...</p>

<h2 id="applicationsconsideredessential">Applications considered essential</h2>

<p>Install these:</p>

<ul>
<li>Dropbox</li>
<li>1Password (works straightaway thanks to settings in Dropbox)</li>
<li>Alfred (ditto - settings in Dropbox)</li>
<li>Bartender</li>
<li>BetterTouchTool </li>
<li>iTerm2</li>
<li>Glui</li>
<li>OmniFocus 2</li>
<li>OmniGraffle 6</li>
<li>nvAlt</li>
<li>Spotify</li>
<li>Skype</li>
<li>Sublime Text (settings via Dropbox)</li>
<li>TextExpander (settings via Dropbox)</li>
</ul>

<p>Move all menu bar icons into Bartender's menu (except Skype, 1Password, Airport, Battery, Clock and Spotlight).</p>

![TBC](../../assets/images/Screenshot+2014-08-12+18.17.10.png)
  

<h2 id="commandlinejiggerypokery">Command line jiggery pokery</h2>

<p><strong>Homebrew Package Manager &amp; Ruby</strong></p>

<p>Install <a href="http://brew.sh">homebrew</a> and a non-system Ruby so that these useful command line tools work:</p>

<ul>
<li><a href="http://brettterpstra.com/2011/07/02/otask-cli-for-omnifocus/">otask</a> - for adding tasks to OmniFocus via command-line/Alfred</li>
<li><a href="http://rhydlewis.net/blog/2014/7/14/omnifocus-itch-scratched">of-kanban</a> for [syncing tasks between OmniFocus and my Personal Kanban board</li>
</ul>

<p>Here's how:</p>

<pre><code>    ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)"
    echo 'eval "$(rbenv init -)"' &gt;&gt; ~/.bash_profile
    brew install rbenv
    brew install rbenv-gem-rehash
    brew install ruby-build
    ruby install 1.9.3-p194
    rbenv install 1.9.3-p194
    rbenv global 1.9.3-p194
</code></pre>

<p>Check it worked...</p>

<pre><code>    rbenv version
    which ruby 
</code></pre>

<p>And finally, install the dependencies:</p>

<pre><code>    gem install rb-appscript amatch chronic json ostruct optparse --no-rdoc --no-ri
    gem install json ostruct2 OptionParser leankitkanban omnifocus --no-rdoc --no-ri
</code></pre>

<p><strong>Bash-It</strong></p>

<p>Next, install <a href="https://github.com/revans/bash-it">bash-it</a></p>

<pre><code>    git clone https://github.com/revans/bash-it.git ~/.bash_it
    cd ~/.bash_it/
    ~/.bash_it/install.sh
</code></pre>

<p>Add these useful aliases to ~/.bash_it/aliases/custom.aliases.bash:</p>

<pre><code>    alias h='history'
    alias ..='cd ..'
    alias dirs='ls -alFG | grep /'
    alias slime='open -a "Sublime Text"'
    alias ax="chmod a+x"
    alias f='open -a Finder ./'
    cdf() {
        target=`osascript -e 'tell application "Finder" to if (count of Finder windows) &gt; 0 then get POSIX path of (target of front Finder window as text)'`
        if [ "$target" != "" ]; then
            cd "$target"; pwd
        else
            echo 'No Finder window found' &gt;&amp;2
        fi
    }
</code></pre>

<p><strong>iTerm2</strong></p>

<p>Setup <a href="http://iterm2.com">iTerm2</a> so that it appears at the top of the screen at the drop of a hat (well, pressing ⌘-§).</p>
  
![TBC](../../assets/images/Screenshot+2014-08-12+18.16.29.png)
  
![TBC](../../assets/images/1407913423715-img.png)
  
![TBC](../../assets/images/1407996423315-img.png)
  

<h2 id="mail">Mail</h2>

<ul>
<li>Setup <a href="http://freron.com">MailMate</a> with 3 smart folders:
<ul><li><em>INBOX (non-work)</em> (any mail sent to my personal address)</li>
<li><em>INBOX (work)</em> (any direct mail sent to my work addresses)</li>
<li><em>CC (work)</em> (mails to my work addresses that are cc'd to me)</li></ul></li>
<li>Search for the MailMate licence key but to no avail. Spend 15 minutes (with much gnashing of teeth) using different search terms in Mailmate before remembering that you have to do <a href="http://www.mail-archive.com/mailmate@lists.freron.com/msg01115.html">this</a>. I take heed of the advice and all is well.</li>
</ul>

<h2 id="alfred">Alfred</h2>

<ul>
<li>Re-tested these <a href="http://www.alfredapp.com">Alfred</a> workflows:
<ul><li><a href="">PinAdd</a> - works after re-running 'configurepinadd'</li>
<li><a href="http://www.alfredforum.com/topic/979-pinboard-search-workflow/">AlfredPinboard</a>:
<ul><li>Requires <a href="http://nodejs.org">node.js</a>. Run "brew install node" to fix this.</li>
<li>Manually create config file with my pinboard settings as per <a href="http://www.alfredforum.com/topic/979-pinboard-search-workflow/#entry11707">these instructions</a></li></ul></li>
<li>Create OmniFocus task (using otask and some hackery involving the PATH)</li>
<li>All others (see below) work - hooray!</li></ul></li>
</ul>
  
![TBC](../../assets/images/1407996475262-img.png)

<h2 id="miscellaneousstuff">Miscellaneous stuff</h2>

<ul>
<li>Setup <a href="http://brettterpstra.com/projects/nvalt/">nvAlt</a> syncing via SimpleNote and Dropbox</li>
<li>Add useful keyboard shortcuts to TextExpander (http://www.leancrew.com/all-this/downloads/Keyboard.textexpander)</li>
<li>Try to fetch my BetterTouchTool settings from my old Mac using Back to my Back. Quickly realise the futility given I've not tested it before. Shake fist at sky. Stop shaking fist as I remember that I only use a few actions anyway so why not enter them again?
<ul><li>5 finger tap - maximise current window</li>
<li>⌘-3 finger swipe left - move current window to left hand side of screen</li>
<li>⌘-3 finger swipe right - move current window to right hand side of screen</li></ul></li>
</ul>
  
![TBC](../../assets/images/1407996520549-img.png)
