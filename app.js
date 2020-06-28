const http = require('http');
const express = require('express');
const hostname = '127.0.0.1';
const port = 3000;
const app = express();
let ejs = require('ejs');
let indexData = {
  projects: [
    {
      name: 'BeyondBI',
      desc: 'This is an Angular project built for marketing purposes and speed',
      background: '/assets/beyond.png',
      type: 'angular'
    },
    {
      name: 'Portfolio',
      desc: 'This is a nodejs and vanilla javascript project',
      background: '/assets/portfolio.png',
      type: 'nodejs'
    }
  ],
  service : [
    {
      background: '/assets/web-hosting 1.jpg',
      image: '/assets/icon.png',
      header: 'Web Hosting',
      text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nu pariatur excepteur sint occaecat.'
    },
    {
      background: '/assets/web-development 1.png',
      image: '/assets/icon.png',
      header: 'Web Developer',
      text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nu pariatur excepteur sint occaecat.'
    },
    {
      background: '/assets/Wordpress-development 1.png',
      image: '/assets/icon.png',
      header: 'Wordpress Developement',
      text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nu pariatur excepteur sint occaecat.'
    },
    {
      background: '/assets/maintenance.jpg',
      image: '/assets/icon.png',
      header: 'Web Maintenance',
      text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nu pariatur excepteur sint occaecat.'
    }
  ]
}
// set the view engine to ejs
app.set('view engine', 'ejs');

app.use(express.static('public'));

// index page
app.get('/', function(req, res) {
    res.render('pages/index',{indexData: indexData});
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
