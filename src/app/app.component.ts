import { Component, OnInit} from '@angular/core';
import { PictureComponent } from './picture/picture.component';
import { Picture } from './models/picture.model';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    PictureComponent,
    CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  pictures! : Picture[];

  ngOnInit()  {
    this.pictures = [
      {
        title : 'Norway', 
        description : 'Fjords in Norway', 
        createdDate : new Date(), 
        likes : 1, 
        imageUrl : 'https://images.pexels.com/photos/1647962/pexels-photo-1647962.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      },
      {
        title : 'Norway', 
        description : 'Bergen in Norway', 
        createdDate : new Date(), 
        likes : 1, 
        imageUrl : 'https://images.pexels.com/photos/1647962/pexels-photo-1647962.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      },
      {
        title : 'Norway', 
        description : 'Waterfalls in Norway', 
        createdDate : new Date(), 
        likes : 1, 
        imageUrl : 'https://images.pexels.com/photos/1647962/pexels-photo-1647962.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      }
    ];
    
  }
}
