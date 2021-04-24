import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  message: string;

  constructor() {
    setInterval(() =>{
      this.message = new Date().toLocaleTimeString();
    }, 1000);
  }

  ngOnInit(): void {
  }

}
