import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../modelos/post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts: Post[];
  
  constructor(
    private postService: PostService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    const userId = +this.route.snapshot.paramMap.get('id');
    this.postService.getByUserId(userId).subscribe(posts => this.posts = posts);
  }

}
