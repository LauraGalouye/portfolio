import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: `./home.component.html`,
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  title! : string;
  description! : string;
  createdDate! : Date;
  likes! : number;
  imageUrl! : string;

  ngOnInit(): void {
    this.title = 'Norway';
    this.description = 'Fjords in Norway';
    this.createdDate = new Date();
    this.likes = 6;
    this.imageUrl = 'https://images.pexels.com/photos/1647962/pexels-photo-1647962.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
  }

}
