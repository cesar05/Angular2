import { Component, OnInit } from '@angular/core';

export class Hero{
  id:number;
  name:string;
}

@Component({
  selector: 'app-my-app',
  templateUrl: './my-app.component.html',
  styleUrls: ['./my-app.component.css']
})
export class MyAppComponent implements OnInit {

  hero: Hero={
    id:1,name:'César'
  };

  constructor() { }

  ngOnInit() {
  }

}
