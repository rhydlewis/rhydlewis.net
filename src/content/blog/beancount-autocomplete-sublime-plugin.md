---
title: "BeancountAutocomplete: Smart Account Completion for Sublime Text"
date: 2026-01-15
---

# BeancountAutocomplete: Smart Account Completion for Sublime Text

I track my finances using [Beancount](https://beancount.github.io/). It's a text-based accounting system and that's basically all you need to know. I've automated transaction importing so there's not so much in the way of manual updates required. However, when I do need to jump in and edit anything typing account names is, in a word, tedious. So, with the help of Claude Code, I decided to do something about it. I've just released **[BeancountAutocomplete](https://github.com/rhydlewis/BeancountAutocomplete)**, a Sublime Text plugin that solves this problem with intelligent account name completion. 

## The Problem

Beancount account hierarchies are maintained using colon separators. This helps with organising your data but it also means typing the same long account names over and over:

```beancount
2026-01-15 * "Grocery shopping"
  Expenses:Food:Groceries    50.67 GBP
  Assets:Bank:Account
```

You're only 1 typo away from an unrecognised account. It's a minor concern but better to get it right first time I say.

## The Solution

**BeancountAutocomplete** provides intelligent autocomplete for your Beancount accounts directly in Sublime Text. As you type, the plugin:

1. **Scans your Beancount file** for all `open` directives
2. **Caches account names** for instant suggestions
3. **Filters by what you type** with case-insensitive matching
4. **Excludes closed accounts** automatically
5. **Updates when your file changes** without restarting the editor

Just start typing `Exp` and you'll see all your Expenses accounts. Type `Assets:Bank` and narrow down to just your bank accounts. It's autocomplete done right.

## Smart Features

### Closed Account Filtering

The plugin understands Beancount's account lifecycle so if you've closed an account with a `close` directive then it won't appear in your autocomplete suggestions. No more accidentally posting to inactive accounts.

### Performance-Focused Caching

The plugin uses file modification time to intelligently cache your accounts. It only re-scans your Beancount file when it actually changes, keeping autocomplete fast even with large ledgers.

### Case-Insensitive Matching

Type `assets` or `ASSETS` or `AsSeTs`—it all works. The matching is flexible so you can type naturally without worrying about capitalisation.

## Installation

Installation via Package Control is pending but will be simple:

1. Open Sublime Text
2. Press `Cmd+Shift+P` (macOS) or `Ctrl+Shift+P` (Windows/Linux)
3. Type "Package Control: Install Package"
4. Search for "BeancountAutocomplete"
5. Press Enter

Then configure the path to your Beancount file in `Preferences → Settings`:

```json
{
    "beancount_file": "/path/to/your/accounts.beancount"
}
```

That's it. Start typing account names in any file and autocomplete just works.

If you want to use the plugin now, you can install it manually from the [latest release](https://github.com/rhydlewis/BeancountAutocomplete/releases/latest):

**macOS/Linux:**
```bash
# Download and extract the latest release
curl -L https://github.com/rhydlewis/BeancountAutocomplete/releases/latest/download/BeancountAutocomplete.zip -o BeancountAutocomplete.zip
unzip BeancountAutocomplete.zip

# Copy only the required files to Sublime Text packages directory
# For macOS:
cp -r BeancountAutocomplete-* ~/Library/Application\ Support/Sublime\ Text/Packages/BeancountAutocomplete

# For Linux:
cp -r BeancountAutocomplete-* ~/.config/sublime-text/Packages/BeancountAutocomplete

# Clean up
rm -rf BeancountAutocomplete.zip BeancountAutocomplete-*
```

**Windows (PowerShell):**
```powershell
# Download the latest release
Invoke-WebRequest -Uri "https://github.com/rhydlewis/BeancountAutocomplete/releases/latest/download/BeancountAutocomplete.zip" -OutFile "BeancountAutocomplete.zip"

# Extract to Packages directory
Expand-Archive -Path "BeancountAutocomplete.zip" -DestinationPath "$env:APPDATA\Sublime Text\Packages\BeancountAutocomplete" -Force

# Clean up
Remove-Item "BeancountAutocomplete.zip"
```

After installation, restart Sublime Text to complete the setup.

## Open Source

BeancountAutocomplete is open source (MIT License) and available on [GitHub](https://github.com/rhydlewis/BeancountAutocomplete).

If you are a Beancount and Sublime Text user, this plugin might be a small quality-of-life improvement that adds up over hundreds of transactions.
