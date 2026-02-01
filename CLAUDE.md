# Claude Guide for rhydlewis.github.io

## Site Commands
- Build and serve locally: `bundle exec jekyll serve`
- Build only: `bundle exec jekyll build`
- Preview with auto-regeneration: `rake preview`
- Create new post: `python quick_post.py`
- Check/add layout to posts: `python _posts/post-check.py`

## Structure
This is a Jekyll-based personal site/blog with posts in Markdown.

## Style Guidelines
- Frontmatter: Always include `layout: post` in new posts
- Post filenames: Use `YYYY-MM-DD-slug-with-hyphens.md` format
- Tags: Use lowercase, space-separated in frontmatter
- Python: Follow PEP 8 style (4-space indentation, snake_case)
- Ruby: Use 2-space indentation

## Git Workflow
- Add posts: `git add _posts/YYYY-MM-DD-post-name.md`
- Commit changes: `git commit -m "Descriptive message"`
- Push to GitHub: `git push`