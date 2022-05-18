import { Component, OnInit } from '@angular/core';
import { posts } from '../../posts';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  post;

  constructor(private route: ActivatedRoute) { 
    
   }

  ngOnInit(): void {

    // this.route.paramMap.subscribe
    this.route.paramMap.subscribe(params => {
      this.post = posts[+params.get('postId')];
      console.log(params)
      // this.post = posts[+params.get('id')];
      // console.log(posts[+params.get('productId')])
    });

  }

}
