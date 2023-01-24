const fs = require('fs');

const dirs = ['communities', 'culture', 'ideas', 'identities', 'releases']

const postFiles = [];

// Write permalinks to file. Slug creation depends on permalink
dirs.forEach(dir => {
    const files = fs.readdirSync(`${dir}/_posts`);
    files.forEach(file => {
        let fileContent = fs.readFileSync(`${dir}/_posts/${file}`, 'utf-8');
        if(!fileContent.includes('permalink')){
            // const name = file.slice( 3).replace('.md', '');
            const nameArray = file.split('-');
            const name = nameArray.slice(3).join('-').replace('md', 'html');
            const date = file.split('-', 3);
            const permalink = `/${date[0]}/${date[1]}/${name}`;
            let splitFile = fileContent.split('\n');
            let lines = '';
            splitFile.forEach((line) => {
                lines += `${line}\n`;
                if (line.includes('title')) {
                   lines += `permalink: ${permalink}\n`;
                   slugArray = permalink.split('/');
                   slug = slugArray.pop().replace('html', '');
                   lines += `slug: ${slug}\n`; 
                }
            });
             lines;
            fs.writeFileSync(`${dir}/_posts/${file}`, lines);
        }
        
    })
    
});


