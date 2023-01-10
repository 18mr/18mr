These are the instructions for migrating the Jekyll data to Wordpress

## System Requirements
1. Familiarity with the command line
2. Python
3. Node.js
4. Jekyll

## Create permalinks and slugs
These instructions assume that the user is
familiar with a terminal command line interface.
You will need Python installed on your machine. Check to see if you have Python installed by running `python -v`. If you see something like `command not found: python`, then chances are you do not have python installed. You can find instructions for installing Python [here](https://www.python.org/downloads/).

After installing Python, open your terminal and run `python migrate/scripts/create_slug.py`. Every post should now have a `permalink` and `slug` attribute. These attributes are necessary for migrating the data to wordpress.

## Replace local images with image links

## Build the export.xml

## Upload to WP All Import

## Remove unwanted characters in post content