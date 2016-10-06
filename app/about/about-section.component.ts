import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'selector',
  template: `
    <h2 class="text-center"> About Section </h2>
    <router-outlet></router-outlet>
  `
})
export class AboutSectionComponent implements OnInit {
  constructor() {  }

  ngOnInit() {}
}
