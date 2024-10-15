import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import { HeroComponent } from './components/hero/hero.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatButtonModule, MatDividerModule, HeroComponent, ExperienceComponent,NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Charl Roux | Javascript Developer';
  projects:any[]=[
    {
      name: "Shortify",
      desc: "URL shortening API landing page",
      background: "shortify.jpg",
      type: "react",
      url: "/project/shortify",
      previewURL: "https://shortifyy.herokuapp.com/",
      gitURL: "https://github.com/DevelopStudios/shortify-app",
      previewImage: "shortify.png",
      previewDesc:
        "A React app that integrates with the shortcode URL shortening API and plays with browser storage in this landing page to provide you with shortened links.",
    },
    {
      name: "Todo App",
      desc: "Todo app",
      background: "todo-banner.png",
      type: "react",
      url: "/project/Todo",
      previewURL: "https://react-todo-app-c.herokuapp.com/",
      gitURL: "https://github.com/DevelopStudios/react-todo-app",
      previewImage: "todo.jpg",
      previewDesc: "A React app that follows the classic todo app with a few twists! This app includes a dark/light theme toggle and drag & drop reordering.",
    },
    {
      name: "Meet",
      desc: "Meet landing page",
      background: "meet-preview.png",
      type: "nodejs",
      url: "/project/Meet",
      previewURL: "https://meet-view.herokuapp.com/",
      gitURL: "https://github.com/DevelopStudios/meet",
      previewImage: "meet-preview.jpg",
      previewDesc: "This HTML & CSS only view is perfect if you're starting to want look into perfect landing pages. The responsive layout shifts as the browser scales up or down."
    },
    {
      name: "Order Summary",
      desc: "Order summary component",
      background: "order.png",
      type: "nodejs",
      url: "/project/order-summary",
      previewURL: "https://order-summary-view.herokuapp.com/",
      gitURL: "https://github.com/DevelopStudios/order-summary",
      previewImage: "Order-big.jpg",
      previewDesc: "A perfect component for online stores who are starting to build confidence in their online presence!",
    },
    {
      name: "Entertainment web app",
      desc: "Multi-page entertainment web app",
      background: "entertainment.png",
      type: "react",
      url: "/project/entertainment",
      previewURL: "https://entertain-app-local.herokuapp.com/",
      gitURL: "https://github.com/DevelopStudios/entertainment",
      previewImage: "entertainment-main.jpeg",
      previewDesc: "A perfect component for online stores who are starting to build confidence in their online presence!",
    },
    {
      name: "Angular Slider",
      desc: "Multi-slide slider built with hammerJS",
      background: "slider.png",
      type: "react",
      url: "/project/slider",
      previewURL: "https://angular-slider.herokuapp.com/",
      gitURL: "https://github.com/DevelopStudios/angular-slider",
      previewImage: "slider.png",
      previewDesc: "Slide through these slides using you cursor or thumb!",
    }
  ]
}
