import { Component, OnInit } from '@angular/core';
import { CommentService } from '../services/comment.service';
import { ActivatedRoute } from '@angular/router';
import { Comentario } from '../modelos/comentario.model';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {

  comentarios: Comentario[];

  constructor(
    private commentService: CommentService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.commentService.getCommentsByPostId(id).subscribe(
      comentarios => this.comentarios = comentarios
    );
  }

}
