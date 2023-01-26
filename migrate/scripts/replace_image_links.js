const fs = require('fs');

const dirs = ['communities', 'culture', 'ideas', 'identities', 'releases']

dirs.forEach(dir => {
    const files = fs.readdirSync(`${dir}/_posts`);
    files.forEach(file => {
        let fileContent = fs.readFileSync(`${dir}/_posts/${file}`, 'utf-8');
        fileContent = fileContent.replace(/\/static\//g, 'https://storage.googleapis.com/18mr-static-assets/static/')
        fs.writeFileSync(`${dir}/_posts/${file}`, fileContent);
    })
});


