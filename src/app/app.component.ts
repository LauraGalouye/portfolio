import { Component, OnInit } from '@angular/core';
import { PictureComponent } from './picture/picture.component';
import { Picture } from './models/picture.model';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    PictureComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  myPicture! : Picture;
  myPicturen2! : Picture;
  myPicturen3! : Picture;

  ngOnInit()  {
    this.myPicture = new Picture(
      'Norway', 
      'Fjords in Norway', 
      new Date(), 
      1, 
      'https://images.pexels.com/photos/1647962/pexels-photo-1647962.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    );
    this.myPicturen2 = new Picture(
      'Norway', 
      'Bergen in Norway', 
      new Date(), 
      1, 
      'https://images.pexels.com/photos/1647962/pexels-photo-1647962.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    );
    this.myPicturen3 = new Picture(
      'Norway', 
      'Waterfalls in Norway', 
      new Date(), 
      1, 
      'https://images.pexels.com/photos/1647962/pexels-photo-1647962.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    );
  }
}
