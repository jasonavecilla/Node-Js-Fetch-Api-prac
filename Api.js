// npm install node-fetch
// node index.js
const fetch = require('node-fetch');
const fs = require('fs');

const url = 'https://jsonplaceholder.typicode.com/posts';

fetch(url)
  .then(response => response.json())
  .then(data => {
    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>API Data</title>
        </head>
        <body>
          <ul>
            ${data.map(post => `<li>${post.title}</li>`).join('')}
          </ul>
        </body>
      </html>
    `;

    fs.writeFileSync('index.html', html);
  })
  .catch(error => {
    console.error(error);
  });
