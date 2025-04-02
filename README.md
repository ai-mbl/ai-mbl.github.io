# DL@MBL Course Website

To add pages:
- Create a new md page in `_pages`
- Add a link to the new page in the header
    - Edit `_includes/header.html` and find the comment about adding new pages to navbar

# Local Development
If this is your first time working with jekyll:
- Install ruby following the jekyll [installation guide](https://jekyllrb.com/docs/installation/) for your os
- `gem install jekyll bundler`

To build and serve the website locally
- Run `bundle install` if you haven't already
- `bundle exec jekyll serve`