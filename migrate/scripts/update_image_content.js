/**
 * This script rewrites the content of each post in Wordpress
 * so that images and links work.
 */

const fetch = require('node-fetch');

const headers = {
    'Authorization': `Basic ${Buffer.from('admin' + ":" + 'password').toString('base64')}`
}

Promise.all([fetch("http://eighteenmr.local/wp-json/wp/v2/posts?per_page=100&page=1", {
    headers
  }).then(result => result.json())
    .then(posts => {
        posts.forEach(post => {
            let content = post.content.rendered;
            content = content.replace(/\&quot\;/g,"\"")
            const contentJSON = {
                content
            }
            fetch(`http://eighteenmr.local/wp-json/wp/v2/posts/${post.id}`, {
                method: 'POST',
                body: JSON.stringify(contentJSON),
                headers: { 'Content-Type': 'application/json', 'Authorization': `Basic ${Buffer.from('admin' + ":" + 'password').toString('base64')}` }
            }).then(res => res.json())
              .then(post => console.log(post.id));
        })
    }), fetch("http://eighteenmr.local/wp-json/wp/v2/posts?per_page=100&page=2", {
    headers
    }).then(result => result.json())
    .then(posts => {
        posts.forEach(post => {
            let content = post.content.rendered;
            content = content.replace(/\&quot\;/g,"\"")
            const contentJSON = {
                content
            }
            fetch(`http://eighteenmr.local/wp-json/wp/v2/posts/${post.id}`, {
                method: 'POST',
                body: JSON.stringify(contentJSON),
                headers: { 'Content-Type': 'application/json', 'Authorization': `Basic ${Buffer.from('admin' + ":" + 'password').toString('base64')}` }
            }).then(res => res.json())
              .then(post => console.log(post.id));
        })
    })])
