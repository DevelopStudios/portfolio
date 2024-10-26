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
      previewURL: "https://shortify-app-larcr.kinsta.page",
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
      previewURL: "https://react-todo-app-myfo7.kinsta.page",
      gitURL: "https://github.com/DevelopStudios/react-todo-app",
      previewImage: "todo.jpg",
      previewDesc: "A React app that follows the classic todo app with a few twists! This app includes a dark/light theme toggle and drag & drop reordering.",
    },
    {
      name: "Entertainment web app",
      desc: "Multi-page entertainment web app",
      background: "entertainment.png",
      type: "react",
      url: "/project/entertainment",
      previewURL: "https://entertainment-vk0w5.kinsta.page",
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
      previewURL: "https://angular-slider-2ws48.kinsta.page",
      gitURL: "https://github.com/DevelopStudios/angular-slider",
      previewImage: "slider.png",
      previewDesc: "Slide through these slides using you cursor or thumb!",
    }
  ]
}
