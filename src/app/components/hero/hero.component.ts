import { AfterViewInit, Component, OnInit } from '@angular/core';


@Component({
  standalone: true,
  selector: 'app-hero',
  imports:[],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit, AfterViewInit {
  headings: string[]= ['An Amazing','An Extra','A Fabulous']
  constructor() { }

  ngOnInit(): void {
   
  }

  ngAfterViewInit(): void {
    let heading = document.getElementById('changing-header_text');
    if(heading !== null){
      heading.innerText = this.headings[0];
    }
    setInterval(() => {
      if(heading !== null) {
        heading.classList.remove('tracking-in-expand');
        heading.innerText = this.checkHeading(heading.innerText);
        heading.classList.add('tracking-in-expand');
      }
    }, 5000);
    
  }

  checkHeading(param:any){
    //Find Element
    let found =  this.headings.findIndex(value => value === param);
    let newHeading = '';
    if(found !== this.headings.length -1){
     newHeading = this.headings[found + 1];
    } else if(found === this.headings.length - 1){
      newHeading = this.headings[0 ];
    }
    return newHeading;
    //
  }

}
