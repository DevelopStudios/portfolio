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
      name: "Charl Roux",
      desc: "This is a nodejs project built for templating and speed",
      background: "/assets/portfolio.png",
      type: "nodejs",
      url: "/project/charlroux",
      previewURL: "http://www.charlroux.co.za/",
      previewImage: "/assets/portfolio.png",
      previewDesc:
        "This project was built using Nodejs as the backend and using Express and EJS for templatin.",
      gitURL: "https://github.com/DevelopStudios/portfolio",
    },
    {
      name: "Boerseun Boomslopings",
      desc: "This is a wordpress driven site using bootstrap 4",
      background: "/assets/boerseun.png",
      type: "wordpress",
      url: "/project/boerseunboomslopings",
      previewURL: "http://www.boerseunboomslopings.co.za",
      previewImage: "/assets/boerseun.png",
      previewDesc:
        "This is a Wordpress Site built with Bootstrap,Javascript and Wordpress Theme Developement.",
    },
    {
      name: "Shortify",
      desc: "This is a React App POC with URL shortener",
      background: "/assets/shortify.jpg",
      type: "react",
      url: "/project/shortify",
      previewURL: "https://shortifyy.herokuapp.com/",
      gitURL: "https://github.com/DevelopStudios/shortify-app",
      previewImage: "/assets/shortify.jpg",
      previewDesc:
        "This is a react focused app utilizing bootstrap for layout, Javascript for functionality and css for cosmetics.",
    },
    {
      name: "Todo App",
      desc: "This is a React Todo App",
      background: "/assets/todo-banner.png",
      type: "react",
      url: "/project/Todo",
      previewURL: "https://react-todo-app-c.herokuapp.com/",
      gitURL: "https://github.com/DevelopStudios/react-todo-app",
      previewImage: "/assets/todo-banner.png",
      previewDesc: "This is a react to-do app using just react hooks",
    },
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
      date: " FEB 2019 - current",
      title: "Front-End Engineer",
      company: "TouchFoundry",
      text:
        "My role is to write and style the front-end components that meet the requirements of our mocks and full-fill our user stories. I also monitor and process pull requests for production deployments.",
    },
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
  res.render("pages/project", { indexData: indexData.projects[2] });
});

app.get("/project/charlroux", function (req, res) {
  res.render("pages/project", { indexData: indexData.projects[0] });
});

app.get("/project/todo", function (req, res) {
  res.render("pages/project", { indexData: indexData.projects[3] });
});

app.get("/project/boerseunboomslopings", function (req, res) {
  res.render("pages/project", { indexData: indexData.projects[1] });
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
