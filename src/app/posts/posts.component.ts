import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

import { posts } from '../posts';
import { FirebaseService } from '../services/firebase/firebase.service';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})



export class PostsComponent implements OnInit {
  // posts;
  posts = posts;
  newFruit = '';

  @ViewChild('bindingInput') bindingInput!: ElementRef;


  constructor(public firebaseService : FirebaseService) { }

  ngOnInit(): void {
  }

  addPost(name: string, price: number, description: string ) {
    
    this.posts.push({
     name,
     price,
     description
    });


    const output = document.getElementById('output');
    output.textContent = JSON.stringify(posts)

console.warn(posts)
//console.error(posts)


   }


  async log_out(){
      await this.firebaseService.logout()
   }


   edit(v: string){
    //  console.warn("NEW")
     console.warn(v)
    //  console.warn(this.newFruit)
   }

}
