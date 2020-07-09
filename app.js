require("dotenv").config();
const http = require("http");
const express = require("express");
const app = express();
const parser = require("body-parser");
const bodyParser = require("body-parser");
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.API_KEY);
let ejs = require("ejs");
app.use(bodyParser.urlencoded({ extended: true }));

// create application/json parser

let indexData = {
  projects: [
    {
      name: "BeyondBI",
      desc: "This is an Angular project built for marketing purposes and speed",
      background: "/assets/beyond.png",
      type: "angular",
    },
    {
      name: "Portfolio",
      desc: "This is a nodejs and vanilla javascript project",
      background: "/assets/portfolio.png",
      type: "nodejs",
    },
  ],
  service: [
    {
      background: "/assets/web-hosting 1.jpg",
      image: "/assets/icon.png",
      header: "Web Hosting",
      text:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nu pariatur excepteur sint occaecat.",
    },
    {
      background: "/assets/web-development 1.png",
      image: "/assets/icon.png",
      header: "Web Developer",
      text:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nu pariatur excepteur sint occaecat.",
    },
    {
      background: "/assets/Wordpress-development 1.png",
      image: "/assets/icon.png",
      header: "Wordpress Developement",
      text:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nu pariatur excepteur sint occaecat.",
    },
    {
      background: "/assets/maintenance.jpg",
      image: "/assets/icon.png",
      header: "Web Maintenance",
      text:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nu pariatur excepteur sint occaecat.",
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

app.post("/", function (req, res) {
  console.dir(req.body);
  const msg = {
    to: req.body.email,
    from: "charlroux641@gmail.com",
    subject: `Portfolio funnel ${req.body.name}`,
    text: req.body.text,
    html: "<p>This is a test tag</p>",
  };
  sgMail
    .send(msg)
    .then(() => {
      console.log("Message sent");
    })
    .catch((error) => {
      console.log(error.response.body);
    });
  res.redirect("/");
});

app.listen(3000, function () {});
