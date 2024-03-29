require("dotenv").config();
const nodemailer = require("nodemailer");
const http = require("http");
const express = require("express");
const app = express();
const parser = require("body-parser");
const bodyParser = require("body-parser");
const sgMail = require("@sendgrid/mail");
const aws = require("aws-sdk");
let ejs = require("ejs");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// create application/json parser

let indexData = {
  projects: [
    {
      name: "Shortify",
      desc: "URL shortening API landing page",
      background: "/assets/shortify.jpg",
      type: "react",
      url: "/project/shortify",
      previewURL: "https://shortifyy.herokuapp.com/",
      gitURL: "https://github.com/DevelopStudios/shortify-app",
      previewImage: "/assets/shortify.jpg",
      previewDesc:
        "A React app that integrates with the shortcode URL shortening API and plays with browser storage in this landing page to provide you with shortened links.",
    },
    {
      name: "Todo App",
      desc: "Todo app",
      background: "/assets/todo-banner.png",
      type: "react",
      url: "/project/Todo",
      previewURL: "https://react-todo-app-c.herokuapp.com/",
      gitURL: "https://github.com/DevelopStudios/react-todo-app",
      previewImage: "/assets/todo.jpg",
      previewDesc: "A React app that follows the classic todo app with a few twists! This app includes a dark/light theme toggle and drag & drop reordering.",
    },
    {
      name: "Meet",
      desc: "Meet landing page",
      background: "/assets/meet-preview.png",
      type: "nodejs",
      url: "/project/Meet",
      previewURL: "https://meet-view.herokuapp.com/",
      gitURL: "https://github.com/DevelopStudios/meet",
      previewImage: "/assets/meet-preview.jpg",
      previewDesc: "This HTML & CSS only view is perfect if you're starting to want look into perfect landing pages. The responsive layout shifts as the browser scales up or down."
    },
    {
      name: "Order Summary",
      desc: "Order summary component",
      background: "/assets/order.png",
      type: "nodejs",
      url: "/project/order-summary",
      previewURL: "https://order-summary-view.herokuapp.com/",
      gitURL: "https://github.com/DevelopStudios/order-summary",
      previewImage: "/assets/Order-big.jpg",
      previewDesc: "A perfect component for online stores who are starting to build confidence in their online presence!",
    },
    {
      name: "Entertainment web app",
      desc: "Multi-page entertainment web app",
      background: "/assets/entertainment.png",
      type: "react",
      url: "/project/entertainment",
      previewURL: "https://entertain-app-local.herokuapp.com/",
      gitURL: "https://github.com/DevelopStudios/entertainment",
      previewImage: "/assets/entertainment-main.jpeg",
      previewDesc: "A perfect component for online stores who are starting to build confidence in their online presence!",
    },
    {
      name: "Angular Slider",
      desc: "Multi-slide slider built with hammerJS",
      background: "/assets/slider.png",
      type: "react",
      url: "/project/slider",
      previewURL: "https://angular-slider.herokuapp.com/",
      gitURL: "https://github.com/DevelopStudios/angular-slider",
      previewImage: "/assets/slider.png",
      previewDesc: "Slide through these slides using you cursor or thumb!",
    }
  ],
  service: [
    {
      background: "/assets/web-hosting 1.jpg",
      image: "/assets/icon.png",
      header: "Web Hosting",
      text:
        "Basic webhosting with a backup solution with a well establish hosting company.",
    },
    {
      background: "/assets/web-development 1.png",
      image: "/assets/icon.png",
      header: "Web Developer",
      text: "Building websites using best practices and W3C standards.",
    },
    {
      background: "/assets/Wordpress-development 1.png",
      image: "/assets/icon.png",
      header: "Wordpress Development",
      text:
        "Worpdress theme, and CMS development using wordpress themeing engine.",
    },
    {
      background: "/assets/maintenance.jpg",
      image: "/assets/icon.png",
      header: "Web Maintenance",
      text:
        "Maintaine and update existing websites and ensuring sites stay responsive and secure",
    },
  ],
  experience: [
    {
      date: "FEB 2016 - 2017",
      title: "Web Developer",
      company: "Vivant",
      text:
        "My duties included communicating to clients regarding web related queries, Wordpress Development and converting PSD files to working Wordpress Sites.",
    },
    {
      date: "FEB 2018 - 2019",
      title: "Front End Developer",
      company: "BeyondBI",
      text:
        "My duties included Wordpress Development, Wordpress Maintenance and Theme Development, and Angular development using Typescript,SCSS,HTML, and Nodejs.",
    },
    {
      date: " FEB 2019 - SEP 2021",
      title: "Front-End Developer",
      company: "TouchFoundry",
      text:
        "My role is to write and style the front-end components using React, Angular, and Typescript. I also monitor and process pull requests for production deployments.",
    },
    {
      date: " SEP 2021 - CURRENT",
      title: "Front-End Developer",
      company: "Nclose",
      text:
        "My role is to write front-end components using angular to accommodate the backend structure and to full-full the given spec and requirements.",
    }
  ],
};
// set the view engine to ejs
app.set("view engine", "ejs");

app.use(express.static("public"));

// index page
app.get("/", function (req, res) {
  res.render("pages/index", { indexData: indexData });
});

app.get("/project/shortify", function (req, res) {
  res.render("pages/project", { indexData: indexData.projects[0] });
});

app.get("/project/charlroux", function (req, res) {
  res.render("pages/project", { indexData: indexData.projects[0] });
});

app.get("/project/todo", function (req, res) {
  res.render("pages/project", { indexData: indexData.projects[1] });
});

app.get("/project/Meet", function (req, res) {
  res.render("pages/project", { indexData: indexData.projects[2] });
});

app.get("/project/boerseunboomslopings", function (req, res) {
  res.render("pages/project", { indexData: indexData.projects[1] });
});

app.get("/project/order-summary", function (req, res) {
  res.render("pages/project", { indexData: indexData.projects[3] });
});

app.get("/project/entertainment", function (req, res) {
  res.render("pages/project", { indexData: indexData.projects[4] });
});

app.get("/project/slider", function (req, res) {
  res.render("pages/project", { indexData: indexData.projects[5] });
});



app.post("/", function (req, res) {
  async function main() {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "charlroux641@gmail.com",
        pass: process.env["GMAIL_PASSWORD"] || process.env.GMAIL_PASSWORD,
      },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: req.body.email, // sender address
      to: "charlroux641@gmail.com", // list of receivers
      subject: `Potential Client or Opportunity 🎊`, // Subject line
      html: `<p>customer: ${req.body.name}</p><br><p>from: ${req.body.email}</p><br><p>${req.body.text}</p><br><p><b>Sent from www.charlroux.co.za</b></p>`, // html body
    });
  }
  main().catch(console.error);
  res.redirect('/');
});

app.listen(process.env.PORT || 3000, function () {});
