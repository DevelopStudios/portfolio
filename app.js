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
      desc: "A React app that integrates with the shrtcode URL shortening API and plays with browser storage in this landing page to provide you with shortened links.",
      background: "/assets/shortify.jpg",
      type: "react",
      url: "/project/shortify",
      previewURL: "https://shortifyy.herokuapp.com/",
      gitURL: "https://github.com/DevelopStudios/shortify-app",
      previewImage: "/assets/shortify.jpg",
      previewDesc:
        "URL shortening API landing page",
    },
    {
      name: "Todo App",
      desc: "A React app that follows the classic todo app with a few twists! This app includes a dark/light theme toggle and drag & drop reordering.",
      background: "/assets/todo-banner.png",
      type: "react",
      url: "/project/Todo",
      previewURL: "https://react-todo-app-c.herokuapp.com/",
      gitURL: "https://github.com/DevelopStudios/react-todo-app",
      previewImage: "/assets/todo-banner.png",
      previewDesc: "Todo app",
    },
    {
      name: "Meet",
      desc: "This HTML & CSS only view is perfect if you're starting to want look into perfect landing pages. The responsive layout shifts as the browser scales up or down.",
      background: "/assets/meet-preview.png",
      type: "nodejs",
      url: "/project/Meet",
      previewURL: "https://meet-view.herokuapp.com/",
      gitURL: "https://github.com/DevelopStudios/meet",
      previewImage: "/assets/meet-preview.jpg",
      previewDesc: "Meet landing page"
    },
    {
      name: "Order Summary",
      desc: "A perfect compoent for online stores who are starting to build confidence in their online presence!",
      background: "/assets/order-summary-preview.jpg",
      type: "nodejs",
      url: "/project/order-summary",
      previewURL: "https://order-summary-view.herokuapp.com/",
      gitURL: "https://github.com/DevelopStudios/order-summary",
      previewImage: "/assets/order-summary.jpg",
      previewDesc: "Order summary component",
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
      header: "Wordpress Developement",
      text:
        "Worpdress theme, and CMS developement using wordpress themeing engine.",
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
        "My duties included Wordpress Developement, Wordpress Maintenance and Theme Developement, and Angular development using Typescript,SCSS,HTML, and Nodejs.",
    },
    {
      date: " FEB 2019 - SEP 2021",
      title: "Front-End Developer",
      company: "TouchFoundry",
      text:
        "My role is to write and style the front-end components that meet the requirements of our mocks and full-fill our user stories. I also monitor and process pull requests for production deployments.",
    },
    {
      date: " SEP 2021 - CURRENT",
      title: "Front-End Developer",
      company: "Nclose",
      text:
        "My role is to write and style the front-end components that meet the requirements of our mocks and full-fill our user stories. I also monitor and process pull requests for production deployments.",
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
      to: "charl@codecave.org.za", // list of receivers
      subject: `Potential Client or Opportunity 🎊`, // Subject line
      html: `<p>customer: ${req.body.name}</p><br><p>from: ${req.body.email}</p><br><p>${req.body.text}</p><br><p><b>Sent from www.charlroux.co.za</b></p>`, // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  }
  main().catch(console.error);
  res.redirect('/');
});

app.listen(process.env.PORT || 3000, function () {});
