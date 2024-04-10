import { Component, OnInit, Input, } from '@angular/core';
import { Picture } from '../models/picture.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-picture',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: `./picture.component.html`,
  styleUrl: './picture.component.css'
})
export class PictureComponent implements OnInit {
  @Input() picture! : Picture;

  title! : string;
  description! : string;
  createdDate! : Date;
  buttonText! : string;
  likes! : number;
  imageUrl! : string;

  ngOnInit(): void {
    this.buttonText = 'Liked';
  }

  onLike() {
    if (this.buttonText === "Wow!"){
    this.picture.likes++;
    this.buttonText = 'Liked';
    }
    else {
    this.picture.likes--;
    this.buttonText = 'Wow!';
    }
  }

}
