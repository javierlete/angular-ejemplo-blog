import { Component, OnInit, Input } from '@angular/core';
import { Comentario } from '../modelos/comentario.model';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input() comentario: Comentario;
  
  constructor() { }

  ngOnInit() {
  }

}
