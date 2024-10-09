import { JsonPipe, NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [NgFor,JsonPipe],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  entries:any [] = [
    {
      company:"Nclose",
      image:"Nclose.png",
      title:"Team Lead | Frontend Developer"
    },
    {
      company: "TouchFoundry",
      image:"Touchfoundry.png",
      title:"Frontend Developer"
    },
    {
      company: "Vivant",
      image:"Vivant.png",
      title: "Web Developer"
    }
  ]
}
