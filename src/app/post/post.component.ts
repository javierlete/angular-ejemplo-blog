import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Post } from '../modelos/post.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  post: Post;

  constructor(
    private postService: PostService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.postService.getById(id).subscribe(
      post => this.post = post
    );
  }

}
