# This is a one time only script that is run to create permalinks and
# slugs for exporting to Wordpress.

from os import listdir
from os.path import isfile, join

for dir in ['communities', 'culture', 'ideas', 'identities', 'releases']:

    files = ['{}/_posts/{}'.format(dir, f) for f in listdir('{}/_posts'.format(dir)) if isfile(join('{}/_posts'.format(dir), f))]

    for file in files:

        # Write permalinks to file. Slug creation depends on permalink
        if 'permalink' not in open(file).read():
            input_file = open(file, 'r')
            string = file.split('/')[-1].split('-', 3)
            permalink = '/{}/{}/{}'.format(string[0], string[1], string[3].replace('.md', '.html'))
            input_file = open(file, 'r')
            lines = input_file.readlines()
            output_file = open(file, 'w')
            for line in lines:
                output_file.write(line)
                if 'title' in line: # post will always have a title, so this ensures that the permalink will be between the ---
                    output_file.write('permalink: {}\n'.format(permalink))
            output_file.close()


        # Create slugs   
        input_file = open(file, 'r')
        lines = input_file.readlines()

        output_file = open(file, 'w')

        for line in lines:
            output_file.write(line)
            if 'permalink' in line:
                slug = line.split('/')[-1].replace('.html', '')
                output_file.write('slug: {}'.format(slug))


        output_file.close()