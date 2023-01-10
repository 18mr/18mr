These are the instructions for migrating the Jekyll data to Wordpress. These instructions
are meant to be followed in order.

## 0. System Requirements
1. Familiarity with the command line
2. Python
3. Node.js
4. Jekyll

## 1. Create permalinks and slugs
These instructions assume that the user is
familiar with a terminal command line interface.
You will need Python installed on your machine. Check to see if you have Python installed by running `python -v`. If you see something like `command not found: python`, then chances are you do not have python installed. You can find instructions for installing Python [here](https://www.python.org/downloads/).

After installing Python, open your terminal and run `python migrate/scripts/create_slug.py`. Every post should now have a `permalink` and `slug` attribute. These attributes are necessary for migrating the data to wordpress.

## 2. Replace local images with image links
In the main directory run: `node migrate/scripts/replace_image_links.js`

## 3. Build the export.xml
In the main directory, run `jekyll build` 

## 4. Upload to WP All Import
1. In the Wordpress installation, make sure that the [WP All Import plugin](https://wordpress.org/plugins/wp-all-import/) is installed
2. Upload the export file in `_site/export.xml`
3. Follow the [steps to fill in the import template](https://www.fivefilters.org/2021/how-to-migrate-a-jekyll-blog-to-wordpress/), which are stpes 5 through 7.


## Remove unwanted characters in post content
1. In the main directory, run `npm --prefix migrate/scripts install `
2. Then run: `node migrate/scripts/update_image_content.js`. This will fix all the links and image links in
   the Wordpress site.
