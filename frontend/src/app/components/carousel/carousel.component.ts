import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {

  scrollDown() {
    const mybutton = document.getElementById("details");
    mybutton.scrollIntoView({behavior: 'smooth'})
  }
  

  constructor() { }

  ngOnInit() {}

}
